<template>
  <div ref="container" class="m-0 h-screen w-full overflow-hidden p-0"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js'

const container = ref<HTMLElement | null>(null)
let scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer,
  lineSegments: THREE.LineSegments
const perlin = new ImprovedNoise()

const segX = 200
const segY = 200
const size = 150

let mouseOffset = new THREE.Vector2(0, 0)
let targetMouseOffset = new THREE.Vector2(0, 0)

onMounted(() => {
  init()
  animate()
  window.addEventListener('resize', onWindowResize)
  window.addEventListener('mousemove', onMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('resize', onWindowResize)
  window.removeEventListener('mousemove', onMouseMove)
  if (renderer) renderer.dispose()
})

function init() {
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x010a00)

  // Cámara más baja y con más inclinación para intensificar perspectiva
  camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(0, 25, 10)
  camera.lookAt(0, 0, 0)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  container.value!.appendChild(renderer.domElement)

  const geometry = new THREE.PlaneGeometry(size, size, segX, segY)
  geometry.rotateX(-Math.PI / 2)

  // Crear solo líneas verticales
  let indices: number[] = []
  for (let x = 0; x <= segX; x++) {
    for (let y = 0; y < segY; y++) {
      const idx1 = y * (segX + 1) + x
      const idx2 = (y + 1) * (segX + 1) + x
      indices.push(idx1, idx2)
    }
  }
  geometry.setIndex(indices)

  const uv = geometry.attributes.uv as THREE.BufferAttribute
  const pos = geometry.attributes.position
  const vec2 = new THREE.Vector2()

  for (let i = 0; i < pos.count; i++) {
    vec2.fromBufferAttribute(uv, i).multiplyScalar(3)
    pos.setY(i, perlin.noise(vec2.x, vec2.y, 0) * 6)
  }
  pos.needsUpdate = true

  const material = new THREE.LineBasicMaterial({
    color: 0x414141,
    transparent: true,
    opacity: 0.45,
  })

  lineSegments = new THREE.LineSegments(geometry, material)
  scene.add(lineSegments)
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function onMouseMove(event: MouseEvent) {
  targetMouseOffset.x = (event.clientX / window.innerWidth - 0.5) * 2
  targetMouseOffset.y = (event.clientY / window.innerHeight - 0.5) * 2
}

function animate() {
  requestAnimationFrame(animate)

  mouseOffset.lerp(targetMouseOffset, 0.05)

  const time = performance.now() * 0.0006
  const pos = lineSegments.geometry.attributes.position
  const uv = lineSegments.geometry.attributes.uv as THREE.BufferAttribute
  const vec2 = new THREE.Vector2()

  for (let i = 0; i < pos.count; i++) {
    vec2.fromBufferAttribute(uv, i).multiplyScalar(3)

    // Factor de profundidad más agresivo
    const zWorld = pos.getZ(i)
    const depthFactor = zWorld * 0.15 // antes 0.05

    // Ondas más grandes cerca, más suaves lejos
    const amplitude = 8 - Math.abs(zWorld) * 0.1

    const noiseValue = perlin.noise(
      vec2.x + mouseOffset.x * 3,
      vec2.y + mouseOffset.y * 3,
      time + depthFactor
    )

    pos.setY(i, noiseValue * amplitude)
  }

  pos.needsUpdate = true
  renderer.render(scene, camera)
}
</script>

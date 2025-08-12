<template>
  <div ref="container" class="m-0 h-screen w-full overflow-hidden p-0"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js'

const container = ref(null)
let scene, camera, renderer, lineSegments
const perlin = new ImprovedNoise()

const segX = 120
const segY = 150
const size = 80

onMounted(() => {
  init()
  animate()
  window.addEventListener('resize', onWindowResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onWindowResize)
  if (renderer) renderer.dispose()
})

function init() {
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x010a00)

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(0, 20, 0.1)
  camera.lookAt(0, 0, 0)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  container.value.appendChild(renderer.domElement)

  const geometry = new THREE.PlaneGeometry(size, size, segX, segY)
  geometry.rotateX(-Math.PI / 2)

  // Solo líneas horizontales
  let indices = []
  for (let x = 0; x <= segX; x++) {
    for (let y = 0; y < segY; y++) {
      const idx1 = y * (segX + 1) + x
      const idx2 = (y + 1) * (segX + 1) + x
      indices.push(idx1, idx2)
    }
  }
  geometry.setIndex(indices)

  // Ruido Perlin para ondular en Y
  const pos = geometry.attributes.position
  const uv = geometry.attributes.uv
  const vec2 = new THREE.Vector2()
  for (let i = 0; i < pos.count; i++) {
    vec2.fromBufferAttribute(uv, i).multiplyScalar(2)
    pos.setY(i, perlin.noise(vec2.x, vec2.y, 0) * 2)
  }
  pos.needsUpdate = true

  const material = new THREE.LineBasicMaterial({
    color: '0x414141',
    transparent: true,
    opacity: 0.3,
  })

  lineSegments = new THREE.LineSegments(geometry, material)
  scene.add(lineSegments)
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function animate() {
  requestAnimationFrame(animate)

  const time = performance.now() * 0.0003
  const pos = lineSegments.geometry.attributes.position
  const uv = lineSegments.geometry.attributes.uv
  const vec2 = new THREE.Vector2()
  for (let i = 0; i < pos.count; i++) {
    vec2.fromBufferAttribute(uv, i).multiplyScalar(2)
    pos.setY(i, perlin.noise(vec2.x, vec2.y, time) * 4)
  }
  pos.needsUpdate = true

  renderer.render(scene, camera)
}
</script>

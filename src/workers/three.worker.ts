import {
  Scene,
  Color,
  PerspectiveCamera,
  WebGLRenderer,
  LineSegments,
  Vector2,
  PlaneGeometry,
  BufferAttribute,
  LineBasicMaterial,
} from 'three'
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js'

let renderer: WebGLRenderer
let scene: Scene
let camera: PerspectiveCamera
let lineSegments: LineSegments
const mouseOffset = new Vector2(0, 0)
const targetMouseOffset = new Vector2(0, 0)
const perlin = new ImprovedNoise()

self.onmessage = e => {
  if (e.data.canvas) {
    init(e.data.canvas, e.data.size.w, e.data.size.h)
    animate()
  }

  if (e.data.type === 'resize') {
    camera.aspect = e.data.w / e.data.h
    camera.updateProjectionMatrix()
    renderer.setSize(e.data.w, e.data.h, false)
  }

  if (e.data.type === 'mousemove') {
    targetMouseOffset.x = (e.data.x / renderer.domElement.width - 0.5) * 2
    targetMouseOffset.y = (e.data.y / renderer.domElement.height - 0.5) * 2
  }
}

function init(canvas: OffscreenCanvas, w: number, h: number) {
  const gl = canvas.getContext('webgl2')

  if (!gl) {
    console.error('WebGL2 no soportado en OffscreenCanvas')
    return
  }

  scene = new Scene()
  scene.background = new Color(0x010a00)

  camera = new PerspectiveCamera(80, w / h, 0.1, 1000)
  camera.position.set(0, 25, 10)
  camera.lookAt(0, 0, 0)

  renderer = new WebGLRenderer({
    canvas,
    context: canvas.getContext('webgl2', { antialias: true, powerPreference: 'high-performance' })!,
  })

  renderer.setSize(w, h, false)

  const segX = 200
  const segY = 200
  const size = 150

  const geometry = new PlaneGeometry(size, size, segX, segY)
  geometry.rotateX(-Math.PI / 2)

  const indices: number[] = []
  for (let x = 0; x <= segX; x++) {
    for (let y = 0; y < segY; y++) {
      const idx1 = y * (segX + 1) + x
      const idx2 = (y + 1) * (segX + 1) + x
      indices.push(idx1, idx2)
    }
  }
  geometry.setIndex(indices)

  const uv = geometry.attributes.uv as BufferAttribute
  const pos = geometry.attributes.position
  const vec2 = new Vector2()

  for (let i = 0; i < pos.count; i++) {
    vec2.fromBufferAttribute(uv, i).multiplyScalar(3)
    pos.setY(i, perlin.noise(vec2.x, vec2.y, 0) * 6)
  }
  pos.needsUpdate = true

  const material = new LineBasicMaterial({
    color: 0x414141,
    transparent: true,
    opacity: 0.45,
  })

  lineSegments = new LineSegments(geometry, material)
  scene.add(lineSegments)
}

function animate() {
  requestAnimationFrame(animate)

  mouseOffset.lerp(targetMouseOffset, 0.05)

  const time = performance.now() * 0.0006
  const pos = lineSegments.geometry.attributes.position
  const uv = lineSegments.geometry.attributes.uv as BufferAttribute
  const vec2 = new Vector2()

  for (let i = 0; i < pos.count; i++) {
    vec2.fromBufferAttribute(uv, i).multiplyScalar(3)
    const zWorld = pos.getZ(i)
    const depthFactor = zWorld * 0.15
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

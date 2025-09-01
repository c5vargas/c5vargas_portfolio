<template>
  <div ref="container" class="h-screen w-full overflow-hidden"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'

const container = ref<HTMLElement | null>(null)
let worker: Worker | null = null

onMounted(() => {
  const canvas = document.createElement('canvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  container.value!.appendChild(canvas)

  const offscreen = canvas.transferControlToOffscreen()

  worker = new Worker(new URL('../../workers/three.worker.ts', import.meta.url), {
    type: 'module',
  })

  worker.postMessage({ canvas: offscreen, size: { w: window.innerWidth, h: window.innerHeight } }, [
    offscreen,
  ])

  // Pasamos resize al worker
  const handleResize = () => {
    worker?.postMessage({ type: 'resize', w: window.innerWidth, h: window.innerHeight })
  }
  window.addEventListener('resize', handleResize)

  // Pasamos mousemove al worker
  const handleMove = (e: MouseEvent) => {
    worker?.postMessage({ type: 'mousemove', x: e.clientX, y: e.clientY })
  }
  window.addEventListener('mousemove', handleMove)

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('mousemove', handleMove)
    worker?.terminate()
  })
})
</script>

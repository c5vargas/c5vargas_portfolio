<template>
  <a
    ref="btnRef"
    class="group glass relative flex h-20 w-54 items-center justify-center gap-1.5 overflow-hidden rounded-full text-sm"
    :class="$attrs.class"
    :href="link"
    target="_blank"
    @mouseenter="onHover"
    @mouseleave="onLeave"
  >
    <div class="relative font-serif text-2xl">{{ label }}</div>
    <svg
      ref="svgRef"
      class="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
      viewBox="0 0 500 500"
      role="presentation"
    ></svg>
  </a>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import gsap from 'gsap'

defineOptions({ inheritAttrs: false })

defineProps<{
  link: string
  label: string
}>()

const btnRef = ref<HTMLElement | null>(null)
const svgRef = ref<SVGSVGElement | null>(null)

const numberOfShapes = 5
const shapes = [
  'M0 240a169.7 169.7 0 0 0 240 0 169.7 169.7 0 0 0-240 0ZM240 0a169.7 169.7 0 0 0 0 240 169.7 169.7 0 0 0 0-240ZM480 240a169.7 169.7 0 0 0-240 0 169.7 169.7 0 0 0 240 0ZM240 480a169.7 169.7 0 0 0 0-240 169.7 169.7 0 0 0 0 240Z',
  'M343.3 282.8A239 239 0 0 1 480 240c-50.8 0-98-15.8-136.8-42.8 8.4-46.5 30.6-91 66.5-127-36 36-80.4 58.2-127 66.5C255.9 98 240 50.8 240 0c0 50.8-15.8 98-42.8 136.8-46.5-8.4-91-30.6-127-66.5 36 36 58.2 80.4 66.5 127C98 224.1 50.8 240 0 240c50.8 0 98 15.8 136.8 42.8-8.4 46.5-30.6 91-66.5 127 36-36 80.4-58.2 127-66.6A239 239 0 0 1 240 480c0-50.8 15.8-98 42.8-136.8 46.5 8.4 91 30.6 127 66.5-36-36-58.2-80.4-66.5-127Z',
  'M450 210h-59.2l54.7-22.6a30 30 0 1 0-23-55.4L368 154.5l41.8-41.9a30 30 0 1 0-42.4-42.4L325.4 112l22.7-54.6a30 30 0 1 0-55.4-23L270 89.2V30a30 30 0 1 0-60 0v59.2l-22.7-54.7a30 30 0 1 0-55.4 23l22.6 54.6-41.8-41.8a30 30 0 1 0-42.4 42.4l41.8 41.9-54.7-22.7a30 30 0 1 0-23 55.4L89.3 210H30a30 30 0 1 0 0 60h59.2l-54.7 22.7a30 30 0 1 0 23 55.4l54.6-22.6-41.8 41.8a30 30 0 1 0 42.4 42.4l41.9-41.8-22.7 54.7a30 30 0 1 0 55.4 23l22.7-54.8V450a30 30 0 1 0 60 0v-59.2l22.7 54.7a30 30 0 1 0 55.4-23L325.5 368l41.8 41.8a30 30 0 1 0 42.4-42.4L368 325.4l54.7 22.7a30 30 0 1 0 23-55.4L390.7 270H450a30 30 0 1 0 0-60Z',
]

const onHover = () => {
  if (!svgRef.value) return
  const animatedShapes: SVGPathElement[] = []

  for (let i = 0; i < numberOfShapes; i++) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    path.setAttribute('d', gsap.utils.random(shapes))
    path.style.fill = gsap.utils.random(['#0ae448', '#00bae2', '#9d95ff', '#abff84'])
    svgRef.value.appendChild(path)
    animatedShapes.push(path)
  }

  const killShapes = () => animatedShapes.forEach(shape => svgRef.value?.removeChild(shape))

  gsap.set(animatedShapes, {
    transformOrigin: 'center',
    scale: 'random(0.4, 1)',
    x: 'random(-500, 500)',
    y: 'random(-300, -500)',
    opacity: 1,
  })

  gsap.to(btnRef.value, { duration: 0.4, scale: 1.1, rotate: 4 })

  gsap.to(animatedShapes, {
    duration: 5,
    x: 'random(-800, 800)',
    y: 'random(50, 500)',
    rotate: 'random(-180, 180)',
    opacity: 0,
    ease: 'power4.out',
    stagger: { amount: 0.2 },
    onComplete: killShapes,
  })
}

const onLeave = () => {
  gsap.to(btnRef.value, { duration: 0.4, scale: 1, rotate: 0 })
}
</script>

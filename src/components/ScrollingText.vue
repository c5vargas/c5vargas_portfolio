<template>
  <div class="w-full overflow-hidden">
    <span ref="textRef" :class="['inline-block whitespace-nowrap', $attrs.class]">
      {{ text }}<span class="ml-2">{{ text }}</span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { gsap } from 'gsap'

interface Props {
  text: string
  baseSpeed?: number
  scrollSpeedIncrement?: number
}

const props = withDefaults(defineProps<Props>(), {
  baseSpeed: 30,
  scrollSpeedIncrement: 5,
})

const textRef = ref<HTMLElement | null>(null)
let animation: gsap.core.Tween | null = null
let lastScrollY = window.scrollY
let scrollTimeout: number | null = null
let currentDirection: 'left' | 'right' = 'left'
const speed = ref(props.baseSpeed)

const animateText = () => {
  if (!textRef.value) return
  if (animation) animation.kill()

  const totalWidth = textRef.value.scrollWidth / 2

  animation = gsap.to(textRef.value, {
    x: currentDirection === 'left' ? `-=${totalWidth}` : `+=${totalWidth}`,
    duration: speed.value,
    repeat: -1,
    ease: 'none',
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % totalWidth),
    },
  })
}

const handleScroll = () => {
  const currentScrollY = window.scrollY
  const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up'
  currentDirection = scrollDirection === 'up' ? 'right' : 'left'

  // Aumenta la velocidad
  speed.value = Math.max(1, props.baseSpeed - props.scrollSpeedIncrement)

  if (animation) {
    animation.kill()
    animateText()
  }

  if (scrollTimeout) clearTimeout(scrollTimeout)
  scrollTimeout = window.setTimeout(() => {
    speed.value = props.baseSpeed
    if (animation) {
      animation.kill()
      animateText()
    }
  }, 200)

  lastScrollY = currentScrollY
}

onMounted(() => {
  if (textRef.value) {
    gsap.set(textRef.value, { x: 0 })
    animateText()
  }
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (animation) animation.kill()
  if (scrollTimeout) clearTimeout(scrollTimeout)
})

watch(
  () => [props.text, props.baseSpeed, props.scrollSpeedIncrement],
  () => {
    speed.value = props.baseSpeed
    animateText()
  }
)
</script>

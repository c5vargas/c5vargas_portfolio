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
import { useGSAP } from 'gsap-vue'

interface Props {
  text: string
  baseSpeed?: number
  scrollSpeedIncrement?: number
  startDirection?: 'left' | 'right'
}

const props = withDefaults(defineProps<Props>(), {
  baseSpeed: 180,
  scrollSpeedIncrement: 100,
  startDirection: 'left',
})

const textRef = ref<HTMLElement | null>(null)
let animation: gsap.core.Tween | null = null
let scrollTimeout: number | null = null
let currentDirection: 'left' | 'right' = props.startDirection
const speed = ref(props.baseSpeed)

const animateText = () => {
  if (!textRef.value) return
  if (animation) animation.kill()

  const totalWidth = textRef.value.scrollWidth / 2

  animation = gsap.to(textRef.value, {
    x: currentDirection === 'left' ? `-=${totalWidth}` : `+=${totalWidth}`,
    duration: speed.value,
    repeat: -1,
    ease: 'power2.out',
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % totalWidth),
    },
  })
}

const handleScroll = () => {
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
}

useGSAP(
  () => {
    if (textRef.value) {
      gsap.set(textRef.value, { x: 0 })
      animateText()
    }
  },
  { scope: 'div' }
)

onMounted(() => {
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

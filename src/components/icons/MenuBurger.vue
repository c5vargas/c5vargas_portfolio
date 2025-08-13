<template>
  <svg
    id="menuToggle"
    viewBox="0 0 50 50"
    width="30"
    height="30"
    class="fixed top-2 right-5 z-50 block cursor-pointer md:top-2 md:right-1/2"
    fill="none"
    stroke="#fff"
    stroke-linecap="round"
    stroke-width="3"
  >
    <g id="stage">
      <path class="stage-one" d="M12,8c0,0,2.2,0,13,0s13,0,13,0"></path>
      <path class="stage-two" d="M12,42c0,0,2.2,0,13,0s13,0,13,0"></path>
      <line class="stage-line" x1="5" y1="25" x2="45" y2="25"></line>
    </g>

    <g id="end" style="display: none">
      <path class="end-one" d="M38,12L25,25.3L12,12"></path>
      <path class="end-two" d="M12,38l13-12.7L38,38"></path>
    </g>
  </svg>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { gsap } from 'gsap'

const { isOpen } = defineProps<{
  isOpen: boolean
}>()

watch(
  () => isOpen,
  newValue => {
    if (!newValue) {
      // Animación hamburguesa → X
      gsap.to('.stage-one', { duration: 0.3, attr: { d: 'M38,12L25,25.3L12,12' } })
      gsap.to('.stage-two', { duration: 0.3, attr: { d: 'M12,38l13-12.7L38,38' } })
      gsap.to('.stage-line', { duration: 0.3, scaleX: 0, transformOrigin: 'center' })
    } else {
      // Animación X → hamburguesa
      gsap.to('.stage-one', { duration: 0.3, attr: { d: 'M12,8c0,0,2.2,0,13,0s13,0,13,0' } })
      gsap.to('.stage-two', { duration: 0.3, attr: { d: 'M12,42c0,0,2.2,0,13,0s13,0,13,0' } })
      gsap.to('.stage-line', { duration: 0.3, scaleX: 1, transformOrigin: 'center' })
    }
  }
)
</script>

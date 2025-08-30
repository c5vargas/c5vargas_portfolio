<template>
  <img
    ref="pyramidRef1"
    src="/pyramid.webp"
    class="pointer-events-none absolute -left-20 w-40 opacity-50 md:w-52"
    role="presentational"
    alt=""
  />
  <img
    ref="pyramidRef2"
    src="/pyramid.webp"
    class="pointer-events-none absolute -right-20 w-40 opacity-50 md:w-52"
    role="presentational"
    alt=""
  />
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { useGSAP } from 'gsap-vue'
import { ref } from 'vue'

const { containerRef } = defineProps<{
  containerRef: HTMLElement
}>()

const pyramidRef1 = ref<HTMLImageElement | null>(null)
const pyramidRef2 = ref<HTMLImageElement | null>(null)

useGSAP(
  () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef,
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
        },
      })
      .add([
        gsap.fromTo(
          pyramidRef1.value,
          { rotate: 25, bottom: 80, scale: 1 },
          { rotate: 50, bottom: 0, left: 30, scale: 0.8 }
        ),
        gsap.fromTo(
          pyramidRef2.value,
          { rotate: -25, bottom: 40, scale: 1 },
          { rotate: -40, bottom: -120, scale: 0.8 }
        ),
      ])
  },
  { scope: containerRef }
)
</script>

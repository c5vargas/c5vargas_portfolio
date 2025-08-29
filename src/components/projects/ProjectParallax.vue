<template>
  <div
    ref="parallaxRef"
    class="h-screen w-full bg-cover bg-center"
    :style="{ backgroundImage: bgImage }"
  ></div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Portfolio } from '@/libs/mock/portfolio'
import { useGSAP } from 'gsap-vue'
import gsap from 'gsap'

const { project } = defineProps<{
  project: Portfolio
}>()

const parallaxRef = ref<HTMLElement | null>(null)
const bgImage = computed(() => `url(${project.images[0]})`)

useGSAP(
  () => {
    if (!project) return
    gsap
      .timeline({
        scrollTrigger: {
          trigger: parallaxRef.value,
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
        },
      })
      .fromTo(parallaxRef.value, { height: '100vh' }, { height: '130vh' })
  },
  { scope: parallaxRef }
)
</script>

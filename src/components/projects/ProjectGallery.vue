<template>
  <main ref="containerRef" class="padding w-full items-center md:flex">
    <div class="flex h-40 items-center justify-center md:min-w-[300px] md:p-4">
      <span ref="textRef" class="text-3xl font-bold uppercase md:text-[5rem]">Drag</span>
    </div>
    <ImagesCarousel
      :images="project.images"
      @onTouchStart="startAnimation"
      @onTouchEnd="endAnimation"
    />
  </main>
</template>

<script setup lang="ts">
import type { Portfolio } from '@/libs/mock/portfolio'
import ImagesCarousel from '../ImagesCarousel.vue'
import { ref } from 'vue'
import { useGSAP } from 'gsap-vue'
import gsap from 'gsap'

const { project } = defineProps<{ project: Portfolio }>()
const containerRef = ref<HTMLElement | null>(null)
const textRef = ref<HTMLSpanElement | null>(null)

let textAnimation: gsap.core.Tween

useGSAP(
  () => {
    textAnimation = gsap
      .fromTo(
        textRef.value,
        {
          fontSize: '6rem',
          color: '#fff3e8',
        },
        {
          duration: 0.4,
          fontSize: '4rem',
          color: '#11363b',
          ease: 'power2.inOut',
        }
      )
      .pause()
  },
  { scope: containerRef }
)

const startAnimation = () => {
  console.log('Start animation')
  textAnimation.play()
}

const endAnimation = () => {
  textAnimation.reverse()
}
</script>

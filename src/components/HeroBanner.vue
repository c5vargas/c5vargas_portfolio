<template>
  <section class="relative h-screen overflow-hidden">
    <div class="absolute top-0 left-0 h-full w-full overflow-hidden bg-gray-950">
      <HeroBannerBackground />
    </div>
    <div
      class="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gradient-to-b from-black/30 to-black/30 px-5 text-center"
    >
      <span class="hero-subtitle">Código limpio, diseño funcional, impacto real 🚀</span>
      <div>
        <h1
          class="mx-auto mt-5 mb-20 font-serif text-[5rem] leading-none md:px-10 md:text-[9rem] 2xl:w-1/2"
        >
          Hacer cosas increíbles
          <span class="text-primary italic">es mi rutina</span>
        </h1>
      </div>

      <div class="relative inline-block">
        <a class="button glass flex items-center gap-5 text-sm" href="#">
          <div class="shiny-text inline-block">Let's work together</div>
          <ArrowUpRight class="w-5 animate-pulse text-primary" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'
import ArrowUpRight from './icons/ArrowUpRight.vue'
import HeroBannerBackground from './HeroBannerBackground.vue'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from(['h1', 'span'], {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: 'power2.out',
  })
})
</script>

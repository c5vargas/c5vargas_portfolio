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
          class="mx-auto mt-5 mb-20 font-serif text-[5rem] leading-none lg:px-10 lg:text-[9rem] 2xl:w-1/2"
        >
          Hacer cosas increíbles
          <span class="text-primary italic">es mi rutina</span>
        </h1>
      </div>

      <div class="relative inline-block">
        <a
          ref="btn"
          class="button group glass flex items-center gap-5 text-sm"
          href="mailto:carles@carvar.es"
        >
          <div class="shiny-text inline-block">Conectar ahora</div>
          <ArrowUpRight class="w-5 animate-pulse text-primary group-active:text-secondary" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted, ref } from 'vue'
import ArrowUpRight from './icons/ArrowUpRight.vue'
import HeroBannerBackground from './HeroBannerBackground.vue'

const btn = ref<HTMLElement | null>(null)

gsap.registerPlugin(ScrollTrigger)

function handleMove(e: MouseEvent) {
  const rect = btn.value!.getBoundingClientRect()
  const x = (e.clientX - rect.left - rect.width / 2) * 0.2
  const y = (e.clientY - rect.top - rect.height / 2) * 0.2

  gsap.to(btn.value, {
    x,
    y,
    duration: 0.5,
    ease: 'power2.out',
  })
}

function reset() {
  gsap.to(btn.value, { x: 0, y: 0, duration: 0.5, ease: 'power2.out' })
}

onMounted(() => {
  gsap.from('h1', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power2.out',
  })

  gsap.from(['span', 'a'], {
    duration: 1,
    x: -50,
    opacity: 0,
    ease: 'power2.out',
    delay: 0.2,
  })

  btn.value?.addEventListener('mousemove', handleMove)
  btn.value?.addEventListener('mouseleave', reset)
})

onUnmounted(() => {
  btn.value?.removeEventListener('mousemove', handleMove)
  btn.value?.removeEventListener('mouseleave', reset)
})
</script>

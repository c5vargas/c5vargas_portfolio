<template>
  <main
    ref="containerRef"
    class="relative flex h-screen w-full items-center justify-center md:px-10"
  >
    <img
      ref="pyramidRef"
      src="/pyramid.webp"
      class="absolute -left-20 w-40 md:w-52"
      role="presentational"
    />
    <div
      class="shade-in w-full rounded-4xl border border-white/30 bg-primary py-20 text-black md:max-w-[700px] md:px-10"
    >
      <h3
        class="text-center font-serif text-[3rem] leading-[3rem] md:text-[6rem] md:leading-[6.6rem]"
      >
        Diseños que atrapan. <br />
        Códigos que escalan. <br />
        <span class="font-bold italic">Valor real.</span>
      </h3>
    </div>
    <img
      ref="circleRef"
      src="/circle.webp"
      class="absolute -right-16 w-40 md:w-52"
      role="presentational"
    />
  </main>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { useGSAP } from 'gsap-vue'
import { ref } from 'vue'

const containerRef = ref<HTMLElement | null>(null)
const pyramidRef = ref<HTMLElement | null>(null)
const circleRef = ref<HTMLElement | null>(null)

useGSAP(
  () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.value,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      })
      .fromTo(
        pyramidRef.value,
        {
          rotate: 25,
          top: 120,
          scale: 1,
        },
        {
          rotate: 40,
          top: 240,
          scale: 0.8,
        }
      )
      .fromTo(
        circleRef.value,
        {
          rotate: 25,
          bottom: 180,
          scale: 1,
        },
        {
          rotate: 90,
          bottom: 300,
          scale: 0.8,
        }
      )
  },
  { scope: containerRef }
)
</script>

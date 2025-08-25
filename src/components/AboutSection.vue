<template>
  <main ref="containerRef" class="relative flex h-screen w-full items-center justify-center px-10">
    <img src="/pyramid.webp" id="pyramid" class="absolute -left-20 w-40 md:w-52" alt="" />
    <div
      class="shade-in w-full rounded-4xl border border-white/30 bg-primary px-4 py-20 text-black md:max-w-[700px] md:px-10"
    >
      <h3
        class="text-center font-serif text-[3rem] leading-[3rem] md:text-[6rem] md:leading-[6.6rem]"
      >
        Diseños que atrapan. <br />
        Códigos que escalan. <br />
        <span class="font-bold italic">Valor real.</span>
      </h3>
    </div>
    <img src="/circle.webp" id="circle" class="absolute -right-16 w-40 md:w-52" alt="" />
  </main>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { useGSAP } from 'gsap-vue'
import { ref } from 'vue'

const containerRef = ref()

useGSAP(
  () => {
    // console.log(containerRef)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.value,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    })

    tl.fromTo(
      '#pyramid',
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

    tl.fromTo(
      '#circle',
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

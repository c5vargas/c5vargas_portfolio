<template>
  <section ref="containerRef" class="relative flex h-[992px] items-center justify-center">
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="relative grid h-full w-full max-w-5xl grid-cols-3 gap-12 md:grid-cols-4">
        <component
          v-for="(tool, index) in tools"
          :key="index"
          class="floating-element mx-auto h-14 w-14 rounded-2xl bg-gray-900 object-contain p-2 md:h-20 md:w-20"
          :is="tool.component"
          :class="tool.position"
        />
      </div>
    </div>

    <div class="relative z-10 flex h-1/2 flex-col items-center justify-center gap-3 text-center">
      <p class="text-lg text-gray-200 md:text-xl">Stack de desarrollo profesional</p>
      <span
        class="will-fade block text-4xl font-semibold text-gray-50 opacity-0 text-shadow-lg/30 sm:text-5xl md:text-[5em]"
        >+6 años</span
      >
      <span
        class="will-fade block text-4xl font-semibold text-gray-50 opacity-0 text-shadow-lg/30 sm:text-5xl md:text-[5em]"
        >+4.892 commits</span
      >
      <span
        class="will-fade block text-4xl font-semibold text-gray-50 opacity-0 text-shadow-lg/30 sm:text-5xl md:text-[5em]"
        >+1M interacciones</span
      >
    </div>
  </section>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import {
  CapacitorIcon,
  CloudflareIcon,
  HTMLIcon,
  JavascriptIcon,
  LaravelIcon,
  PostmanIcon,
  ReactIcon,
  TypescriptIcon,
  VuejsIcon,
} from '@/components/icons/software'
import { useGSAP } from 'gsap-vue'
import { ref } from 'vue'

const containerRef = ref<HTMLElement | null>(null)

const tools = [
  { component: CapacitorIcon, position: 'absolute top-24 left-12' },
  { component: CloudflareIcon, position: 'absolute top-24 right-12' },
  { component: HTMLIcon, position: 'absolute top-1/3 right-16' },
  { component: JavascriptIcon, position: 'absolute bottom-1/4 right-0' },
  { component: LaravelIcon, position: 'absolute bottom-36 left-1/2 -translate-x-1/2' },
  { component: PostmanIcon, position: 'absolute bottom-36 left-1/5' },
  { component: ReactIcon, position: 'absolute top-1/2 left-12' },
  { component: TypescriptIcon, position: 'absolute top-1/4 left-1/6' },
  { component: VuejsIcon, position: 'absolute top-14 right-1/3' },
]

useGSAP(
  () => {
    const fadeElements = gsap.utils.toArray<HTMLElement>('.will-fade')
    const floatingElements = gsap.utils.toArray<HTMLElement>('.floating-element')

    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.value,
          start: 'top top',
          end: '+=' + fadeElements.length * 300,
          pin: true,
          scrub: true,
        },
      })
      .fromTo(
        fadeElements,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, stagger: 1, ease: 'power2.out' }
      )

    floatingElements.forEach(el => {
      gsap.fromTo(
        el,
        { scale: 0.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power1.inOut' }
      )

      gsap.to(el, {
        x: gsap.utils.random(-100, 100),
        y: gsap.utils.random(-100, 100),
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'none',
      })
    })
  },
  { scope: containerRef }
)
</script>

<template>
  <section id="tools" class="relative flex h-screen items-center justify-center">
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="relative grid h-[80%] w-full max-w-5xl grid-cols-3 gap-12 md:grid-cols-4">
        <component
          v-for="(tool, index) in tools"
          :key="index"
          class="floating-element mx-auto h-14 w-14 rounded-2xl bg-gray-900 object-contain p-2 md:h-20 md:w-20"
          :is="tool.component"
          :class="tool.position"
        />
      </div>
    </div>

    <div class="relative z-10 flex h-1/2 flex-col gap-3 text-center">
      <p class="text-lg text-gray-200 md:text-xl">Stack de desarrollo profesional</p>
      <span class="text-5xl font-semibold text-gray-300 md:text-[5em]">+6 años</span>
      <span class="text-5xl font-semibold text-gray-300 md:text-[5em]">3150 commits</span>
      <span class="text-5xl font-semibold text-gray-300 md:text-[5em]">1M interacciones</span>
    </div>
  </section>
</template>

<script setup lang="ts">
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
import { useGSAP } from '@/composables/useGSAP'
import gsap from 'gsap'

useGSAP(
  () => {
    const elements = gsap.utils.toArray<HTMLElement>('.floating-element')

    elements.forEach(el => {
      const xMovement = gsap.utils.random(-100, 100)
      const yMovement = gsap.utils.random(-100, 100)

      gsap.to(el, {
        x: xMovement,
        y: yMovement,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'none',
      })
    })
  },
  { scope: '#tools' }
)

const tools = [
  { component: CapacitorIcon, position: 'absolute top-12 left-12' },
  { component: CloudflareIcon, position: 'absolute top-24 right-12' },
  { component: HTMLIcon, position: 'absolute top-1/3 right-16' },
  { component: JavascriptIcon, position: 'absolute bottom-1/4 right-0' },
  { component: LaravelIcon, position: 'absolute bottom-20 left-1/2 -translate-x-1/2' },
  { component: PostmanIcon, position: 'absolute bottom-36 left-1/5' },
  { component: ReactIcon, position: 'absolute top-1/2 left-12' },
  { component: TypescriptIcon, position: 'absolute top-1/4 left-1/6' },
  { component: VuejsIcon, position: 'absolute top-4 right-1/3' },
]
</script>

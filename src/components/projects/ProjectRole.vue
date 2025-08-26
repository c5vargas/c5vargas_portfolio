<template>
  <article ref="containerRef" class="relative overflow-hidden py-10 md:py-40">
    <div class="container mx-auto items-center justify-between px-4 md:flex md:p-0">
      <header class="mb-10 md:mb-0">
        <h2 class="w-full text-[5rem] font-bold uppercase">Mi rol</h2>
        <p class="text-xl font-semibold md:max-w-2/3">{{ project.extract }}</p>
      </header>
      <div class="max-w-[714px]">
        <div ref="descrRef" class="text-2xl opacity-50 [&>p]:mb-6" v-html="project.descr" />
        <div class="mt-6 md:absolute">
          <MainButton :link="project.link" label="Ver proyecto" />
        </div>
      </div>
    </div>

    <PyramidDecor v-if="containerRef" :containerRef="containerRef" />
  </article>
</template>

<script setup lang="ts">
import type { Portfolio } from '@/libs/mock/portfolio'
import { ref } from 'vue'
import { prefersReducedMotion } from '@/libs/helpers/reducedMotion'
import { useGSAP } from 'gsap-vue'

import PyramidDecor from '@/components/projects/PyramidDecor.vue'
import MainButton from '@/components/MainButton.vue'
import gsap from 'gsap'

const { project } = defineProps<{ project: Portfolio }>()

const descrRef = ref<HTMLElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)

useGSAP(
  () => {
    if (prefersReducedMotion) {
      gsap.to(descrRef.value, { opacity: 1 })
      return
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.value,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    })

    tl.fromTo(
      descrRef.value,
      {
        opacity: 0.5,
      },
      {
        opacity: 1,
      }
    )
  },
  { scope: containerRef }
)
</script>

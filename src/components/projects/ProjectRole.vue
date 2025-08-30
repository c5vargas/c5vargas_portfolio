<template>
  <article ref="containerRef" class="padding relative overflow-hidden py-20 md:py-56">
    <div class="container mx-auto items-center justify-between md:flex">
      <header class="mb-10 md:mb-0">
        <span class="w-full text-xl leading-4 font-bold uppercase md:text-[2rem]">{{
          project.subTitle
        }}</span>
        <h2 class="w-full text-4xl font-bold uppercase md:text-[5rem] md:leading-[4rem]">
          {{ project.name }}
        </h2>
        <p class="mt-8 text-xl font-semibold md:max-w-2/3">{{ project.extract }}</p>
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
import { gsap } from 'gsap'

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
        end: 'bottom top',
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

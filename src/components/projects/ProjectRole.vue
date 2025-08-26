<template>
  <article ref="containerRef" class="relative py-40">
    <div class="container mx-auto items-center justify-between px-4 md:flex md:p-0">
      <header class="mb-10 md:mb-0">
        <h2 class="w-full text-[5rem] font-bold uppercase">Mi rol</h2>
        <p class="text-xl font-semibold md:max-w-2/3">{{ project.extract }}</p>
      </header>
      <div class="max-w-[714px]">
        <div class="text-2xl [&>p]:mb-6" v-html="project.descr" />
        <div class="absolute mt-6">
          <MainButton :link="project.link" label="Ver proyecto" />
        </div>
      </div>
    </div>

    <PyramidDecor v-if="containerRef" :containerRef="containerRef" />
  </article>
</template>

<script setup lang="ts">
import type { Portfolio } from '@/libs/mock/portfolio'
import { defineProps, ref } from 'vue'

import PyramidDecor from '@/components/projects/PyramidDecor.vue'
import MainButton from '@/components/MainButton.vue'

const { project } = defineProps<{ project: Portfolio }>()

const containerRef = ref<HTMLElement | null>(null)
</script>

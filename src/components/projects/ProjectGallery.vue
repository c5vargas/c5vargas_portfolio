<template>
  <main class="padding w-full items-center md:flex">
    <div class="md:p-4">
      <span class="text-3xl font-bold uppercase md:text-[5rem]">Drag</span>
    </div>
    <ImagesCarousel :images="project.images" />
  </main>
</template>

<script setup lang="ts">
import type { Portfolio } from '@/libs/mock/portfolio'
import ImagesCarousel from '../ImagesCarousel.vue'

const { project } = defineProps<{ project: Portfolio }>()
</script>

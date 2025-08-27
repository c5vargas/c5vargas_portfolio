<template>
  <header class="padding container mx-auto items-center pb-10 lg:flex lg:justify-between lg:pt-10">
    <h1
      id="modal-title"
      class="col-span-12 font-serif text-[3rem] font-bold uppercase md:col-span-8 md:text-[8rem] lg:text-[10rem]"
    >
      {{ project.name }}
    </h1>

    <section id="tech-stack" class="max-w-[480px]">
      <ul class="flex flex-wrap gap-3">
        <li
          v-for="item in techStack"
          :key="item"
          class="flex h-12 w-auto cursor-pointer items-center rounded-full border border-gray-400 px-6 duration-300 hover:rotate-4"
        >
          <span class="mt-0.5 font-serif text-lg leading-6">{{ item }}</span>
        </li>
      </ul>
    </section>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Portfolio } from '@/libs/mock/portfolio'

const props = defineProps<{ project: Portfolio }>()
const techStack = computed(() => props.project.stack?.trim().split(',') || [])
</script>

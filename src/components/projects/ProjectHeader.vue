<template>
  <header class="container mx-auto grid h-[30rem] grid-cols-12 items-center">
    <h1
      id="modal-title"
      class="col-span-12 font-serif text-[10rem] font-bold uppercase md:col-span-8"
    >
      {{ project.name }}
    </h1>
    <section id="tech-stack" class="col-span-12 md:col-span-4">
      <ul class="flex flex-wrap gap-3">
        <li
          v-for="item in techStack"
          :key="item"
          class="flex h-12 w-auto items-center rounded-full border border-gray-400 px-6"
        >
          <span class="mt-0.5 font-serif text-lg leading-6">{{ item }}</span>
        </li>
      </ul>
    </section>
  </header>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import type { Portfolio } from '@/libs/mock/portfolio'

const props = defineProps<{ project: Portfolio }>()
const techStack = computed(() => props.project.stack?.trim().split(',') || [])
</script>

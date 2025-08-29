<template>
  <div class="relative bg-repeat" :style="{ backgroundImage: `url(${bgImage})` }">
    <div class="h-full w-full bg-black/80 py-6">
      <ScrollingText
        :text="getScrollingText"
        class="text-[4rem] font-bold uppercase md:text-[8rem]"
        start-direction="left"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ScrollingText from '@/components/ScrollingText.vue'
import { computed } from 'vue'

const { projectName } = defineProps<{
  projectName: string
}>()
const getScrollingText = computed(() => ' ' + (projectName + ' ').repeat(5).trim())
const bgImage =
  'https://res.cloudinary.com/carvar-es/image/upload/v1756479107/www.carvar.es/160644_tq142m.webp'
</script>

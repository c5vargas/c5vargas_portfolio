<template>
  <swiper
    :slidesPerView="1.2"
    :spaceBetween="20"
    :pagination="{
      clickable: true,
    }"
    class="cursor-none"
    @mouseenter="showCustomCursor = true"
    @mouseleave="showCustomCursor = false"
    @mousemove="updateCursorPosition"
  >
    <swiper-slide v-for="image in images" :key="image">
      <img
        :src="`/${image}`"
        class="block w-full max-w-screen rounded-2xl object-cover object-center"
        alt="Imagen del proyecto"
      />
    </swiper-slide>
  </swiper>
  <div
    v-if="showCustomCursor"
    class="pointer-events-none fixed z-50 flex h-[45px] w-[70px] -translate-[50%] transform items-center justify-center rounded-full bg-gray-900/50"
    :style="{ left: cursorX + 'px', top: cursorY + 'px' }"
  >
    <ArrowLeftRounded class="size-5" />
    <span class="text-xs font-bold">DRAG</span>
    <ArrowRightRounded class="size-5" />
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'

import 'swiper/css'
import ArrowRightRounded from './icons/ArrowRightRounded.vue'
import ArrowLeftRounded from './icons/ArrowLeftRounded.vue'

const showCustomCursor = ref(false)
const cursorX = ref(0)
const cursorY = ref(0)

const { images } = defineProps<{
  images: string[]
}>()

const updateCursorPosition = (e: MouseEvent) => {
  cursorX.value = e.clientX
  cursorY.value = e.clientY
}
</script>

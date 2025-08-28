<template>
  <swiper
    :slidesPerView="1.2"
    :spaceBetween="20"
    :pagination="{
      clickable: true,
    }"
    class="cursor-none"
    @touchStart="onTouchStart"
    @touchEnd="onTouchEnd"
    @mouseenter="showCustomCursor = true"
    @mouseleave="showCustomCursor = false"
    @mousemove="updateCursorPosition"
  >
    <swiper-slide v-for="image in images" :key="image">
      <img
        :src="image"
        loading="lazy"
        class="block aspect-video w-full max-w-screen rounded-2xl object-cover object-center"
        alt="Imagen del proyecto"
      />
    </swiper-slide>
  </swiper>
  <div
    v-if="showCustomCursor"
    class="pointer-events-none fixed z-50 flex h-[45px] w-[85px] -translate-[50%] transform items-center justify-center gap-1 rounded-full bg-gray-900/50"
    :style="{ left: cursorX + 'px', top: cursorY + 'px' }"
  >
    <ArrowLeftRounded class="size-3" />
    <span class="text-xs font-bold">DRAG</span>
    <ArrowRightRounded class="size-3" />
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

const emit = defineEmits<{
  (e: 'onTouchStart'): void
  (e: 'onTouchEnd'): void
}>()
const { images } = defineProps<{
  images: string[]
}>()

const onTouchStart = () => {
  emit('onTouchStart')
}

const onTouchEnd = () => {
  emit('onTouchEnd')
}

const updateCursorPosition = (e: MouseEvent) => {
  cursorX.value = e.clientX
  cursorY.value = e.clientY
}
</script>

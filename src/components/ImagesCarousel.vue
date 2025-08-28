<template>
  <swiper
    :slidesPerView="1.2"
    :spaceBetween="20"
    :modules="[FreeMode]"
    class="cursor-none"
    :freeMode="true"
    @touchStart="onTouchStart"
    @touchEnd="onTouchEnd"
    @mouseenter="showCustomCursor = true"
    @mouseleave="showCustomCursor = false"
    @mousemove="updateCursorPosition"
    @touchMove="(_, e) => updateCursorPosition(e)"
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
    class="rounded-ful pointer-events-none fixed z-50 flex -translate-[50%] transform items-center justify-center gap-0.5"
    :style="{ left: cursorX + 'px', top: cursorY + 'px' }"
  >
    <ArrowLeftRounded class="size-6" />
    <span class="text-shadow text-lg font-bold uppercase">Drag</span>
    <ArrowRightRounded class="size-6" />
  </div>
</template>

<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/free-mode'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode } from 'swiper/modules'

import { ref } from 'vue'

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

const onTouchStart = () => emit('onTouchStart')
const onTouchEnd = () => emit('onTouchEnd')

const updateCursorPosition = (e: MouseEvent | TouchEvent) => {
  if (e instanceof MouseEvent) {
    cursorX.value = e.clientX
    cursorY.value = e.clientY
  } else {
    cursorX.value = e.touches[0].clientX
    cursorY.value = e.touches[0].clientY
  }
}
</script>

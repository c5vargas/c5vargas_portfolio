<template>
  <main ref="workRef" class="container mx-auto">
    <h2 class="font-serif text-[5rem] font-semibold">Últimos trabajos</h2>

    <div class="relative">
      <ul
        class="group grid w-full grid-cols-1 gap-4 group-hover:[&>li]:opacity-60"
        role="listbox"
        @mouseleave="resetSelection"
      >
        <li
          v-for="item in portfolio"
          :key="item.id"
          role="option"
          :aria-selected="workSelected?.id === item.id"
          class="transition-all duration-300 group-hover:opacity-40 hover:!opacity-100"
          @mouseenter="handleMouseEnter(item)"
        >
          <span class="block w-full cursor-pointer text-left text-[8rem] font-bold">
            {{ item.name }}
          </span>
        </li>
      </ul>

      <div
        class="featured-image absolute top-0 right-10 h-[512px] w-[512px] overflow-hidden rounded-xl"
      >
        <img
          v-for="item in portfolio"
          :key="item.id"
          ref="imageRefs"
          class="featured-image-item absolute h-[512px] w-[512px] rounded-xl object-cover opacity-0"
          :src="`/${item.images[0]}`"
          :alt="item.extract"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import portfolio, { Portfolio } from '@/libs/mock/portfolio'
import gsap from 'gsap'
import { ref, onMounted } from 'vue'

const workRef = ref<HTMLElement | null>(null)
const workSelected = ref<Portfolio | null>(null)
const imageRefs = ref<HTMLImageElement[]>([])

onMounted(() => {
  // Inicializamos refs como array ordenado según portfolio
  imageRefs.value = imageRefs.value.slice(0, portfolio.length)
})

const handleMouseEnter = (item: Portfolio) => {
  const nextImg = getImage(item.id)
  if (!nextImg) return

  if (workSelected.value) {
    const prevImg = getImage(workSelected.value.id)
    if (prevImg) {
      gsap.to(prevImg, {
        opacity: 0,
        y: -512,
        duration: 0.5,
        ease: 'power2.inOut',
      })
    }
  }

  gsap.fromTo(
    nextImg,
    { opacity: 1, y: 512 },
    { opacity: 1, y: 0, duration: 0.5, ease: 'power2.inOut' }
  )

  workSelected.value = item
}

const resetSelection = () => {
  if (workSelected.value) {
    const prevImg = getImage(workSelected.value.id)
    if (prevImg) {
      gsap.to(prevImg, {
        opacity: 0,
        y: -512,
        duration: 0.5,
        ease: 'power2.inOut',
      })
    }
  }
  workSelected.value = null
}

const getImage = (id: number) => {
  const index = portfolio.findIndex(p => p.id === id)
  return imageRefs.value[index] || null
}
</script>

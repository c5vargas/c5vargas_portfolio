<template>
  <main ref="workRef" id="projects" class="container mx-auto py-20">
    <h2 class="font-serif text-[2rem] font-semibold md:text-[5rem]">Últimos trabajos</h2>

    <div class="relative">
      <ul
        class="group grid w-full grid-cols-1 gap-4 group-hover:[&>li]:opacity-60"
        @mouseleave="resetSelection"
      >
        <li
          v-for="item in portfolio"
          :key="item.id"
          class="transition-all duration-300 group-hover:opacity-40 hover:!opacity-100"
          @mouseenter="handleMouseEnter(item)"
        >
          <RouterLink
            :to="`/proyecto/${item.slug}`"
            class="block w-full cursor-pointer text-left text-[3rem] font-bold md:text-[8rem]"
          >
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>

      <div
        ref="featuredImageRef"
        class="featured-image absolute top-0 right-10 hidden h-[512px] w-[512px] overflow-hidden rounded-xl md:block"
      >
        <img
          v-for="item in portfolio"
          ref="imageRefs"
          :key="item.id"
          :src="getThumbnail(item)"
          :alt="item.extract"
          class="featured-image-item absolute h-[512px] w-[512px] rounded-xl object-cover opacity-0"
          loading="lazy"
        />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import portfolio, { Portfolio } from '@/libs/mock/portfolio'
import { gsap } from 'gsap'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

const workRef = ref<HTMLElement | null>(null)
const featuredImageRef = ref<HTMLElement | null>(null)
const imageRefs = ref<HTMLImageElement[]>([])
const workHovered = ref<Portfolio | null>(null)

const handleMouseEnter = (item: Portfolio) => {
  const nextImg = getImage(item.id)
  if (!nextImg) return

  if (workHovered.value) {
    const prevImg = getImage(workHovered.value.id)
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

  workHovered.value = item
}

const resetSelection = () => {
  if (workHovered.value) {
    const prevImg = getImage(workHovered.value.id)
    if (prevImg) {
      gsap.to(prevImg, {
        opacity: 0,
        y: -512,
        duration: 0.5,
        ease: 'power2.inOut',
      })
    }
  }
  workHovered.value = null
}

const handleMouseMove = (e: MouseEvent) => {
  if (!featuredImageRef.value || !workRef.value) return

  const containerRect = workRef.value.getBoundingClientRect()
  const relativeY = e.clientY - containerRect.top

  gsap.to(featuredImageRef.value, {
    y: relativeY - featuredImageRef.value.offsetHeight,
    duration: 1,
    ease: 'power2.out',
  })
}

const getImage = (id: number) => {
  const index = portfolio.findIndex(p => p.id === id)
  return imageRefs.value[index] || null
}

const getThumbnail = (project: Portfolio) => {
  if (!project.images[0]) return ''
  return project.images[0].replace('/upload/', '/upload/c_fill,w_512,h_512,g_face/')
}

onMounted(() => {
  imageRefs.value = imageRefs.value.slice(0, portfolio.length)

  if (workRef.value) {
    workRef.value.addEventListener('mousemove', handleMouseMove)
  }
})

onBeforeUnmount(() => {
  if (workRef.value) {
    workRef.value.removeEventListener('mousemove', handleMouseMove)
  }
})
</script>

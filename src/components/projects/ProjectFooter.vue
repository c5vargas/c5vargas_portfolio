<template>
  <footer v-if="project" ref="footerEl" class="relative text-center">
    <RouterLink
      :to="`/proyecto/${project.slug}`"
      @mouseenter="handleAnimation"
      @mouseleave="clearAnimation"
    >
      <h2 ref="nameRef" class="text-[4rem] font-bold uppercase md:text-[8rem]">
        {{ project.name }}
      </h2>
      <span class="text-lg font-semibold tracking-widest uppercase">Siguiente proyecto</span>
      <div
        class="absolute top-0 left-[50%] mx-auto h-[215px] w-[215px] -translate-x-[50%] transform overflow-hidden"
      >
        <img
          ref="imageEl"
          class="absolute top-[100%] left-0 h-full w-full rounded-t-2xl object-cover"
          :src="project.images[0]"
          loading="lazy"
          :alt="`Imagen destacada del proyecto ${project.extract}`"
        />
      </div>
    </RouterLink>
  </footer>
</template>

<script setup lang="ts">
import portfolio, { Portfolio } from '@/libs/mock/portfolio'
import gsap from 'gsap'
import { useGSAP } from 'gsap-vue'
import { ref, watch } from 'vue'
import { RouterLink } from 'vue-router'

const { projectId } = defineProps<{
  projectId: number
}>()

const project = ref<Portfolio | null>(null)
const footerEl = ref<HTMLElement | null>(null)
const nameRef = ref<HTMLSpanElement | null>(null)
const imageEl = ref<HTMLImageElement | null>(null)
let animation: gsap.core.Tween

useGSAP(
  () => {
    animation = gsap
      .fromTo(
        imageEl.value,
        {
          top: '100%',
        },
        {
          duration: 0.4,
          top: 0,
        }
      )
      .pause()
  },
  { scope: footerEl }
)

const handleAnimation = () => {
  animation.play()
}

const clearAnimation = () => {
  animation.reverse()
}

watch(
  () => projectId,
  newVal => {
    project.value = portfolio.find(el => el.id === newVal + 1) || portfolio[0]
  },
  { immediate: true }
)
</script>

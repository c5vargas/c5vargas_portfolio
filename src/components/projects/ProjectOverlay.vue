<template>
  <main ref="containerRef" class="overflow-hidden">
    <section
      v-for="(color, i) in overlayStyles"
      :key="i"
      ref="overlayRefs"
      class="absolute left-0 z-50 h-[120%] w-full rounded-b-full"
      :class="color"
    />
  </main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useGSAP } from 'gsap-vue'
import { gsap } from 'gsap'

const { projectId } = defineProps<{
  projectId: number
}>()

const overlayRefs = ref<HTMLElement[]>([])
const containerRef = ref<HTMLElement | null>(null)

const overlayStyles = ['bg-primary top-0', 'bg-lime-400 -top-50']

const tl = gsap.timeline({
  defaults: { duration: 0.6, ease: 'power3.outIn' },
  onComplete: () => {
    containerRef.value!.style.display = 'none'
  },
})

useGSAP(
  () => {
    tl.to(overlayRefs.value, {
      yPercent: -120,
    })
  },
  { scope: containerRef }
)

watch(
  () => projectId,
  () => {
    tl.restart()

    if (containerRef.value) {
      containerRef.value!.style.display = 'block'
    }
  },
  { immediate: true }
)
</script>

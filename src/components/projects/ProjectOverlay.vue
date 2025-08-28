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
import { onMounted, ref } from 'vue'
import { useGSAP } from 'gsap-vue'
import gsap from 'gsap'

// ✅ refs tipados y reactivos
const overlayRefs = ref<HTMLElement[]>([])
const containerRef = ref<HTMLElement | null>(null)

// ✅ estilos dinámicos
const overlayStyles = ['bg-primary top-0', 'bg-lime-400 -top-50']

onMounted(() => {
  console.log('Overlays montados:', overlayRefs.value)
})

// ✅ animación mejorada
useGSAP(
  () => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: 'power3.outIn' },
      onComplete: () => {
        containerRef.value!.style.display = 'none'
      },
    })

    // ✅ animación más fluida usando translateY en vez de top
    tl.to(overlayRefs.value, {
      yPercent: -120,
    })
  },
  { scope: containerRef }
)
</script>

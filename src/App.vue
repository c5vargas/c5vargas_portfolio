<template>
  <MainHeader />
  <Suspense>
    <template #default>
      <main class="overflow-hidden">
        <RouterView />
      </main>
    </template>
    <template #fallback>
      <div class="h-screen min-h-screen animate-pulse bg-black"></div>
    </template>
  </Suspense>
  <FooterComponent />
</template>

<script setup lang="ts">
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { RouterView } from 'vue-router'
import { gsap } from 'gsap'
import { onBeforeUnmount } from 'vue'
import MainHeader from '@/components/MainHeader.vue'
import FooterComponent from '@/components/FooterComponent.vue'

gsap.registerPlugin(ScrollTrigger)

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>

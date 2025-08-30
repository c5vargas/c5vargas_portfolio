<template>
  <MainHeader />

  <main class="overflow-hidden">
    <RouterView />
  </main>

  <FooterComponent />
</template>

<script setup lang="ts">
import { ScrollTrigger } from 'gsap/all'
import { RouterView } from 'vue-router'
import { gsap } from 'gsap'
import MainHeader from '@/components/MainHeader.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { onBeforeUnmount } from 'vue'

gsap.registerPlugin(ScrollTrigger)

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>

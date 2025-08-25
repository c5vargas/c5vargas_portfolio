<script setup lang="ts">
import { ScrollTrigger } from 'gsap/all'
import { RouterView } from 'vue-router'
import gsap from 'gsap'
import MainHeader from './components/MainHeader.vue'
import FooterComponent from './components/FooterComponent.vue'

gsap.registerPlugin(ScrollTrigger)
</script>

<template>
  <MainHeader />

  <main>
    <RouterView />
  </main>

  <FooterComponent />
</template>

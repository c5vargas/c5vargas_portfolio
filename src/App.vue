<script setup lang="ts">
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import BrandMarquee from './components/BrandMarquee.vue'
import HeroBanner from './components/HeroBanner.vue'
import MainHeader from './components/MainHeader.vue'
import ToolsSection from './components/ToolsSection.vue'

gsap.registerPlugin(ScrollTrigger)
</script>

<template>
  <MainHeader />
  <HeroBanner />
  <BrandMarquee />
  <ToolsSection />
</template>

<script setup lang="ts">
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import HeroBanner from '@/components/HeroBanner.vue'
import BrandMarquee from '@/components/BrandMarquee.vue'
import ToolsSection from '@/components/ToolsSection.vue'
import WorkDone from '@/components/WorkDone.vue'
import AboutSection from '@/components/AboutSection.vue'

gsap.registerPlugin(ScrollTrigger)
</script>

<template>
  <HeroBanner />
  <BrandMarquee />
  <ToolsSection />
  <WorkDone />
  <AboutSection />
</template>

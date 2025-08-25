<script setup lang="ts">
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import BrandMarquee from './components/BrandMarquee.vue'
import HeroBanner from './components/HeroBanner.vue'
import MainHeader from './components/MainHeader.vue'
import ToolsSection from './components/ToolsSection.vue'
import WorkDone from './components/WorkDone.vue'
import FooterComponent from './components/FooterComponent.vue'
import AboutSection from './components/AboutSection.vue'

gsap.registerPlugin(ScrollTrigger)
</script>

<template>
  <MainHeader />
  <HeroBanner />
  <BrandMarquee />
  <ToolsSection />
  <WorkDone />
  <AboutSection />
  <FooterComponent />
</template>

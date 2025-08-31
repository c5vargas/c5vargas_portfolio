<script setup lang="ts">
import HeroBanner from '@/components/HeroBanner.vue'
import { defineAsyncComponent } from 'vue'

const BrandMarquee = defineAsyncComponent(() => import('@/components/BrandMarquee.vue'))
const ToolsSection = defineAsyncComponent(() => import('@/components/ToolsSection.vue'))
const WorkDone = defineAsyncComponent(() => import('@/components/WorkDone.vue'))
const AboutSection = defineAsyncComponent(() => import('@/components/AboutSection.vue'))
</script>

<template>
  <HeroBanner />
  <Suspense>
    <template #default>
      <main>
        <BrandMarquee />
        <ToolsSection />
        <div class="padding">
          <WorkDone />
          <AboutSection />
        </div>
      </main>
    </template>
  </Suspense>
</template>

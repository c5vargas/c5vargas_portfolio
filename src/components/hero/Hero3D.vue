<template>
  <Suspense>
    <template #default>
      <HeroCanvasAsync />
    </template>
    <template #fallback>
      <div class="h-screen animate-pulse bg-black"></div>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import { defineAsyncComponent, hydrateOnIdle } from 'vue'

const HeroCanvasAsync = defineAsyncComponent({
  loader: () => import('./HeroCanvas.vue'),
  hydrate: hydrateOnIdle(),
})
</script>

<template>
  <div class="separator h-28" />

  <template v-if="project">
    <ProjectHeader :project="project" />
    <ProjectParallax :project="project" />
    <ProjectRole :project="project" />
    <ImagesCarousel
      :images="['/default-1.webp', '/default-2.webp', '/default-3.webp']"
      :autoplay="true"
      :interval="5000"
      :loop="true"
      :transitionMs="600"
      :snapThreshold="0.18"
    />
  </template>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import portfolio, { type Portfolio } from '@/libs/mock/portfolio'
import ProjectHeader from '@/components/projects/ProjectHeader.vue'
import ProjectParallax from '@/components/projects/ProjectParallax.vue'
import ProjectRole from '@/components/projects/ProjectRole.vue'
import ImagesCarousel from '@/components/ImagesCarousel.vue'

const route = useRoute()
const project = ref<Portfolio>()

const loadProject = (slug: string) => (project.value = portfolio.find(el => el.slug === slug))

onMounted(() => loadProject(route.params.slug as string))

watch(
  () => route.params.slug,
  newSlug => loadProject(newSlug as string)
)
</script>

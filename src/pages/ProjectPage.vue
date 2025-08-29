<template>
  <div class="separator h-28" />

  <template v-if="project">
    <ProjectOverlay />
    <ProjectHeader :project="project" />
    <ProjectParallax :project="project" />
    <ProjectRole :project="project" />
    <ProjectBanner :projectName="project.name" />
    <ProjectGallery :project="project" />
  </template>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import portfolio, { type Portfolio } from '@/libs/mock/portfolio'
import ProjectHeader from '@/components/projects/ProjectHeader.vue'
import ProjectParallax from '@/components/projects/ProjectParallax.vue'
import ProjectRole from '@/components/projects/ProjectRole.vue'
import ProjectGallery from '@/components/projects/ProjectGallery.vue'
import ProjectOverlay from '@/components/projects/ProjectOverlay.vue'
import ProjectBanner from '@/components/projects/ProjectBanner.vue'

const route = useRoute()
const project = ref<Portfolio>()

const loadProject = (slug: string) => (project.value = portfolio.find(el => el.slug === slug))

watch(
  () => route.params.slug,
  newSlug => {
    if (newSlug) loadProject(newSlug as string)
  },
  { immediate: true }
)
</script>

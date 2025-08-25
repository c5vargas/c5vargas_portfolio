<template>
  <main ref="containerRef">
    <div v-if="!project">
      <span>Loading...</span>
    </div>

    <div v-else>
      <header class="container mx-auto grid h-[30rem] grid-cols-12 items-center">
        <h2 id="modal-title" class="col-span-8 font-serif text-[10rem] font-bold uppercase">
          {{ project.name }}
        </h2>
        <section id="tech-stack" class="col-span-4">
          <ul class="flex flex-wrap gap-3">
            <li
              v-for="item in getTechStack"
              :key="item"
              class="flex h-12 w-auto items-center rounded-full border border-gray-400 px-6"
            >
              <span class="mt-0.5 font-serif text-lg leading-6">{{ item }}</span>
            </li>
          </ul>
        </section>
      </header>

      <div class="parallax h-screen w-full" :style="{ backgroundImage: `url(/${bgImage})` }"></div>

      <div class="container mx-auto">
        <div v-html="project.descr"></div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import portfolio, { Portfolio } from '@/libs/mock/portfolio'
import gsap from 'gsap'
import { useGSAP } from 'gsap-vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const containerRef = ref<HTMLElement | null>(null)
const project = ref<Portfolio>()

const getTechStack = computed(() => project.value?.stack?.trim().split(',') || [])
const bgImage = computed(() => `url(/${project.value?.images[0]})`)

useGSAP(
  () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.parallax',
          start: 'top top',
          end: 'center center',
          scrub: true,
        },
      })
      .fromTo('.parallax', { height: '100vh' }, { height: '20vh', ease: 'power2.out' })
  },
  { scope: containerRef }
)

const loadProject = (slug: string) => {
  project.value = portfolio.find(el => el.slug === slug)
}

onMounted(() => loadProject(route.params.slug as string))

watch(
  () => route.params.slug,
  newSlug => loadProject(newSlug as string)
)
</script>

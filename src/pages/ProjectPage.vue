<template>
  <main ref="containerRef">
    <div v-if="!project">
      <span>Loading...</span>
    </div>

    <div v-else>
      <header class="container mx-auto grid h-[30rem] grid-cols-12 items-center">
        <h1 id="modal-title" class="col-span-8 font-serif text-[10rem] font-bold uppercase">
          {{ project.name }}
        </h1>
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

      <div
        ref="parallaxRef"
        class="h-screen w-full bg-cover bg-center"
        :style="{ backgroundImage: bgImage }"
      ></div>

      <article ref="articleRef" class="relative py-40">
        <div class="container mx-auto flex items-center justify-between">
          <h2 class="w-full text-[5rem] font-bold uppercase">Mi rol</h2>
          <div class="max-w-[714px]">
            <p class="text-3xl">{{ project.extract }}</p>

            <div class="absolute mt-16">
              <a
                class="group glass ms-auto flex h-48 w-48 items-center justify-center gap-1.5 rounded-full text-sm"
                :href="project.link"
              >
                <div class="font-serif text-2xl">Visitar</div>
                <ArrowUpRight
                  class="transform-all w-0 animate-pulse text-primary opacity-0 duration-300 group-hover:w-5 group-hover:opacity-100 group-active:text-secondary"
                />
              </a>
            </div>
          </div>
        </div>
        <img
          ref="pyramidRef1"
          src="/pyramid.webp"
          class="absolute -left-20 w-40 opacity-50 md:w-52"
          alt="Icono de decoración"
        />
        <img
          ref="pyramidRef2"
          src="/pyramid.webp"
          class="absolute -right-20 w-40 opacity-50 md:w-52"
          alt="Icono de decoración"
        />
      </article>
    </div>
  </main>
</template>

<script setup lang="ts">
import ArrowUpRight from '@/components/icons/ArrowUpRight.vue'
import portfolio, { Portfolio } from '@/libs/mock/portfolio'
import gsap from 'gsap'
import { useGSAP } from 'gsap-vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const containerRef = ref<HTMLElement | null>(null)
const articleRef = ref<HTMLElement | null>(null)
const parallaxRef = ref<HTMLElement | null>(null)
const pyramidRef1 = ref<HTMLElement | null>(null)
const pyramidRef2 = ref<HTMLElement | null>(null)
const project = ref<Portfolio>()

const getTechStack = computed(() => project.value?.stack?.trim().split(',') || [])
const bgImage = computed(() => `url(/${project.value?.images[0]})`)

useGSAP(
  () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: parallaxRef.value,
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
        },
      })
      .fromTo(parallaxRef.value, { height: '100vh' }, { height: '130vh' })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: articleRef.value,
          start: 'top center',
          end: 'bottom top',
          scrub: 1,
        },
      })
      .add([
        gsap.fromTo(
          pyramidRef1.value,
          {
            rotate: 25,
            bottom: 80,
            scale: 1,
          },
          {
            rotate: 50,
            bottom: 0,
            left: 30,
            scale: 0.8,
          }
        ),
        gsap.fromTo(
          pyramidRef2.value,
          {
            rotate: -25,
            bottom: 40,
            scale: 1,
          },
          {
            rotate: -40,
            bottom: -120,
            scale: 0.8,
          }
        ),
      ])
  },
  { scope: containerRef, dependencies: [parallaxRef, articleRef] }
)

const loadProject = (slug: string) => {
  project.value = portfolio.find(el => el.slug === slug)
  console.log('Project val is', project.value)
}

onMounted(() => loadProject(route.params.slug as string))

watch(
  () => route.params.slug,
  newSlug => loadProject(newSlug as string)
)
</script>

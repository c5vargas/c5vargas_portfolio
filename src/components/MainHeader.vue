<template>
  <main ref="header" class="relative">
    <div
      v-show="menuIsOpen"
      ref="overlay"
      class="fixed inset-0 z-30 bg-black/40 backdrop-blur-xs"
      @click="closeMenu"
    />

    <header class="fixed z-30 h-28 w-full" :class="menuIsOpen ? 'glass h-auto' : ''">
      <main class="container mx-auto flex items-center gap-6 p-4">
        <RouterLink to="/" title="Volver al inicio">
          <img src="/logo-cream.svg" alt="Logo" class="w-20 duration-200 hover:scale-110" />
        </RouterLink>

        <div
          class="glass hidden h-12 items-center justify-center gap-2 rounded-2xl px-5 transition-all duration-500 sm:flex"
          :class="menuIsOpen ? 'opacity-0' : 'opacity-100'"
        >
          <span class="status h-1.5 w-1.5 rounded-full bg-green-500"></span>
          <span class="text-xs text-gray-300">Disponible para proyectos</span>
        </div>

        <nav class="relative ms-auto">
          <button
            class="cursor-pointer"
            @click="toggleMenu"
            :aria-expanded="menuIsOpen"
            aria-controls="primary-menu"
            title="Abrir menú de navegación"
          >
            <MenuBurger class="h-6 w-6 text-white" :isOpen="menuIsOpen" />
          </button>
        </nav>
      </main>

      <div
        id="primary-menu"
        ref="menu"
        :aria-hidden="!menuIsOpen"
        class="z-50 pt-12 will-change-transform"
        :class="menuIsOpen ? 'pointer-events-auto' : 'pointer-events-none'"
      >
        <div class="container mx-auto p-6">
          <ul
            class="group flex flex-wrap items-center gap-3 text-lg text-white sm:max-w-1/2 md:gap-8 group-hover:[&>li]:opacity-60"
          >
            <li
              v-for="item in navItems"
              :key="item.label"
              class="list-item transition-all duration-300 group-hover:blur-[3px] hover:opacity-100 hover:blur-none"
            >
              <button
                @click="closeMenu"
                class="font-serif text-[2rem] leading-0 uppercase md:text-[4rem]"
              >
                {{ item.label }}
              </button>
            </li>
          </ul>

          <div
            class="mt-5 flex max-w-1/2 list-none flex-wrap px-5 md:mt-10 md:px-10 lg:justify-between"
          >
            <span class="mt-5 w-full text-xs opacity-60 lg:w-auto">RRSS</span>

            <ul
              v-for="social in socialLinks"
              :key="social.label"
              class="mt-2 w-1/2 md:mt-5 md:w-1/4 lg:w-auto"
            >
              <li class="highlight-black text-sm font-semibold hover:opacity-90">
                <a
                  class="animation-link text-white"
                  :href="social.href"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ social.label }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </main>
</template>

<script setup lang="ts">
import MenuBurger from './icons/MenuBurger.vue'
import { socialLinks } from '@/libs/mock/socials'
import { useNavbarMenu } from '@/composables/useNavbarMenu'

const { menuIsOpen, menu, header, overlay, toggleMenu, closeMenu } = useNavbarMenu()

const navItems = [
  { label: '✤ Inicio' },
  { label: 'Experiencia' },
  { label: 'Proyectos' },
  { label: 'Contacto' },
]
</script>

<template>
  <header class="fixed z-30 w-full">
    <main class="container mx-auto flex items-center gap-6 p-4">
      <div class="glass flex h-12 items-center justify-center rounded-2xl px-5">
        <span class="font-serif font-bold text-white">Carles Vargas</span>
      </div>

      <div class="glass hidden h-12 items-center justify-center gap-2 rounded-2xl px-5 sm:flex">
        <span class="status h-1.5 w-1.5 rounded-full bg-green-500"></span>
        <span class="text-xs text-gray-300">Disponible para proyectos</span>
      </div>

      <nav class="relative ms-auto">
        <button
          ref="toggleBtn"
          class="cursor-pointer"
          @click="toggleNavbar"
          :aria-expanded="menuIsOpen"
          aria-controls="primary-menu"
          title="Abrir menú de navegación"
        >
          <MenuBurger class="h-6 w-6 text-white" :isOpen="menuIsOpen" />
        </button>
      </nav>
    </main>

    <div v-show="menuIsOpen" class="fixed inset-0 z-40 bg-black/40" @click="closeMenu" />

    <div
      id="primary-menu"
      ref="menu"
      :aria-hidden="!menuIsOpen"
      class="fixed top-0 right-0 left-0 z-50 bg-gray-800 shadow-lg will-change-transform"
      :class="menuIsOpen ? 'pointer-events-auto' : 'pointer-events-none'"
    >
      <div class="container mx-auto p-6">
        <ul class="flex items-center gap-4 text-lg text-white">
          <li><a href="#" @click="closeMenu" class="hover:opacity-80">Inicio</a></li>
          <li><a href="#" @click="closeMenu" class="hover:opacity-80">Proyectos</a></li>
          <li><a href="#" @click="closeMenu" class="hover:opacity-80">Contacto</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import MenuBurger from './icons/MenuBurger.vue'
import gsap from 'gsap'

const toggleBtn = ref<HTMLElement | null>(null)
const menu = ref<HTMLElement | null>(null)
const menuIsOpen = ref<boolean>(false)

// Timeline tipada y scoping seguro
const tl = ref<gsap.core.Timeline | null>(null)
let ctx: ReturnType<typeof gsap.context> | null = null

const openMenu = () => {
  if (!tl.value) return
  menuIsOpen.value = true
  tl.value.play()
}

const closeMenu = () => {
  if (!tl.value) return
  tl.value.reverse()
  menuIsOpen.value = false
}

const toggleNavbar = () => {
  if (menuIsOpen.value) {
    closeMenu()
  } else {
    openMenu()
  }
}

// Bloqueo de scroll del documento
watch(menuIsOpen, open => {
  document.documentElement.classList.toggle('overflow-hidden', open)
})

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && menuIsOpen.value) closeMenu()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)

  ctx = gsap.context(() => {
    if (!menu.value) return

    // Estado inicial: panel oculto arriba
    gsap.set(menu.value, { yPercent: -100, autoAlpha: 0 })

    // Timeline: open ↓ / reverse ↑
    tl.value = gsap
      .timeline({
        paused: true,
        defaults: { duration: 0.35, ease: 'power2.out' },
      })
      .to(menu.value, { yPercent: 0, autoAlpha: 1 }, 0)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  ctx?.revert()
})
</script>

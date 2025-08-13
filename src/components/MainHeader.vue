<template>
  <header class="fixed z-30 w-full">
    <main class="container mx-auto flex items-center gap-6 p-4">
      <div class="glass flex h-12 items-center justify-center rounded-2xl px-5">
        <span class="font-serif font-bold text-white">Carles Vargas</span>
      </div>

      <div class="glass flex h-12 items-center justify-center gap-2 rounded-2xl px-5">
        <span class="status h-1.5 w-1.5 rounded-full bg-green-500"></span>
        <span class="text-xs text-gray-300">Disponible para proyectos</span>
      </div>

      <nav class="ms-auto">
        <button
          ref="toggleBtn"
          class="cursor-pointer"
          @click="toggleNavbar"
          title="Abrir menú de navegación"
        >
          <MenuBurger class="h-10 w-10 text-white" :isOpen="menuIsOpen" />
        </button>
      </nav>
    </main>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MenuBurger from './icons/MenuBurger.vue'

const toggleBtn = ref<HTMLElement | null>(null)
const menuIsOpen = ref(false)

const toggleNavbar = () => {
  console.log('Navbar toggled')
  menuIsOpen.value = !menuIsOpen.value
}
</script>

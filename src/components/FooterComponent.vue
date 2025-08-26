<script setup lang="ts">
import { socialLinks } from '@/libs/mock/socials'
</script>

<template>
  <footer>
    <div class="">
      <div
        class="container mx-auto flex h-[712px] w-full flex-col justify-center px-10 md:flex-row md:items-center md:justify-between md:px-0"
      >
        <h3
          class="text-[3rem] leading-[4rem] font-black uppercase md:text-[4rem] md:text-[7rem] md:leading-[6rem]"
        >
          De idea a<br />
          realidad
        </h3>

        <div class="mt-4 md:mt-0 md:w-1/3">
          <p class="text-lg text-white">
            Con más de 6 años de experiencia en desarrollo frontend y fullstack, puedo ayudarte a
            transformar tus ideas en soluciones digitales escalables, rápidas y seguras.
          </p>

          <button class="button group glass mt-4 flex items-center gap-5 text-sm">
            <span class="shiny-text">Hablemos de tu proyecto</span>
          </button>
        </div>
      </div>

      <section class="bg-gradient-to-b from-black/30 to-primary/10 pb-20">
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-4">
          <div class="col-span-3">
            <img src="/logo-cream.svg" alt="Logotipo" class="w-[250px]" />
          </div>

          <div class="col-span-1 flex gap-12">
            <div>
              <span class="text-sm text-gray-400">LINKS</span>
              <ul class="mt-4">
                <li class="highlight-black mb-4 text-lg"><a href="#home">Inicio</a></li>
                <li class="highlight-black mb-4 text-lg"><a href="#about">Sobre mi</a></li>
                <li class="highlight-black mb-4 text-lg"><a href="#projects">Proyectos</a></li>
              </ul>
            </div>

            <div>
              <span class="text-sm text-gray-400">REDES</span>
              <ul class="mt-4">
                <li
                  v-for="social in socialLinks"
                  :key="social.label"
                  class="animation-link highlight-black mb-4 text-lg"
                >
                  <a :href="social.href">{{ social.label }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </footer>
</template>

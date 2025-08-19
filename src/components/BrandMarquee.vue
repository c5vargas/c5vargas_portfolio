<script setup lang="ts">
import ScrollingText from './ScrollingText.vue'
</script>

<template>
  <section class="shade-in py-6">
    <ScrollingText
      text="✤ Hola Devs, soy Carles Vargas ✤ Hola Devs, soy Carles Vargas ✤ Hola Devs, soy Carles Vargas"
      class="font-serif text-[4rem]"
    />

    <ScrollingText
      text="soy Carles Vargas ✤ Hola Devs, soy Carles Vargas ✤ Hola Devs, soy Carles Vargas ✤ Hola Devs, "
      class="font-serif text-[4rem]"
      start-direction="right"
    />
  </section>
</template>

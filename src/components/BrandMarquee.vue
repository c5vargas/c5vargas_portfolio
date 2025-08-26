<script setup lang="ts">
import ScrollingText from './ScrollingText.vue'
</script>

<template>
  <section class="shade-in py-6">
    <ScrollingText
      text="Carles Vargas ✤ Carles Vargas ✤ Carles Vargas ✤ Carles Vargas ✤ Carles Vargas ✤ Carles Vargas ✤"
      class="font-serif text-[2rem] md:text-[4rem]"
    />

    <ScrollingText
      text="Carles Vargas ✤ Carles Vargas ✤ Carles Vargas ✤ Carles Vargas ✤ Carles Vargas ✤ Carles Vargas ✤"
      class="font-serif text-[2rem] md:text-[4rem]"
      start-direction="right"
    />
  </section>
</template>

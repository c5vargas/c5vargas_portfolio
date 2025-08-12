<template>
  <div class="hero-banner">
    <h1 class="hero-title"></h1>
    <p class="hero-subtitle"></p>
    <button class="hero-button" @click="handleClick">TRABAJEMOS JUNTOS</button>
  </div>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log('Button clicked!')
}
</script>

<script setup lang="ts">
import HeroBanner from './components/HeroBanner.vue'
import MainHeader from './components/MainHeader.vue'
import ScrollingText from './components/ScrollingText.vue'
</script>

<template>
  <MainHeader />
  <HeroBanner />
  <ScrollingText
    text="Hola Devs, soy Carles Vargas | Hola Devs, soy Carles Vargas | Hola Devs, soy Carles Vargas"
    class="padding-20 font-serif text-[6rem] italic"
  />

  <div class="my-20">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iusto et doloribus in sed
      praesentium omnis odio distinctio commodi aliquam, minus est similique architecto, corporis
      temporibus accusamus accusantium quas explicabo?
    </p>
  </div>

  <div class="my-20">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iusto et doloribus in sed
      praesentium omnis odio distinctio commodi aliquam, minus est similique architecto, corporis
      temporibus accusamus accusantium quas explicabo?
    </p>
  </div>

  <div class="my-20">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iusto et doloribus in sed
      praesentium omnis odio distinctio commodi aliquam, minus est similique architecto, corporis
      temporibus accusamus accusantium quas explicabo?
    </p>
  </div>
</template>

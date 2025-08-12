<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div>
    <div class="mx-auto max-w-3xl text-center">
      <h1 class="mb-4 text-5xl font-bold">{{ msg }}</h1>

      <div class="p-8">
        <button
          type="button"
          @click="count++"
          class="focus:ring-opacity-50 rounded-lg border border-transparent bg-gray-800 px-4 py-2 text-white transition-colors duration-200 hover:border-violet-500 focus:ring-2 focus:ring-violet-500 focus:outline-none"
        >
          count is {{ count }}
        </button>
      </div>

      <p class="mt-4">
        Check out
        <a
          href="https://vuejs.org/guide/quick-start.html#local"
          class="font-medium text-violet-500 hover:text-violet-700"
          target="_blank"
        >
          create-vue
        </a>
        , the official Vue + Vite starter
      </p>
      <p class="mt-2">
        Learn more about IDE Support for Vue in the
        <a
          href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
          class="font-medium text-violet-500 hover:text-violet-700"
          target="_blank"
        >
          Vue Docs Scaling up Guide
        </a>
        .
      </p>
    </div>
  </div>
</template>

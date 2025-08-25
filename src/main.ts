import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import '@fontsource/quattrocento'
import { router } from './router'

createApp(App).use(router).mount('#app')

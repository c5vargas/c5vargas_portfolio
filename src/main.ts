import './assets/tailwind.css'
import '@fontsource/quattrocento/400.css?display=swap'

import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'

createApp(App).use(router).mount('#app')

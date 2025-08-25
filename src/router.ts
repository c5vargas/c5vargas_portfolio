import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import ProjectPage from './pages/ProjectPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/proyecto/:slug', component: ProjectPage },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

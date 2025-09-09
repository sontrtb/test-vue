import { createWebHistory, createRouter } from 'vue-router'

import HomeScreen from '@/pages/home/HomeScreen.vue'
import AboutScreen from '@/pages/about/AboutScreen.vue'

const routes = [
  { path: '/', component: HomeScreen },
  { path: '/about', component: AboutScreen },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PRE_PATH),
  routes,
})

export default router
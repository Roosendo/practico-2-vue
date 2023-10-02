import { createRouter, createWebHistory } from 'vue-router' // import router y history
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // crea el historial de navegación
  // crea las rutas
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/reports',
      name: 'reports',
      // se carga de forma dinámica
      component: () => import('../views/ReportsView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // se carga de forma dinámica
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router

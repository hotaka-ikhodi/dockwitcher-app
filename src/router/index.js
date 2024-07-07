import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PlanificacionView from '@/views/PlanificacionView.vue'
import DashboardView from '@/views/DashboardView.vue'
import IncommingsView from '@/views/IncommingsView.vue'
import OutgoingsView from '@/views/OutgoingsView.vue'
import TrucksView from '@/views/TrucksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/planificacion',
      name: 'planificacion',
      component: PlanificacionView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/incommings',
      name: 'incommings',
      component: IncommingsView
    },
    {
      path: '/outgoings',
      name: 'outgoings',
      component: OutgoingsView
    },
    {
      path: '/trucks',
      name: 'trucks',
      component: TrucksView
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/Login.vue'
import RegisterView from '../views/Register.vue'
import DashboardView from '../views/Dashboard.vue'
import StockDetailView from '../views/StockDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/stock/:ticker',
      name: 'stock-detail',
      component: StockDetailView,
      props: true
    }
  ]
})

export default router

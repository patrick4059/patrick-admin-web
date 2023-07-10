import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../view/login.vue'
import Home from '../view/home.vue'

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

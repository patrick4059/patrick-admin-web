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

export default createRouter({
  history: createWebHashHistory(),
  routes
})

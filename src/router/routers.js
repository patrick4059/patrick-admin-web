import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/index'
import { defineAsyncComponent } from 'vue' // 懒加载，异步加载组件 vue3 使用

const routes = [
  {
    path: '/login',
    meta: { title: '登录', noCache: true },
    component: defineAsyncComponent(() => import('@/view/login')),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        // component: (resolve) => require(['@/view/home'], resolve), // 懒加载，vue2使用
        component: defineAsyncComponent(() => import('@/view/home')), // 懒加载 vue3使用
        name: 'Dashboard',
        meta: {
          title: '首页',
          icon: 'index',
          affix: true,
          noCache: true
        }
      }
    ]
  }
]

export default createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(), // 去除地址栏的#
  routes
})

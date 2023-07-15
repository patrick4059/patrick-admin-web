import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routers'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入全局样式表
import './assets/css/global.css'
import './assets/styles/index.scss'

// 路由权限控制
import './router/index'

import store from './store'

// import './assets/icons' // icon

createApp(App).use(router).use(ElementPlus).use(store).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 导入全局样式表
import './assets/css/global.css'

createApp(App).use(router).use(ElementPlus).mount('#app')

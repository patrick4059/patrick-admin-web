import axios from 'axios'
import Config from '@/settings'
// import router from '@/router/routers'
import store from '../store'
import { ElNotification } from 'element-plus'
import Cookies from 'js-cookie'
import { getToken } from '@/utils/auth'

// 配置代理解决跨域问题
// 创建axios实例

const service = axios.create({
  baseURL: '/',
  timeout: Config.timeout
})

service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers.Authorization = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    let code = 0
    try {
      code = error.response.data.status
    } catch (e) {
      if (error.toString().indexOf('Error: timeout') !== -1) {
        Notification.error({
          title: '网络请求超时',
          duration: 2500
        })
        return Promise.reject(error)
      }
    }
    if (code) {
      if (code === 401) {
        store.dispatch('LogOut').then(() => {
          // 用户登录界面提示
          Cookies.set('point', 401)
          location.reload()
        })
      } else if (code === 403) {
        // router.push({ path: '/401' })
      } else {
        const errorMsg = error.response.data.message
        if (errorMsg !== undefined) {
          ElNotification.error({
            title: errorMsg,
            duration: 2500
          })
        }
      }
    } else {
      Notification.error({
        title: '接口请求失败',
        duration: 2500
      })
    }
  }
)

export default service

import axios from 'axios'
import Config from '@/settings'

// 配置代理解决跨域问题
// 创建axios实例

const service = axios.create({
  baseURL: '/',
  timeout: Config.timeout
})

export default service

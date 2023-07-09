import axios from 'axios'
// 配置代理解决跨域问题
// 创建axios实例

const service = axios.create({
  baseURL: '/',
  timeout: 1000
})

export default service

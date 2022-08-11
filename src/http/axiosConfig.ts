import axios, { AxiosRequestConfig } from 'axios'

const instance = axios.create({
  // baseURL: 'http://192.168.1.250:4000/v1', //home
  // baseURL: 'http://192.168.100.92:4000/v1', //company
  baseURL: process.env.MEDIUM_API || 'http://localhost:4000/v1',
  headers: {
    // 'Content-type': 'multipart/form-data',
  },
})

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('access_token')

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: token,
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (config) => {
    return config.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance

import axios from 'axios'
import { API_URL } from '@/env'

const api = axios.create({
  baseURL: API_URL
})

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authentication = `Bearer: ${token}`
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default api

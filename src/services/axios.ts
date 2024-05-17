import axios from 'axios'
import { getUserToken } from '../../utils'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BACKEND_URL,
})

api.interceptors.request.use(async request => {
  const token = await getUserToken()
  request.headers.Authorization = `Bearer ${token}`
  return request
})

export default api

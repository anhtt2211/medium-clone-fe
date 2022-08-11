import instance from '../http/axiosConfig'

const URL = 'auth'

export const login = async (data: { email: string; password: string }) => {
  return await instance.post(`${URL}/login`, data)
}

export const register = async (data: { email: string; password: string }) => {
  return await instance.post(`${URL}/register`, data)
}

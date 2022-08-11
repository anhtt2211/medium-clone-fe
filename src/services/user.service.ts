import instance from '../http/axiosConfig'
import { User } from '../types/user'

const URL = 'users'

export const getUser = async (email: string) => {
  return await instance.post(`${URL}`, { email })
}

export const editUser = async (data: User) => {
  return await instance.patch(`${URL}/`, data, {
    headers: {
      'Content-type': 'multipart/form-data',
    },
  })
}

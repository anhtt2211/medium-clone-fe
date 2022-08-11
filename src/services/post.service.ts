import instance from '../http/axiosConfig'
import { Params } from '../types'
import { Post } from '../types/post'

const URL = 'posts'

export const getListPost = async (params: Params) => {
  return await instance.get(`${URL}`, {
    params,
  })
}

export const getPostDetail = async (id: number) => {
  return await instance.get(`${URL}/${id}`)
}

export const createPost = async (data: Post) => {
  return await instance.post(`${URL}/`, data)
}

export const editPost = async (data: Post) => {
  return await instance.patch(`${URL}/${data.id}`, data)
}

export const deletePost = async (id: number) => {
  return await instance.delete(`${URL}/${id}`)
}

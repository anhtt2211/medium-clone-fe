import { Post } from './post'

export interface User {
  id?: number
  email?: string
  password?: string
  username?: string
  name?: string
  created_at?: Date
  updated_at?: Date
  posts?: Post[]
  avatar?: string | any
}

export interface Auth {
  accessToken: string
}

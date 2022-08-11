import { User } from './user'

export interface Post {
  id?: number
  title?: string
  description?: string
  content?: string
  image?: string
  createdBy?: number //userId
  created_at?: Date
  updated_at?: Date
  user?: User
}

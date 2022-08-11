import { createSlice } from '@reduxjs/toolkit'
import { Post } from '../../types/post'

interface PostState {
  loading: boolean
  posts: Post[]
  post: Post
}

const initialState: PostState = {
  loading: false,
  posts: [],
  post: {},
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getListPostsRequest: (state, action) => {
      state.loading = true
    },
    getListPostsSuccess: (state, action) => {
      state.loading = false
      state.posts = action.payload
    },
    getListPostsFailure: (state) => {
      state.loading = false
    },

    getPostDetailRequest: (state, action) => {
      state.loading = true
    },
    getPostDetailSuccess: (state, action) => {
      state.loading = false
      state.post = action.payload
    },
    getPostDetailFailure: (state) => {
      state.loading = false
    },

    createPostRequest: (state, action) => {
      state.loading = true
    },
    createPostSuccess: (state, action) => {
      state.loading = false
      state.posts.push(action.payload)
    },
    createPostFailure: (state) => {
      state.loading = false
    },

    updatePostRequest: (state, action) => {
      state.loading = true
    },
    updatePostSuccess: (state, action) => {
      state.loading = false
      //   todo
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload.id) {
          post = {
            ...post,
            ...action.payload,
          }
        }
        return post
      })
    },
    updatePostFailure: (state) => {
      state.loading = false
    },

    deletePostRequest: (state, action) => {
      state.loading = true
    },
    deletePostSuccess: (state, action) => {
      state.loading = false
      state.posts = state.posts.filter((post) => post.id !== action.payload.id)
    },
    deletePostFailure: (state) => {
      state.loading = false
    },
  },
})

export const {
  getListPostsRequest,
  getListPostsSuccess,
  getListPostsFailure,

  getPostDetailRequest,
  getPostDetailSuccess,
  getPostDetailFailure,

  createPostRequest,
  createPostSuccess,
  createPostFailure,

  updatePostRequest,
  updatePostSuccess,
  updatePostFailure,

  deletePostRequest,
  deletePostSuccess,
  deletePostFailure,
} = postSlice.actions

export const $post = (state: PostState) => state

export default postSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../types/user'

interface UserState {
  loading: boolean
  user: User
}

const initialState: UserState = {
  loading: false,
  user: {},
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserRequest: (state, action) => {
      state.loading = true
    },
    getUserSuccess: (state, action) => {
      state.loading = false
      state.user = action.payload
    },
    getUserFailure: (state) => {
      state.loading = false
    },

    editUserRequest: (state, action) => {
      state.loading = true
    },
    editUserSuccess: (state, action) => {
      state.loading = false
      // todo
      state.user = action.payload
    },
    editUserFailure: (state) => {
      state.loading = false
    },
  },
})

export const {
  getUserRequest,
  getUserSuccess,
  getUserFailure,
  editUserRequest,
  editUserSuccess,
  editUserFailure,
} = userSlice.actions

export const $user = (state: UserState) => state

export default userSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../types/user'

interface AuthState {
  loading: boolean
  accessToken: string
  // user: User
}

const initialState: AuthState = {
  loading: false,
  accessToken: '',
  // user: {},
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state, action) => {
      state.loading = true
    },
    loginSuccess: (state, action) => {
      state.loading = false
      state.accessToken = action.payload
    },
    loginFailure: (state) => {
      state.loading = false
    },

    registerRequest: (state, action) => {
      state.loading = true
    },
    registerSuccess: (state, action) => {
      state.loading = false
      // state
    },
    registerFailure: (state) => {
      state.loading = false
    },
  },
})

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
} = authSlice.actions

export const $auth = (state: AuthState) => state

export default authSlice.reducer

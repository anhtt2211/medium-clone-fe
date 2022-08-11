import { call, put, takeLatest } from 'redux-saga/effects'
import { message } from 'antd'

import {
  loginFailure,
  loginRequest,
  loginSuccess,
  registerRequest,
  registerSuccess,
} from '../slice/auth.slice'
import * as authService from '../../services/auth.service'
import { User } from '../../types/user'

interface Response {
  data: string | User
  message: string
}
function* login(action: any) {
  try {
    const response: Response = yield call(authService.login, action.payload)
    message.success('Login success!')

    yield put(loginSuccess(response.data))
  } catch (error) {
    message.error('Email or password incorrect!')
    console.log(error)

    yield put(loginFailure())
  }
}

function* register(action: any) {
  try {
    const response: Response = yield call(authService.register, action.payload)
    message.success('Register success!')

    yield put(registerSuccess(response.data))
  } catch (error) {
    message.error('Register fail!')
    console.log(error)

    yield put(loginFailure())
  }
}

export default function* authSaga() {
  yield takeLatest(loginRequest.type, login)
  yield takeLatest(registerRequest.type, register)
}

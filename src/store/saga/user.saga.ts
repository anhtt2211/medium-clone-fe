import { call, put, takeLatest } from 'redux-saga/effects'
import { message } from 'antd'

import {
  editUserFailure,
  editUserRequest,
  editUserSuccess,
  getUserFailure,
  getUserRequest,
  getUserSuccess,
} from '../slice/user.slice'
import * as userService from '../../services/user.service'
import { User } from '../../types/user'

interface Response {
  data: string | User
  message: string
}

function* fetchUser(action: any) {
  try {
    const response: Response = yield call(userService.getUser, action.payload)

    yield put(getUserSuccess(response.data))
  } catch (error) {
    message.error('Get detail user fail!')
    console.log(error)

    yield put(getUserFailure)
  }
}

function* editUser(action: any) {
  try {
    const response: Response = yield call(userService.editUser, action.payload)
    message.success('Update user success!')
    yield put(editUserSuccess(response.data))
  } catch (error) {
    message.error('Update user fail!')
    console.log(error)

    yield put(editUserFailure)
  }
}

export default function* userSaga() {
  yield takeLatest(getUserRequest.type, fetchUser)
  yield takeLatest(editUserRequest.type, editUser)
}

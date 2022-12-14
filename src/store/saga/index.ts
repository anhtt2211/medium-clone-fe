import { all } from 'redux-saga/effects'
import authSaga from './auth.saga'
import postSaga from './post.saga'
import userSaga from './user.saga'

export default function* rootSaga() {
  yield all([authSaga(), postSaga(), userSaga()])
}

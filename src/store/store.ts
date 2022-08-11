import { Action, combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'

import rootSaga from './saga'
import authReducer from './slice/auth.slice'
import postReducer from './slice/post.slice'
import userReducer from './slice/user.slice'

const rootReducers = combineReducers({
  auth: authReducer,
  post: postReducer,
  user: userReducer,
})

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools: true,
})

sagaMiddleware.run(rootSaga)

export type State = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

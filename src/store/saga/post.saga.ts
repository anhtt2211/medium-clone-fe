import { call, put, takeLatest } from 'redux-saga/effects'
import * as postActions from '../slice/post.slice'
import * as postServices from '../../services/post.service'
import { Post } from '../../types/post'
import { message } from 'antd'
import { Params } from '../../types'

interface Response {
  message: string
  data: Post[] | Post
}

function* fetchPosts(action: any) {
  try {
    // const params: Params = {
    //   skip: 0,
    //   limit: 8,
    // }
    const { params } = action.payload
    const posts: Response = yield call(postServices.getListPost, params)

    yield put(postActions.getListPostsSuccess(posts.data))
  } catch (error) {
    yield put(postActions.getListPostsFailure())
  }
}

function* getPostDetail(action: any) {
  try {
    const post: Response = yield call(
      postServices.getPostDetail,
      action.payload
    )

    yield put(postActions.getPostDetailSuccess(post.data))
  } catch (error) {
    yield put(postActions.getPostDetailFailure())
  }
}

function* createPost(action: any) {
  try {
    const post: Response = yield call(postServices.createPost, action.payload)
    message.success('Create Post success!')
    yield put(postActions.createPostSuccess(post.data))
  } catch (error) {
    yield put(postActions.createPostFailure())
  }
}

function* updatePost(action: any) {
  try {
    const post: Response = yield call(postServices.editPost, action.payload)
    yield put(postActions.updatePostSuccess(post.data))
  } catch (error) {
    yield put(postActions.updatePostFailure())
  }
}

function* deletePost(action: any) {
  try {
    const post: Response = yield call(postServices.deletePost, action.payload)
    yield put(postActions.deletePostSuccess(post.data))
  } catch (error) {
    yield put(postActions.deletePostFailure())
  }
}

export default function* postSaga() {
  yield takeLatest(postActions.getListPostsRequest.type, fetchPosts)
  yield takeLatest(postActions.getPostDetailRequest.type, getPostDetail)
  yield takeLatest(postActions.createPostRequest.type, createPost)
  yield takeLatest(postActions.updatePostRequest.type, updatePost)
  yield takeLatest(postActions.deletePostRequest.type, deletePost)
}

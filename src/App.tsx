import React, { Fragment, useEffect, useState } from 'react'
import {
  Route,
  RouteProps,
  Routes,
  Navigate,
  useNavigate,
} from 'react-router-dom'

import { Header } from './components/header'
import { CreatePost } from './pages/create-post/create-post'
import { Home } from './pages/home/home'
import { Login } from './pages/login/login'
import { PostDetail } from './pages/post-detail/post-detail'
import { Register } from './pages/register/register'
import { Setting } from './pages/setting/setting.jsx'
import { getUserRequest } from './store/slice/user.slice'
import { useAppDispatch } from './store/storeHook'

function App() {
  const accessToken = localStorage.getItem('access_token')
  const email = localStorage.getItem('email')
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (email) {
      dispatch(getUserRequest(email))
    }
  }, [email])
  useEffect(() => {
    if (accessToken) {
      navigate('/')
    } else {
      navigate('/login')
    }
  }, [accessToken])

  return (
    <div className="max-w-4xl mx-auto overflow-hidden">
      <Fragment>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/setting" element={<Setting />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </Fragment>
    </div>
  )
}

export default App

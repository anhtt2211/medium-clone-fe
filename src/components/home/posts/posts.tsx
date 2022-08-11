import React, { MouseEventHandler } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../store/storeHook'
import { Post } from '../../../types/post'
import { Card } from '../post/post'

export const Posts = () => {
  const { posts } = useAppSelector((state) => state.post)
  const navigate = useNavigate()
  // const showPostDetail = (post: Post) => {
  //   console.log({ post })
  // }

  function showPostDetail(post: Post) {
    console.log({ post })
    navigate(`/post/${post.id}`)
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card post={post} key={post.id} showPostDetail={showPostDetail} />
      ))}
    </div>
  )
}

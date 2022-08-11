import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPostDetailRequest } from '../../store/slice/post.slice'
import { useAppDispatch, useAppSelector } from '../../store/storeHook'
import Avatar from '../../assets/images/avatar.jpg'

export const PostDetail = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const { post } = useAppSelector((state) => state.post)

  useEffect(() => {
    dispatch(getPostDetailRequest(id))
  }, [id])

  return (
    <div className="max-w-3xl mx-auto mt-30 text-center space-y-8">
      <h3 className="text-3xl font-semibold">{post.title}</h3>
      <p className="text-lg text-gray-400">{post.description}</p>

      <div className="flex justify-items-center space-x-4">
        <img
          src={post.user?.avatar || Avatar}
          alt=""
          width={42}
          height={42}
          className="rounded-full"
        />
        <div className="flex flex-col justify-center justify-items-start text-start">
          <p className=" font-semibold text-xl">
            {post.user?.username || post.user?.email}
          </p>
          <p className="text-gray-400">{post.created_at?.toString()}</p>
        </div>
      </div>

      <div className="text-lg text-start">{post.content}</div>
    </div>
  )
}

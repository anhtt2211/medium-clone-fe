import React, { MouseEventHandler, useState } from 'react'

import { Post } from '../../../types/post'
import Avatar from '../../../assets/images/avatar.jpg'
import { GREEN_COLOR } from '../../../constants'
import { Dropdown, Menu, Space } from 'antd'
import { ModalEditPost } from './modal-edit-post'
import { useAppDispatch } from '../../../store/storeHook'
import {
  deletePostRequest,
  updatePostRequest,
} from '../../../store/slice/post.slice'

interface Props {
  post: Post
  showPostDetail?: Function
}

export const Card = ({ post, showPostDetail }: Props) => {
  const [visible, setVisible] = useState(false)
  const dispatch = useAppDispatch()
  const dropdown = (
    <Menu
      items={[
        {
          key: 1,
          label: <p onClick={() => setVisible(true)}>Edit</p>,
        },
        {
          key: 2,
          label: (
            <p onClick={() => handleDeletePost(post)} className="text-red-400">
              Delete
            </p>
          ),
        },
      ]}
    />
  )

  const handleCancel = () => {
    setVisible(false)
  }

  const handleSubmit = (data: Post) => {
    // todo
    dispatch(updatePostRequest(data))

    setVisible(false)
  }

  const handleDeletePost = (post: Post) => {
    dispatch(deletePostRequest(post.id))
  }

  return (
    <div
      className="space-y-4 cursor-pointer"
      onClick={() => showPostDetail(post)}
    >
      <div className="flex justify-items-center space-x-3 relative">
        <img
          src={post.user?.avatar || Avatar}
          width={42}
          height={32}
          className="rounded-full"
        />
        <div>
          <p className={`text-[${GREEN_COLOR}] font-semibold`}>
            {post.user?.email}
          </p>
          <p className="text-gray-400">{post.created_at?.toString()}</p>
        </div>
        <div className=" absolute top-0 right-0">
          <Dropdown overlay={dropdown}>
            <Space className="cursor-pointer">...</Space>
          </Dropdown>
        </div>
      </div>
      <div>
        <p className="font-semibold text-xl">{post.title}</p>
        <p className="text-gray-400">{post.description}</p>
      </div>

      <div className="border-b mt-2" />

      <ModalEditPost
        post={post}
        visible={visible}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
      />
    </div>
  )
}

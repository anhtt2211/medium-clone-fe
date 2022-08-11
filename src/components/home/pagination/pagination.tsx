import React, { MouseEventHandler } from 'react'
import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import { useAppSelector } from '../../../store/storeHook'

type Props = {
  nextPage: MouseEventHandler
  prevPage: MouseEventHandler
}

export const Pagination = ({ nextPage, prevPage }: Props) => {
  const { posts } = useAppSelector((state) => state.post)

  return (
    <div className="py-12 relative">
      <div className="absolute top-6 right-0">
        <div className="flex space-x-4">
          <LeftOutlined
            onClick={prevPage}
            className="cursor-pointer text-gray-400 hover:text-black"
          />
          {posts.length > 0 && (
            <RightOutlined
              onClick={nextPage}
              className="cursor-pointer text-gray-400 hover:text-black"
            />
          )}
        </div>
      </div>
    </div>
  )
}

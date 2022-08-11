import React, { useEffect, useState } from 'react'
import { Banner } from '../../components/banner/banner'
import { Pagination } from '../../components/home/pagination/pagination'
import { Posts } from '../../components/home/posts/posts'
import { LIMIT, PARAMS_DEFAULT } from '../../constants'
import { getListPostsRequest } from '../../store/slice/post.slice'
import { useAppDispatch } from '../../store/storeHook'
import { Params } from '../../types'

export const Home = () => {
  const [params, setParams] = useState<Params>(PARAMS_DEFAULT)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const payload = {
      params,
    }
    console.log('call')

    dispatch(getListPostsRequest(payload))
  }, [params])

  const nextPage = () => {
    setParams({
      skip: params.skip + LIMIT,
      limit: params.limit,
    })
  }

  const prevPage = () => {
    if (params.skip > 0) {
      setParams({
        skip: params.skip - LIMIT,
        limit: params.limit,
      })
    }
  }

  console.log({ params })

  return (
    <div className="mt-16 h-full">
      {/* Post list */}
      <Posts />
      <Pagination nextPage={nextPage} prevPage={prevPage} />
      {/* Pagination */}
    </div>
  )
}

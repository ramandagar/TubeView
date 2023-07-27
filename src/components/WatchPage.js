import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from './utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentContainer from './CommentContainer'
const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log('params', searchParams.get("v"));
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch])

  return (
    <div className='flex flex-col'>
      <div className='px-5'>
        <iframe
          width="760"
          height="315"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           
        ></iframe>
      </div>
      <CommentContainer />
    </div>
  )
}

export default WatchPage
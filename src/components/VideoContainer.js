import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from './utils/contants'
import VideoCard from './VideoCard'
import {Link} from 'react-router-dom'
import { AdBorderVideoCard } from './VideoCard'



const VideoContainer = () => {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    getAPIdata();
  }, [])

  const getAPIdata = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log('data is here ', json.items);
    setVideos(json.items);
  }
 

  return (
    <div className='flex flex-wrap'>    
      {videos[0]&&<AdBorderVideoCard info={videos[0]}/>}
      {
        videos.map((video)=>(
          <Link to = {"/watch?v=" + video.id}>
             <VideoCard  key = {video.id} info={video} />
          </Link>
        ))
      }
      </div>
  )
}

export default VideoContainer
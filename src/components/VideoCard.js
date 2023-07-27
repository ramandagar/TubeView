import React from 'react'
const VideoCard = ({ info }) => {
  if (!info) {
    return <div>Loading...</div>;
  }
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='p-2   w-72 shadow-lg bg-white rounded-lg'>
      <img
        className='rounded-lg w-full'
        alt='thumbnail'
        src={thumbnails.medium.url}
      />
      <ul className='mt-2'>
        <li className='font-bold py-2'>{title}</li>
        <li className='text-gray-600'>{channelTitle}</li>
        <li className='text-gray-600'>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};





export default VideoCard

export const AdBorderVideoCard = ({info}) => {
  return ( <div className='p-1 m-1 border border-red-900'>
    <VideoCard info={info}/>
  </div>)
}

 
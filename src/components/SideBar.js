import React from 'react'
import { useSelector } from 'react-redux'
const SideBar = () => {

  const isMenuOpen = useSelector(store=>store.app.isMenuOpen);
  if(!isMenuOpen){
    return null;
  }
  return (
  
    <div className='p-2 shadow-lg w-72 col-span-1'>
      <h1 className='font-bold'>Home</h1>
        <ul>
          <li>shorts</li>
          <li>Your Clips</li>
          <li>Live</li>
          <li>Videos</li>
          <li>Gaming</li>
        </ul>
      <h1 className='font-bold'>Subscription</h1>
        <ul>
          <li>music</li>
          <li>sports</li>
          <li>cricket</li>
          <li>movies</li>
          <li>Gaming</li>
        </ul>
      <h1 className='font-bold'>Watch Later</h1>
        <ul>
          <li>music</li>
          <li>sports</li>
          <li>cricket</li>
          <li>movies</li>
          <li>Gaming</li>
        </ul>
    </div>
  )
}

export default SideBar
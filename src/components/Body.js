import React from 'react'
import Sidebar from './SideBar'
import {Outlet} from 'react-router-dom'
const Body = () => {
  return (
    <div className='flex grid-flow-col'>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Body
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const RootLayout = () => {
  return (
    <>
      
      <div className='min-h-screen bg-black text-white'>
        <Outlet/>
        <Navbar/>
      </div>
    </>
  )
}

export default RootLayout
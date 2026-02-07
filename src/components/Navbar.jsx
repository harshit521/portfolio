import React from 'react'
import { NavLink } from 'react-router-dom'
import {RiHomeLine} from "@remixicon/react"
import {RiGitRepositoryFill} from "@remixicon/react"
import {RiMailLine} from "@remixicon/react"


const Navbar = () => {
  return (
    <div className='fixed bottom-6 left-1/2 -translate-x-1/2
    flex justify-center gap-x-28
    border border-gray-400 rounded-full
    px-16 py-4 shadow-2xl
    bg-white'>
      <NavLink to='/' className={({ isActive }) =>
      isActive
        ? "text-gray-800 scale-125 transition"
        : "text-gray-400"
    }><RiHomeLine /></NavLink>
      <NavLink to='/projects' className={({ isActive }) =>
      isActive
        ? "text-gray-800 scale-125 transition"
        : "text-gray-400"
    }><RiGitRepositoryFill /></NavLink>
      <NavLink to='/contacts' className={({ isActive }) =>
      isActive
        ? "text-gray-800 scale-125 transition"
        : "text-gray-400"
    }><RiMailLine /></NavLink>
    </div>
  )
}

export default Navbar
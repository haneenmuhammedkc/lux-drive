import React from 'react'
import { Link } from 'react-router-dom'
import { FiHeart, FiUser } from "react-icons/fi"

const Navbar = () => {
  return (
    <div className='w-full h-14 flex bg-sky-950'>

        {/* Logo Section */}
        <div className='w-[10%] h-full flex justify-center items-center'>
            <Link to="/" className='text-white text-lg font-bold'>LuxDrive</Link>
        </div>

        {/* Navigation Links */}
        <div className='w-[80%] h-full justify-center items-center flex gap-10'>
            <Link to='/' className='text-white text-sm'>HOME</Link>
            <Link to='/cars' className='text-white text-sm'>CARS</Link>
            <Link className='text-white text-sm'>ABOUT US</Link>
            <Link className='text-white text-sm'>CONTACT US</Link>
        </div>

        {/* Favorites, Profile */}
        <div className='w-[10%] h-full flex justify-center items-center gap-5'>
            <Link to='/' className='text-white text-xl cursor-pointer'>
                <FiHeart />
            </Link>
            <Link to='/' className='text-white text-xl cursor-pointer'>
                <FiUser />
            </Link>
        </div>
    </div>
  )
}

export default Navbar
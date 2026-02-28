import React from 'react'
import { Link } from 'react-router-dom'
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi"

const Footer = () => {
  return (
    <div className='w-full bg-linear-to-b from-sky-950 to-black text-gray-200 px-10 py-12'>
      <div className='max-w-7xl mx-auto flex justify-between items-start'>

        {/* Brand Section */}
        <div className='flex flex-col gap-2 w-1/4'>
          <h2 className='text-3xl font-bold'>LuxDrive</h2>
          <p className='text-lg'>Drive luxury without limits.</p>
          <p className='text-sm tracking-widest text-gray-400'>Premium cars. Seamless bookings.</p>
        </div>

        {/* Quick Links */}
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold mb-2'>Quick Links</h3>
          <Link to='/' className='text-sm'>HOME</Link>
          <Link to='/cars' className='text-sm'>CARS</Link>
          <Link to='/about' className='text-sm'>ABOUT US</Link>
          <Link to='/contact' className='text-sm'>CONTACT US</Link>
        </div>

        {/* Services */}
        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold mb-2'>Services</h3>
          <p>Luxury Rentals</p>
          <p>Airport Pickup</p>
          <p>Corporate Booking</p>
          <p>Long-Term Rentals</p>
        </div>

        {/* Contact */}
        <div className='flex flex-col gap-3'>
          <h3 className='font-semibold'>Follow Us</h3>
          <div className='flex gap-4 text-xl'>
            <Link><FiInstagram /></Link>
            <Link><FiFacebook /></Link>
            <Link><FiTwitter /></Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
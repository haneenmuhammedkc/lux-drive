import React from 'react'
import car from '../assets/car.png'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    
  return (
    <div className='w-full h-[80vh] bg-size-[55%] bg-bottom bg-no-repeat' style={{backgroundImage: `url(${car})` }}>
        <div className='flex flex-col items-center py-10'>
            <h1 className="text-5xl font-bold mb-3">
                Drive Luxury Without Limits
            </h1>
            <p className="text-lg text-gray-500 mb-4">
                Premium cars. Seamless bookings. Ultimate experience.
            </p>
            <Link to="/cars">
                <button className="h-12 w-40 bg-black text-white rounded-md font-semibold hover:bg-gray-800 cursor-pointer
                  hover:scale-105 transition">
                    Browse Cars
                </button>
            </Link>
        </div>
    </div>
  )
}

export default HeroSection
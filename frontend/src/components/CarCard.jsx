import React from "react"
import { FiHeart } from "react-icons/fi"
import { Link } from "react-router-dom"

const CarCard = ({ car }) => {
  if (!car) return null

  return (
    <Link to={`/cars/${car._id}`}>
      <div className="w-72 h-90 bg-white rounded-xl shadow-md p-4 m-2 hover:shadow-lg transition flex flex-col hover:scale-102 duration-300">

        {/* Image Container */}
        <div className="w-full h-48 overflow-hidden rounded-md">
          <img src={car.image} alt={car.title} className="w-full h-full object-cover"/>
        </div>

        {/* Content */}
        <div className="flex justify-between items-center mt-3">
          <h3 className="font-semibold">{car.title}</h3>
          <FiHeart className="cursor-pointer text-lg" />
        </div>

        <p className="text-sm text-gray-500 mt-1">₹ {car.price}</p>

        {/* Button */}
        <div className="mt-auto">
          <button className="w-full bg-sky-950 hover:bg-sky-900 text-white py-2 rounded-md cursor-pointer">
            Book Now
          </button>
        </div>

      </div>
    </Link>
  )
}

export default CarCard
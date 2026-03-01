import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../components/Button'

const BookingModal = ({ car, onClose }) => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [bookingData, setBookingData] = useState({ pickupDate:"", returnDate:"", pickupTime:"", name:"", phone:"", location:"" })

  // To Handle Input Values
  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    })
  }

  useEffect(()=>{
    if(bookingData.pickupDate && bookingData.returnDate){
      const start = new Date(bookingData.pickupDate)
      const end = new Date(bookingData.returnDate)
      const diffTime = end - start
      const days = diffTime / ( 1000 * 60 * 60 * 24 )
      if(days>0){
        setTotalPrice( days * car.price )
      }
      else{
        setTotalPrice(0)
      }
    }
  }, [bookingData.pickupDate, bookingData.returnDate, car.price])

  const handleSubmit = async () => {
    try{
      const bookingPayload = {
        ...bookingData,
        carId: car?._id,
        totalPrice,
      }
      const res = await axios.post( "http://localhost:5000/api/bookings", bookingPayload )
      console.log(res.data)
      onClose()
    }
    catch(error){
      console.log("Booking Error:", error)
    }
  }

  return (
  <div className="fixed inset-0 backdrop-blur-xs flex items-center justify-center">
    <div className="w-2xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 relative">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold tracking-wide uppercase"> Book Your Ride </h2>
      </div>

      {/* Car Summary */}
      <div className="flex items-center gap-6 bg-gray-50 rounded-2xl p-4 mb-6">
        <img src={car?.image} className="w-28 h-20 object-cover rounded-xl" />
        <div>
          <h3 className="text-lg font-semibold">{car?.title}</h3>
          <p className="text-sm text-gray-500"> ₹{car?.price} / day </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Left Side */}
        <div className="flex flex-col gap-4">
          <input type="date" name="pickupDate" value={bookingData.pickupDate} onChange={handleChange} className="input-style" />
          <input type="date" name="returnDate" value={bookingData.returnDate} onChange={handleChange} className="input-style" />
          <input type="time" name="pickupTime" value={bookingData.pickupTime} onChange={handleChange} className="input-style" />
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-4">
          <input type="text" placeholder="Full Name" name="name" value={bookingData.name} onChange={handleChange}
            className="input-style" />
          <input type="tel" placeholder="Phone Number" name="phone" value={bookingData.phone} onChange={handleChange}
            className="input-style" />
          <input type="text" placeholder="Pickup Location" name="location" value={bookingData.location} onChange={handleChange}
            className="input-style" />
        </div>
      </div>

      {/* Price */}
      <div className="mt-8 bg-zinc-50 rounded-2xl p-5 flex justify-between items-center shadow-md">
        <span className="text-lg font-semibold">Total Amount</span>
        <span className="text-2xl font-bold">₹{totalPrice}</span>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-8">
        <Button variant="cancel" onClick={onClose} className="px-6">
          Cancel
        </Button>

        <Button variant="primary" onClick={handleSubmit} className="px-8">
          Confirm Booking
        </Button>
      </div>

    </div>
  </div>
)
}

export default BookingModal
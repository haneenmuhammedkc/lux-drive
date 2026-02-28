import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white w-[90%] max-w-2xl rounded-2xl p-6">

            {/* Header */}
            <div className="flex justify-between items-center border-b pb-3">
            <h2 className="text-xl font-semibold">Book This Car</h2>
            </div>

            {/* Car Summary */}
            <div className="flex gap-4 items-center py-4">
            <img src={car?.image} className="w-24 h-16 object-cover rounded-lg" />
            <div>
                <h3 className="font-semibold">{car?.title}</h3>
                <p className="text-sm text-gray-500">₹{car?.price}/day</p>
            </div>
            </div>

            {/* Form */}
            <div className="grid grid-cols-2 gap-4">
              <div className='flex flex-col'>
                <input type="date" name="pickupDate" value={bookingData.pickupDate} onChange={handleChange} />
                <input type="date" name="returnDate" value={bookingData.returnDate} onChange={handleChange} />
                <input type="time" name="pickupTime" value={bookingData.pickupTime} onChange={handleChange} />
              </div>
              <div className='flex flex-col'>
                <input type="text" placeholder="Full Name" name="name" value={bookingData.name} onChange={handleChange} />
                <input type="tel" placeholder="Phone Number" name="phone" value={bookingData.phone} onChange={handleChange} />
                <input type="text" placeholder="Pickup Location" name="location" value={bookingData.location} onChange={handleChange} />
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-gray-50 rounded-xl p-4 mt-4">
              <div className="flex justify-between">
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end gap-3 pt-4 border-t mt-4">
            <button onClick={onClose} className="px-4 py-2 border rounded-lg">Cancel</button>
            <button onClick={handleSubmit} className="px-4 py-2 bg-black text-white rounded-lg">
                Confirm Booking
            </button>
            </div>

        </div>
    </div>
  )
}

export default BookingModal
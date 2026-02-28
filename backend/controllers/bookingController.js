import Booking from "../models/Booking.js"
import Car from "../models/Car.js"

export const createBooking = async (req, res) => {
  try {
    const { carId, name, phone, location, pickupDate, returnDate, pickupTime, totalPrice } = req.body
    if (!carId || !name || !pickupDate || !returnDate){
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      })
    }

    const newBooking = new Booking({ carId, name, phone, location, pickupDate, returnDate, pickupTime, totalPrice })
    await newBooking.save()
    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      booking: newBooking
    })
  } catch(error){
    console.log("Create Booking Error:", error)
    res.status(500).json({
      success: false,
      message: "Server Error"
    })
  }
}

export const updateBooking = async (req, res) => {
  try{
    const updatedBooking = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.status(200).json(updatedBooking)
  }
  catch(error){
    console.log("Update Booking Error: ", error)
    res.status(500).json({ message: "Server Error" })
  }
}

export const deleteBooking = async (req, res) => {
  try{
    await Booking.findByIdAndDelete( req.params.id )
    res.json({ message: "Booking Deleted Successfully" })
  }
  catch(error){
    console.log("Delete Booking Error: ", error)
    res.status(500).json({ message: "Server Error" })
  }
}

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 })
    res.status(200).json(bookings)
  } catch (error) {
    console.log("Get Bookings Error:", error)
    res.status(500).json({ message: "Server Error" })
  }
}

export const getAdminStats = async (req,res) => {
  try{
    const totalCars = await Car.countDocuments()
    const totalBookings = await Booking.countDocuments()
    const pendingBookings = await Booking.countDocuments({ status: "Pending" })

    const revenueData = await Booking.aggregate([
      { $match: { status: "Approved" } },
      { $group: { _id:null, totalRevenue: { $sum: "$totalPrice" } } }
    ])

    const totalRevenue = revenueData.length > 0 ? revenueData[0].totalRevenue: 0

    const recentBookings = await Booking.find().sort({ createdAt: -1 }).limit(5)

    res.status(200).json({
      totalCars,
      totalBookings,
      pendingBookings,
      totalRevenue,
      recentBookings
    })
  }
  catch(error){
    console.log("Admin Stats Error: ", error)
    res.status(500).json({ message: "Server Error" })
  }
}
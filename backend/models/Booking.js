import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema({
    carId: { type: String, required: true },
    name: { type: String, required: true },
    phone: String,
    location: String,
    pickupDate: String,
    returnDate: String,
    pickupTime: String,
    totalPrice: Number,
    status: { type: String, default: "Pending" }
  },
    { timestamps: true }
)

export default mongoose.model("Booking",bookingSchema)
import mongoose from 'mongoose'

const carSchema = new mongoose.Schema({
    title: String,
    price: Number,
    image: String,
    brand: String,
    fuelType: String,
    featured: {
        type: Boolean,
        default: false
    }
  },
    { timestamps: true }
)

export default mongoose.model("Car",carSchema)
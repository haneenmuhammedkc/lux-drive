import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from 'cors'
import connectDB from "./config/db.js"
import carRoutes from './routes/carRoutes.js'
import bookingRoutes from './routes/bookingRoutes.js'

connectDB()

const app = express()
app.use(cors())
app.use(express.json())

const Port = process.env.PORT

app.use("/api/cars", carRoutes)
app.use("/api/bookings", bookingRoutes)

app.listen(Port, ()=>{
    console.log("Server Connected Successfully")
})
import express from 'express'
import { createBooking, deleteBooking, getAdminStats, getAllBookings, updateBooking } from '../controllers/bookingController.js'

const router = express.Router()

router.post("/", createBooking)
router.put("/:id", updateBooking)
router.delete("/:id", deleteBooking)

router.get("/", getAllBookings)
router.get("/admin-stats", getAdminStats)

export default router
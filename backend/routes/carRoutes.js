import express from 'express'
import { getAllOrders, getFeaturedCars, getCarById, createCar, updateCar, deleteCar } from '../controllers/carController.js'

const router = express.Router()

router.get("/", getAllOrders)
router.get("/featured", getFeaturedCars)
router.get("/:id", getCarById)

router.post("/", createCar)
router.put("/:id", updateCar)
router.delete("/:id", deleteCar)

export default router
import Car from '../models/Car.js'

export const getAllOrders = async (req,res) => {
    const cars = await Car.find()
    res.json(cars)
}

export const getFeaturedCars = async (req,res) => {
    const cars = await Car.find({ featured:true })
    res.json(cars)
}

export const getCarById = async (req, res) => {
  try{
    const car = await Car.findById(req.params.id)
    res.json(car)
  }
  catch(error){
    res.status(404).json({ message: "Car not found" })
  }
}

// To Create a Car
export const createCar = async (req, res) => {
  try{
    const newCar = new Car(req.body)
    await newCar.save()
    res.status(201).json(newCar)
  }
  catch(error){
    console.log("Create Car has a Error: ", error)
    res.status(500).json({ message: "Server Error" })
  }
}

// To Update a Car
export const updateCar = async (req, res) => {
  try{
    const updatedCar = await Car.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.json(updatedCar)
  }
  catch(error){
    console.log("Update Car Error: ", error)
    res.status(500).json({ message: "Server Error" })
  }
}

// To Delete a Car
export const deleteCar = async (req, res) => {
  try{
    await Car.findByIdAndDelete( req.params.id )
    res.json({ message: "Car Deleted Successfully" })
  }
  catch(error){
    console.log("Delete Car Error: ", error)
    res.status(500).json({ message: "Server Error" })
  }
}
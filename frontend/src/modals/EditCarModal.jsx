import React, { useState } from "react"
import axios from "axios"

const EditCarModal = ({ car, onClose, onUpdated }) => {

  const [formData, setFormData] = useState({ title: car.title, brand: car.brand, price: car.price, image: car.image, fuelType: car.fuelType })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const res = await axios.put(
        `http://localhost:5000/api/cars/${car._id}`,
        formData
      )
      onUpdated(res.data)
      onClose()
    }
    catch(error){
      console.log("Update error:", error)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Edit Car</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input name="title" value={formData.title} onChange={handleChange} className="border p-2 rounded" />
          <input name="brand" value={formData.brand} onChange={handleChange} className="border p-2 rounded" />
          <input name="price" value={formData.price} onChange={handleChange} className="border p-2 rounded" />
          <input name="image" value={formData.image} onChange={handleChange} className="border p-2 rounded" />
          <input name="fuelType" value={formData.fuelType} onChange={handleChange} className="border p-2 rounded" />

          <div className="flex justify-end gap-2 mt-3">
            <button type="button" onClick={onClose} className="px-3 py-1 bg-gray-400 text-white rounded">
              Cancel
            </button>
            <button type="submit" className="px-3 py-1 bg-blue-600 text-white rounded">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditCarModal
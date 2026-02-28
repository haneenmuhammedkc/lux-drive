import { useState } from "react"
import axios from "axios"

const AddCarModal = ({ onClose, onCarAdded }) => {

  const [formData, setFormData] = useState({ title: "", brand: "", price: "", fuelType: "", image: "" })

  // For Handling Inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async () => {
    try{
      const res = await axios.post( "http://localhost:5000/api/cars", formData )
      onCarAdded(res.data)
      onClose()
    }
    catch(error){
      console.log("Add Car Error:", error)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl w-100">

        <h2 className="text-lg font-semibold mb-4">Add New Car</h2>

        <div className="flex flex-col gap-3">
          <input name="title" placeholder="Title" onChange={handleChange} className="border p-2 rounded" />
          <input name="brand" placeholder="Brand" onChange={handleChange} className="border p-2 rounded" />
          <input name="price" placeholder="Price per day" type="number" onChange={handleChange} className="border p-2 rounded" />
          <input name="fuelType" placeholder="Fuel Type" onChange={handleChange} className="border p-2 rounded" />
          <input name="image" placeholder="Image URL" onChange={handleChange} className="border p-2 rounded" />
        </div>

        <div className="flex justify-end gap-3 mt-5">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Cancel
          </button>

          <button onClick={handleSubmit} className="px-4 py-2 bg-black text-white rounded">
            Add Car
          </button>
        </div>

      </div>
    </div>
  )
}

export default AddCarModal
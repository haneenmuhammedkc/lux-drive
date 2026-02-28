import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddCarModal from '../modals/AddCarModal'
import EditCarModal from '../modals/EditCarModal'

const AdminCars = () => {
    const [cars, setCars] = useState([])
    const [loading, setLoading] = useState(false)
    const [editCar, setEditCar] = useState(null)
    const [showModal, setShowModal] = useState(false)

    useEffect(()=>{
        const fetchCars = async () => {
            try{
                const res = await axios.get("http://localhost:5000/api/cars")
                setCars(res.data)
            }
            catch(error){
                console.log("Fetch cars Error: ", error)
            }
            finally{
                setLoading(false)
            }
        }
        fetchCars()
    }, [])

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this car?")
        if(!confirmDelete) return
        try{
            await axios.delete(`http://localhost:5000/api/cars/${id}`)
            setCars(cars.filter(car => car._id !== id))
        }
        catch(error){
            console.log("Delete Error: ", error)
        }
    }

    const handleEdit = (car) => {
        setEditCar(car)
    }

    if(loading) return <p className='p-8'>Loading Cars...</p>
    
  return (
    <div className="p-8">

      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Cars</h1>
        <button onClick={() => setShowModal(true)} className="bg-black text-white px-4 py-2 rounded-lg">
            + Add Car
        </button>
      </div>

      <div className="bg-white shadow rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-sm">
            <tr>
              <th className="p-4">Image</th>
              <th className="p-4">Title</th>
              <th className="p-4">Brand</th>
              <th className="p-4">Price/Day</th>
              <th className="p-4">Fuel</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {cars.map((car) => (
              <tr key={car._id} className="border-t hover:bg-gray-50">
                <td className="p-4"><img src={car.image} alt={car.title} className="w-16 h-12 object-cover rounded" /></td>
                <td className="p-4 font-medium">{car.title}</td>
                <td className="p-4">{car.brand}</td>
                <td className="p-4">₹{car.price}</td>
                <td className="p-4">{car.fuelType}</td>
                <td>
                    <div className="flex gap-2">
                        <button onClick={()=>handleEdit(car)} className="bg-blue-700 text-white px-3 py-1 cursor-pointer rounded">
                            Edit
                        </button>

                        <button onClick={()=>handleDelete(car._id)} className="bg-red-700 text-white px-3 py-1 cursor-pointer rounded">
                            Delete
                        </button>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      { showModal && (
        <AddCarModal 
          onClose={()=>setShowModal(false)}
          onCarAdded={(newCar) => setCars([...cars, newCar])} 
        />
      )}
      {editCar && (
        <EditCarModal
          car={editCar}
          onClose={() => setEditCar(null)}
          onUpdated={(updatedCar) => { setCars(cars.map(car => car._id === updatedCar._id ? updatedCar : car )) }}
        />
      )}
    </div>
  )
}

export default AdminCars
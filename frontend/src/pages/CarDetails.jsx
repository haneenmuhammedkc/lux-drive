import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import BookingModal from "../modals/BookingModal"
import Button from "../components/Button"

const CarDetails = () => {
  const { id } = useParams()

  const [car, setCar] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showBookingModal, setShowBookingModal] = useState(false)

  useEffect(() => {
    const fetchCar = async () => {
      try{
        const res = await axios.get(`http://localhost:5000/api/cars/${id}`)
        setCar(res.data)
      }
      catch(error){
        console.log(error)
      }
      finally{
        setLoading(false)
      }
    }
    fetchCar()
  }, [id])

  if(loading){ return <p className="text-center py-20">Loading car details...</p> }
  if(!car){ return <p className="text-center py-20">Car not found.</p> }

  return (
    <>
    <Navbar />
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10">

        {/* Image */}
        <div className="w-full h-87.5 bg-gray-200 rounded-xl overflow-hidden">
          <img src={car.image} alt={car.title} className="w-full h-full object-cover" />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{car.title}</h1>
          <p className="text-2xl font-semibold text-sky-900 mb-6"> ₹ {car.price} </p>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 gap-4 mb-6 text-gray-700">
            <p><span className="font-semibold">Brand:</span> {car.brand}</p>
            <p><span className="font-semibold">Fuel:</span> {car.fuelType}</p>
          </div>

          <Button variant="outline" className="w-90" onClick={()=>setShowBookingModal(true)}>
            Book Your's Now
          </Button>
        </div>
      </div>

    </div>
    <Footer />
    {showBookingModal && (
      <BookingModal car={car} onClose={() => setShowBookingModal(false)} />
    )}
    </>
  )
}

export default CarDetails
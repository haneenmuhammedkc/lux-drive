import { useEffect, useState } from "react"
import axios from "axios"
import CarCard from "../components/CarCard"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const CarsPage = () => {
  const [cars, setCars] = useState([])
  const [filters, setFilters] = useState({ fuel: "all", brand: "all" })

  // For Fetching Cars
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/cars")
        setCars(res.data)
      }
      catch(error){
        console.log(error)
      }
    }
    fetchCars()
  }, [])

  // For Filtering Cars
  const filteredCars = cars.filter((car) => {
    const fuelMatch = filters.fuel === "all" || car.fuelType === filters.fuel
    const brandMatch = filters.brand === "all" || car.brand === filters.brand
    return fuelMatch && brandMatch
  })

  // Helper Function for Brand Filtering
  const toggleBrand = ( brand, checked ) => {
    setFilters((prev)=>({
      ...prev,
      brands: checked
        ? [...prev.brands, brand]
        : prev.brands.filter((b) => b !== brand)
    }))
  }

  return (
    <>
      <Navbar />
      <div className="w-full flex pb-10">

        {/* Left Section */}
        <div className="w-[20%] h-full bg-zinc-50 px-10 py-5 rounded-2xl shadow-lg sticky top-16 self-start mt-20 ml-5 mr-25">
          <h2 className="font-semibold text-lg mb-4">Filters</h2>

          {/* Brand */}
          <div className="mb-5">
            <p className="font-medium mb-2">Brand</p>

            <select value={filters.brand} onChange={(e) => setFilters((prev) => ({
               ...prev,
                brand: e.target.value
              }))}
              className="w-full border rounded-lg p-2">
              <option value="all">All</option>
              <option value="BMW">BMW</option>
              <option value="AUDI">AUDI</option>
              <option value="BENZ">BENZ</option>
              <option value="TOYOTA">TOYOTA</option>
              <option value="MAHINDRA">MAHINDRA</option>
            </select>
          </div>

          {/* Fuel */}
          <div>
            <p className="font-medium mb-2">Fuel Type</p>
            <select value={filters.fuel} onChange={(e)=>setFilters((prev)=>({
              ...prev,
              fuel: e.target.value
            }))}
            className="w-full border rounded-lg p-2">
              <option value="all">All</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
            </select>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-3">
          <h1 className="text-3xl font-bold text-center mb-10 mt-5">Cars Available</h1>

          <div className="grid grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <CarCard key={car._id} car={car} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CarsPage
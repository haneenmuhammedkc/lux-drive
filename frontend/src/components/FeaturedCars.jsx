import { useEffect, useState } from 'react'
import axios from 'axios'
import CarCard from '../components/CarCard'

const FeaturedCars = () => {
  const [cars, setCars] = useState([])

  useEffect(()=>{
    const fetchCars = async () => {
        try{
            const res = await axios.get("http://localhost:5000/api/cars/featured")
            setCars(res.data)
        }
        catch(error){
            console.log(error)
        }
    }
    fetchCars()
  },[])

  return (
    <div className="py-16 bg-zinc-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        Featured Cars
      </h2>

      <div className="flex justify-center gap-8 flex-wrap">
        {cars.map((car)=>(
            <CarCard key={car._id} car={car} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedCars
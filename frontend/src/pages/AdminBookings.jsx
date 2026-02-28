import { useEffect, useState } from "react"
import axios from "axios"
import BookingsTable from "../components/BookingsTable"

const AdminBookings = () => {

  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBookings = async () => {
      try{
        const res = await axios.get("http://localhost:5000/api/bookings")
        setBookings(res.data)
      }
      catch(err){
        console.log("Fetch Bookings Error:", err)
      }
      finally{
        setLoading(false)
      }
    }
    fetchBookings()
  }, [])

  return (
    <div className="flex">
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Manage Bookings</h1>
        {loading ? (
          <p>Loading bookings...</p>
        ) : (
          <BookingsTable bookings={bookings} />
        )}
      </div>
    </div>
  )
}

export default AdminBookings
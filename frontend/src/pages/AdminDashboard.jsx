import React, { useEffect, useState } from "react"
import axios from "axios"

const AdminDashboard = () => {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    const fetchStats = async () => {
      try{
        const res = await axios.get( "http://localhost:5000/api/bookings/admin-stats" )
        setStats(res.data)
      }
      catch(error){
        console.log(error)
      }
    }
    fetchStats()
  }, [])

  if (!stats) return <p className="p-8">Loading Dashboard...</p>

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6 mb-10">
        <div className="bg-white shadow rounded-xl p-6">
          <p className="text-gray-500">Total Cars</p>
          <h2 className="text-2xl font-bold">{stats.totalCars}</h2>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <p className="text-gray-500">Total Bookings</p>
          <h2 className="text-2xl font-bold">{stats.totalBookings}</h2>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <p className="text-gray-500">Pending Bookings</p>
          <h2 className="text-2xl font-bold">{stats.pendingBookings}</h2>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <p className="text-gray-500">Total Revenue</p>
          <h2 className="text-2xl font-bold">₹{stats.totalRevenue}</h2>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="font-semibold mb-4">Recent Bookings</h2>

        <ul>
          {stats.recentBookings.map((booking) => (
            <li key={booking._id} className="border-b py-2">
              {booking.name} - ₹{booking.totalPrice} - {booking.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AdminDashboard

import StatusBadge from "./StatusBadge"
import axios from "axios"

const BookingRow = ({ booking }) => {

  const handleDelete = async () => {
    const confirmDelete = window.confirm("cancel this Booking?")
    if(!confirmDelete) return
    try{
      await axios.delete(`http://localhost:5000/api/bookings/${booking._id}`)
      window.location.reload()
    }
    catch(error){
      console.log("Delete Error: ", error)
    }
  }

  const handleApprove = async () => {
    try{
      await axios.put(`http://localhost:5000/api/bookings/${booking._id}`, { status: "Approved" } )
      window.location.reload()
    }
    catch(error){
      console.log("Update Error: ", error)
    }
  }

   return (
    <tr className="border-t">
      <td className="p-4">{booking.name}</td>
      <td className="p-4">{booking.pickupDate}</td>
      <td className="p-4">{booking.returnDate}</td>
      <td className="p-4">₹{booking.totalPrice}</td>
      <td><StatusBadge status={booking.status} /></td>

      <td className="p-4">
        <div className="flex gap-2">
          {booking.status === "Pending" && (
            <>
              <button onClick={handleApprove} className="bg-green-600 text-white px-3 py-1 rounded">
                Approve
              </button>
              <button onClick={handleDelete} className="bg-red-700 text-white px-3 py-1 rounded">
                Delete
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  )
}

export default BookingRow
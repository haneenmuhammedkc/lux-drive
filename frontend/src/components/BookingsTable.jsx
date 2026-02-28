import BookingRow from "./BookingRow"

const BookingsTable = ({ bookings }) => {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full text-left table-fixed">
        <thead className="bg-gray-100 text-sm">
          <tr>
            <th className="p-4 w-1/6">Customer Name</th>
            <th className="p-4 w-1/6">Pickup Date</th>
            <th className="p-4 w-1/6">Return Date</th>
            <th className="p-4 w-1/6">Total Amount</th>
            <th className="p-4 w-1/6">Status</th>
            <th className="p-4 w-1/6">Actions</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking) => (
            <BookingRow key={booking._id} booking={booking} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BookingsTable
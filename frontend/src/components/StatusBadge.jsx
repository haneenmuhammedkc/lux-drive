import React from "react"

const StatusBadge = ({ status }) => {

  const colors = {
    Pending: "bg-yellow-100 text-yellow-800",
    Approved: "bg-green-100 text-green-800",
    Cancelled: "bg-red-100 text-red-800"
  }

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors[status] || "bg-gray-100"}`}>
      {status}
    </span>
  )
}

export default StatusBadge
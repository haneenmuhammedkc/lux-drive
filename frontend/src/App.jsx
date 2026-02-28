import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import CarDetails from './pages/CarDetails'
import CarsPage from './pages/CarsPage'
import AdminBookings from './pages/AdminBookings'
import AdminDashboard from './pages/AdminDashboard'
import AdminCars from './pages/AdminCars'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cars' element={<CarsPage />} />
          <Route path='/cars/:id' element={<CarDetails />} />
          <Route path="/admin/bookings" element={<AdminBookings />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/cars" element={<AdminCars />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
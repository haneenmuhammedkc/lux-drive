import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import FeaturedCars from '../components/FeaturedCars'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturedCars />
      <Footer />
    </div>
  )
}

export default HomePage
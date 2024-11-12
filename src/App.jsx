import React from 'react'
import Nav from './Component/Nav'
import Hero from './Component/Hero'
import About from './Component/About'
import FeacturedCar from './Component/FeacturedCar'
import Footer from './Component/Footer'
import CarLogos from './Component/CarLogos'
import Subscribe from './Component/Subscribe'
import Brands from "./Component/Brands"
const App = () => {
  return (
    <div>
    <div className=' bg-custom-gradient'>
      <Nav/>
      <Hero/>
      <About/>
      <Brands/>
      <FeacturedCar/>
      <CarLogos/>
      <Subscribe/>
      <Footer/>
    </div>
    </div>
  )
}
export default App

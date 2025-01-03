import React from 'react'
import Hero from '../Component/Hero';
import About from '../Component/About';
import FeacturedCar from '../Component/FeacturedCar';
import CarLogos from '../Component/CarLogos';
import Subscribe from '../Component/Subscribe';
import FilteredCar from "../Component/FilteredCar";
import Porchi from '../Component/Porchi';
const Home = () => {
  return (
    <div>
      <Hero />
        <About />
        <Porchi />
        <FeacturedCar />
        <FilteredCar />
        <CarLogos />
        <Subscribe />
    </div>
  )
}

export default Home

import React from 'react'
import { car } from '../assets/car'

const CarLogos = () => {
  return (
    <div>
      <div className='grid sm:grid-cols-6 grid-cols-3 gap-10 py-16 justify-center items-center sm:px-14'>
        <div className='flex justify-center items-center'>
        <img className='w-[70px]' src={car.lam} alt="" />
        </div>
        <div className='flex justify-center items-center'>
        <img className='w-[70px]' src={car.tesla} alt="" />
        </div>
        <div className='flex justify-center items-center'>
        <img className='w-[70px]' src={car.BigChori} alt="" />
        </div>
        <div className='flex justify-center items-center'>
        <img className='w-[70px]' src={car.tri} alt="" />
        </div>
        <div className='flex justify-center items-center'>
        <img className='w-[70px]' src={car.bmw} alt="" />
        </div>
        <div className='flex justify-center items-center'>
        <img className='w-[70px]' src={car.ferrariLogo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default CarLogos

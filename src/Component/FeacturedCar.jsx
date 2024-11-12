import React from 'react'
import { car } from '../assets/car'

const FeacturedCar = () => {
  return (
    <div className='flex justify-center items-center overflow-hidden relative'>
      <h1>More Feactures</h1>
      <img src={car.Map} className='min-w-[650px]  min-h-[705px]' alt="" />
      <div className='relative'>
      {/* <div className=" left-56 top-3 w-[197px] h-[104px] text-black bg-[#FFFFFF] opacity-30 backdrop-blur-xl rounded-[20px] flex flex-col justify-center items-center p-2">
    <h1 className="text-lg font-bold">800v</h1>
    <p className="text-sm">Turbo <br />Chargin</p>
  </div> */}

<div className="absolute  -bottom-14 right-56 z-20 w-[197px] h-[104px] text-black  border-opacity-18 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-[10px]  rounded-[20px] flex flex-col justify-center items-center p-2">
    <h1 className="text-lg font-bold inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[20px] text-white">2,500+</h1>
    <p className="text-sm inset-0 bg-gradient-to-br from-white/10 to-transparent text-white">Supercharges placed <br />along popular routes</p>
  </div>
      </div>
      <img src={car.FeacturedCar} className=' absolute z-10' alt="" />
    </div>
  )
}
export default FeacturedCar

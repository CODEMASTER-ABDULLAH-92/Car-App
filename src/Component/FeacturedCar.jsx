import React from 'react'
import { car } from '../assets/car'

const FeacturedCar = () => {
  return (
    <div className='flex justify-center min-h-screen max-w-full py-10 items-center overflow-clip relative'>
      <h1>More Feactures</h1>
      <img src={car.Map} className='absolute z-20 min-w-[650px]  min-h-[705px]' alt="" />
      <div className='relative'>
      <div className="top-12  -left-[280px] blurEffect  overflow-clip  absolute z-40 w-[150px] h-[87px] text-black  border-opacity-18 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-[10px]  rounded-[10px] flex flex-col justify-center items-center p-2">
    <h1 className="text-lg font-bold inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[20px] text-white">800 v</h1>
    <p className="text-sm inset-0 bg-gradient-to-br from-white/10 to-transparent text-white">Turbo <br /> Chargin</p>
  </div>
<div className="-bottom-3 -left-6 absolute z-40 overflow-clip blurEffect2  w-[150px] h-[87px] text-black  border-opacity-18 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-[10px]  rounded-[10px] flex flex-col justify-center items-center p-2">
    <h1 className="text-lg font-bold inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[20px] text-white">350 + </h1>
    <p className="text-sm inset-0 bg-gradient-to-br from-white/10 to-transparent text-white">Km <br /> range</p>
  </div>
<div className="absolute bottom-12 -left-[280px]  overflow-clip blurEffect z-40 w-[150px] h-[87px] text-black  border-opacity-18 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-[10px]  rounded-[10px] flex flex-col justify-center items-center p-2">
    <h1 className="text-lg font-bold inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[20px] text-white">480</h1>
    <p className="text-sm inset-0 bg-gradient-to-br from-white/10 to-transparent text-white">Km<br />Travel</p>
  </div>
      </div>

      <img src={car.FeacturedCar} className='absolute z-30 ' alt="" />
    </div>
  )
}
export default FeacturedCar

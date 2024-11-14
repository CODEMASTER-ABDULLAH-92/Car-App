import React from 'react'
import { car } from '../assets/car'

const Footer = () => {
  return (
    <div className='px-[2vw] sm:px-[5vw] md:px-[7vw] lg:px-[9vw] text-white py-16' id='contact'>
      <div className='grid grid-cols-1 sm:grid-cols-4 justify-start items-start gap-10'>
        <div className='flex justify-center items-start gap-5 flex-col'>
            <img src={car.webLogo} className='w-28' alt="" />
            <p className='text-[18px] text-[#888B91]'>We offer the best electric cars of the most recognized brands in the world.</p>
        </div>
        <div>
            <ul className='flex justify-start items-start  text-start flex-col'>
                <h1 className='pb-5 cursor-pointer font-bold text-xl'>Company</h1>
                <li className='pb-2 cursor-pointer text-[18px] text-[#888B91] text-center'>About</li>
                <li className='pb-2 cursor-pointer text-[18px] text-[#888B91] text-center'>Car</li>
                <li className='pb-2 cursor-pointer text-[18px] text-[#888B91] text-center'>Histroy</li>
                <li className='pb-2 cursor-pointer text-[18px] text-[#888B91] text-center'>Shop</li>
            </ul>
        </div>
        <div>
        <ul className='flex justify-center items-start flex-col'>
                <h1 className='pb-5 cursor-pointer font-bold text-xl'>Information</h1>
                <li className='pb-2 cursor-pointer text-[18px] text-[#888B91]'>Request a quote</li>
                <li className='pb-2 cursor-pointer text-[18px] text-[#888B91]'>Find a dealer</li>
                <li className='pb-2 cursor-pointer text-[18px] text-[#888B91]'>Contact Us</li>
                <li className='pb-2 cursor-pointer text-[18px] text-[#888B91]'>Services</li>
            </ul>
        </div>
        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className=' font-bold text-xl'>Fellow Us </h1>
          <div className='flex justify-center items-center gap-4'>
            <img className='cursor-pointer' src={car.insta} alt="" />
            <img className='cursor-pointer' src={car.face} alt="" />
            <img className='cursor-pointer' src={car.twt} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

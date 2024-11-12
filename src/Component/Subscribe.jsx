import React from 'react'
import {car} from "../assets/car"
const Subscribe = () => {
  return (
    <div className='px-[2vw] sm:px-[5vw] md:px-[7vw] lg:px-[9vw] flex justify-between sm:items-center items-start gap-7 py-12 sm:flex-row flex-col text-white'>
      <div className='flex sm:justify-start sm:items-start justify-center items-center gap-5 flex-col max-w-[100vh] sm:w-[60vh]'>
        <h1 className='text-2xl font-bold text-white text-center sm:text-start'>
        Do You Want To Receive 
        Special Offers?
        </h1>
        <p className='text-[#888B91] text-center sm:text-start'>
        Be the first to receive all the information about our products and new cars by email by subscribing to our mailing list.
        </p>
        <button className='px-8 py-4 bg-[#4177DC] rounded-md text-xl mt-4 sm:mt-8'>
            Subscribe Now
        </button>
      </div>
        <img src={car.SubImg}  alt="" />

    </div>
  )
}

export default Subscribe

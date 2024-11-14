import React from 'react'
import { car } from '../assets/car'

const About = () => {
  return (
    <div className='px-[2vw] sm:px-[5vw] md:px-[7vw] lg:px-[9vw] text-white flex lg:flex-row flex-col items-center justify-center lg:items-start gap-16 py-16' id='about'>


<div className="relative">
  <img
    src={car.aboutCar}
    alt=""
    className="min-w-full lg:max-w-[480px] max-h-[372px] object-cover"
  />
  <div className="absolute -bottom-14 right-0 w-[197px] h-[104px] text-black  border-opacity-18 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-[10px]  rounded-[20px] flex flex-col justify-center items-center p-2">
    <h1 className="text-lg font-bold inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[20px] text-white">2,500+</h1>
    <p className="text-sm inset-0 bg-gradient-to-br from-white/10 to-transparent text-white">Supercharges placed <br />along popular routes</p>
  </div>
</div>






{/* <div class="relative rounded-[20px] border border-white border-opacity-18 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-[10px]">
  <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[20px]"></div>

</div> */}


      {/* Right  */}
      <div>
        <h1 className='text-balance text-4xl pb-2'>
        Machines With <br />
        Future Technology
        </h1>
        <p className='text-balance text-lg text-[#888B91]'>
        See the future with high-performance electric cars produced by renowned brands. They feature futuristic builds and designs with new and innovative platforms that last a long time.
        </p>
        <button className='px-8 py-4 bg-[#4177DC] rounded-md text-xl mt-8'>
            Know More
        </button>
      </div>
    </div>
  )
}

export default About

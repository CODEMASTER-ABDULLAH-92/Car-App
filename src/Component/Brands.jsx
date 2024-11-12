import React, { useState } from 'react'
import BrandCar from './BrandCar'

const Brands = () => {
  const [count,setCount] = useState(0);
  return (
    <div className='px-[2vw] sm:px-[5vw] md:px-[7vw] lg:px-[9vw] text-white py-16 text-center'>
      <h2 className='text-3xl pb-12'> Choose Your Eletric Car<br />Of The Prosche brand</h2>
      <div className='flex justify-between items-center overflow-x-scroll gap-16'>
        { count === 0 ? <BrandCar text={"1"}/>:<BrandCar text={"2"}/>}
        { count === 2 ? <BrandCar text={"3"}/>:<BrandCar text={"4"}/>}
        { count === 4 ? <BrandCar text={"5"}/>:<BrandCar text={"6"}/>}
      </div>
      <div className={`flex justify-center items-center gap-2 pt-10`}>
        <div className={`h-2 w-2 rounded-full cursor-pointer ${count === 0 ? "bg-blue-600":"bg-white"}`} onClick={()=>setCount(prev => prev + 1)}></div>
        <div className={`h-2 w-2 rounded-full cursor-pointer ${count === 2 ? "bg-blue-600":"bg-white"}`} onClick={()=>setCount(prev => prev + 1)}></div>
        <div className={`h-2 w-2 rounded-full cursor-pointer ${count === 4 ? "bg-blue-600":"bg-white"}`} onClick={()=>setCount(prev => prev + 1)}></div>
      </div>
    </div>
  )
}

export default Brands;






















// import React from 'react'
// import './About.css'
// import { useState } from 'react'
// import {asset} from "../../assets/assets"
// const About = () => {
//   const [hero, setHero] = useState(0)
//   return (
//     <div className='about' id='about'>
//       <div className="left-about">
//         <h2 className='about-heading-'>About Us</h2>
//         <p className='left-about-para'>
//         Gym24 is a leading fitness center located near Grushevka metro station, offering over 1500 sq. m of space dedicated to top-of-the-line workout equipment from leading brands such as Hammer Strength, Life Fitness, and TechnoGym. 
//         <div className='br1'></div>
// <br />
// With affordable membership options, Gym24 is accessible to everyone who wants to reach their fitness goals, whether it's building strength, increasing endurance, or losing weight.
//         <div className='br2'></div>
// <br/>
// Certified trainers at Gym24 provide expert guidance and support to develop personalized workout plans tailored to each individual's needs and goals. 
//         </p>
//       </div>
//       <div className="right-about">
//         <div className="images-about">
//           { 
//           hero === 0 ? <img className='gymImages'  src={asset.first} alt="" /> : 
//           hero === 1 ? <img className='gymImages'  src={asset.second} alt="" /> :
//           hero === 2 ? <img className='gymImages'  src={asset.third} alt="" />:
//           <img  className='gymImages' src={asset.fourth} alt="" />
//           }
//         </div>
//         <div className="icons-about">
//           <div className="mini-icons">
//             <div className={hero === 0 ? "line-icon orange" : "line-icon"} onClick={()=>setHero(0)}></div>
//             <div className={hero === 1 ? "line-icon orange": "line-icon"} onClick={()=>setHero(1)}></div>
//             <div className={hero === 2 ? "line-icon orange" : "line-icon" } onClick={()=>setHero(2)}></div>
//             <div className={hero === 3 ? "line-icon orange": "line-icon"} onClick={()=>setHero(3)}></div>
//           </div>
//           <div className="arrows-icon">
//             <img className='arrLeft' src={asset.arrLeft} onClick={()=>setHero(prev => prev - 1)} alt="" />
//             <img className='arrRight' src={asset.arrRight} onClick={()=>setHero(prev => prev + 1)} alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default About

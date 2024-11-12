import React, { useState } from 'react'
import { car } from '../assets/car'
const Nav = () => {
  const [hover,setHover] = useState("Home");
  const [visible,setVisible] = useState(false);
  return (
    <div className='relative'>
      <div className='px-[2vw] sm:px-[5vw] md:px-[7vw] lg:px-[9vw] flex justify-between items-center py-6'>
      <img src={car.webLogo} alt="" />
      <ul className='hidden sm:flex justify-center items-center gap-4 text-white'>
        <li onMouseOver={()=>setHover("Home")} className={`${hover === "Home" ? "text-blue-600":""}`}>Home</li>
        <li onMouseOver={()=>setHover("About")} className={`${hover === "About" ? "text-blue-600":""}`}>About</li>
        <li onMouseOver={()=>setHover("Popular")} className={`${hover === "Popular" ? "text-blue-600":""}`}>Popular</li>
        <li onMouseOver={()=>setHover("Feactured")} className={`${hover === "Feactured" ? "text-blue-600":""}`}>Feactured</li>
      </ul>
        <img src={visible === false ? car.burger: car.CrossIcon} className='sm:hidden block cursor-pointer' onClick={()=>setVisible(!visible)} alt="" />

        {/* side bar  */}


      </div>
      <ul className={`${visible === false ? "hidden":"block"} flex flex-col min-h-screen overflow-hidden justify-start items-center mt-6 gap-4 text-white`}>
        <li onMouseOver={()=>setHover("Home")} onClick={()=>setVisible(!visible)} className={`${hover === "Home" ? "text-blue-600":""} text-[23px]`}>Home</li>
        <li onMouseOver={()=>setHover("About")} onClick={()=>setVisible(!visible)} className={`${hover === "About" ? "text-blue-600":""} text-[23px]`}>About</li>
        <li onMouseOver={()=>setHover("Popular")}onClick={()=>setVisible(!visible)}  className={`${hover === "Popular" ? "text-blue-600":""} text-[23px]`}>Popular</li>
        <li onMouseOver={()=>setHover("Feactured")} onClick={()=>setVisible(!visible)}  className={`${hover === "Feactured" ? "text-blue-600":""} text-[23px]`}>Feactured</li>
      </ul>
    </div>
  )
}

export default Nav;

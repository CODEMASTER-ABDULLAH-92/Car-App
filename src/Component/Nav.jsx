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
        <a href='#about' onMouseOver={()=>setHover("Home")} className={`${hover === "Home" ? "text-blue-600":""}`}>About</a>
        <a href='#elecric' onMouseOver={()=>setHover("About")} className={`${hover === "About" ? "text-blue-600":""}`}>Electric</a>
        <a href='#popular' onMouseOver={()=>setHover("Popular")} className={`${hover === "Popular" ? "text-blue-600":""}`}>Popular</a>
        <a href='#contact' onMouseOver={()=>setHover("Feactured")} className={`${hover === "Feactured" ? "text-blue-600":""}`}>Contact</a>
      </ul>
        <img src={visible === false ? car.burger: car.CrossIcon} className='sm:hidden block cursor-pointer' onClick={()=>setVisible(!visible)} alt="" />

        {/* side bar  */}


      </div>
      <ul className={`${visible === false ? "hidden":"block"} flex flex-col min-h-screen overflow-hidden justify-start items-center mt-6 gap-4 text-white`}>
        <a href='#about' onMouseOver={()=>setHover("Home")} onClick={()=>setVisible(!visible)} className={`${hover === "Home" ? "text-blue-600":""} text-[23px]`}>About</a>
        <a href='#elecric' onMouseOver={()=>setHover("About")} onClick={()=>setVisible(!visible)} className={`${hover === "About" ? "text-blue-600":""} text-[23px]`}>Electric</a>
        <a href='#popular' onMouseOver={()=>setHover("Popular")}onClick={()=>setVisible(!visible)}  className={`${hover === "Popular" ? "text-blue-600":""} text-[23px]`}>Popular</a>
        <a href='#contact' onMouseOver={()=>setHover("Feactured")} onClick={()=>setVisible(!visible)}  className={`${hover === "Feactured" ? "text-blue-600":""} text-[23px]`}>Contact</a>
      </ul>
    </div>
  )
}

export default Nav;

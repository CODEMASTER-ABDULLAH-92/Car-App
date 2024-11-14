import React, { useContext } from "react";
import { Context } from "../Context";
import { car } from "../assets/car";
const Porchi = () => {
  const { proshi } = useContext(Context);
  return (
    <div id="elecric">
        <h1 className="text-3xl text-white py-14 mt-8 text-center">Choose Your Electric Car <br /> of the of the Porsche Brand</h1>
    <div className="text-white flex justify-between  overflow-scroll gap-24 py-16 mb-16 px-[2vw] sm:px-[5vw] md:px-[7vw] lg:px-[15vw] ">
      {proshi.map((item,index) => {
          return (
              <div  className='rounded-tl-[27px] bg-[#111213] relative   min-w-[250px] h-[350px] py-4 px-5 rounded-[27px]' key={index}>
          <h1 className='text-4xl mt-2'>{item.company}</h1>
          <h2 className='text-[#BABEC4]  text-2xl font-light'>{item.modelName}</h2>
          <img src={item.carImage} className={`mt-10 ml-2`} alt="" />
          <div className="grid grid-cols-2 py-2">
            <div className="flex gap-2 justify-start items-center"><img src={car.raceIcon} alt="" /><p>{item.time}</p></div>
            <div className="flex gap-2 justify-start items-center"><img src={car.upingIcon} alt="" /><p>{item.speed}</p></div>
            <div className="flex gap-2 justify-start items-center"><img src={car.elelric} alt="" /><p>{item.power}</p></div>
          </div>
          <h1 className='text-3xl'>{item.price}</h1>
          <img src={car.bgi} className='absolute z-30 bottom-14 left-0' alt="" />
          <div className='absolute right-0 bottom-0 bg-blue-600 h-[48px] rounded-br-[27px] flex justify-center items-center rounded-tl-[27px] w-[56px]'><img src={car.CarBox} alt="" /></div>
        </div>
      )
    })}
    </div>
    <div className="flex justify-center gap-8 items-start">
        <div className="h-[8px] w-[8px] rounded-full bg-blue-600"></div>
        <div className="h-[8px] w-[8px] rounded-full bg-blue-600"></div>
        <div className="h-[8px] w-[8px] rounded-full bg-blue-600"></div>
    </div>
    </div>
  );
};

export default Porchi;

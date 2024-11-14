import React, { useContext } from 'react';
import { Context } from '../Context';
import { car } from '../assets/car';
const Car = () => {
  const { feacturedCar} = useContext(Context);
  return (
    <div className='mt-14 px-[2vw] sm:px-[5vw] md:px-[7vw] lg:px-[9vw] justify-center max-w-[1500px] items-center bg-[#111213]  gap-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {
        feacturedCar.map((item,index)=>{
          return (
            <div  className='border-2 bg-[#111213] relative overflow-clip border-red-400 w-[250px] h-[350px] py-4 px-5 rounded-[27px]' key={index}>
              <h1 className='text-4xl mt-2'>{item.company}</h1>
              <h2 className='text-[#BABEC4]  text-2xl font-light'>{item.modelName}</h2>
              <img src={item.carImage} className={`mt-10 ml-2`} alt="" />
              <h1 className='text-3xl mt-7'>{item.price}</h1>
              <img src={car.bgi} className='absolute z-30 bottom-14 left-0' alt="" />
              <div className='absolute right-0 bottom-0 bg-blue-600 h-[48px] rounded-br-[27px] flex justify-center items-center rounded-tl-[27px] w-[56px]'><img src={car.CarBox} alt="" /></div>
            </div>
          )
        })
      }
    </div>
  );
};

export default Car;

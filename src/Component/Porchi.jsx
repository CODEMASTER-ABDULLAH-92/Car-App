import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from "../Context";
import { car } from "../assets/car";

const Porchi = () => {
  const { proshi } = useContext(Context); // Assuming proshi contains car details

  return (
    <div id="elecric">
      <h1 className="text-3xl text-white py-14 mt-8 text-center">
        Choose Your Electric Car <br /> of the Porsche Brand
      </h1>

      <div className="text-white flex justify-between overflow-scroll gap-24 py-16 mb-16 px-[2vw] sm:px-[5vw] md:px-[7vw] lg:px-[15vw] ">
        {proshi.map((item, index) => (
          <Link to={`/cartDetail/${item._id}`} className="rounded-tl-[27px] bg-[#111213] relative min-w-[250px] h-[350px] py-4 px-5 rounded-[27px]" key={index}>
            <h1 className="text-4xl mt-2">{item.company}</h1>
            <h2 className="text-[#BABEC4] text-2xl font-light">{item.modelName}</h2>
            <img src={item.CarImage?.[0]} className="mt-10 ml-2" alt={item.modelName} />
            <div className="grid grid-cols-2 py-2">
              <div className="flex gap-2 justify-start items-center">
                <img src={car.raceIcon} alt="Race Icon" />
                <p>{item.time}</p>
              </div>
              <div className="flex gap-2 justify-start items-center">
                <img src={car.upingIcon} alt="Speed Icon" />
                <p>{item.speed}</p>
              </div>
              <div className="flex gap-2 justify-start items-center">
                <img src={car.elelric} alt="Electric Power Icon" />
                <p>{item.power}</p>
              </div>
            </div>
            <h1 className="text-3xl">{item.price}</h1>
            <img src={car.bgi} className="absolute z-30 bottom-14 left-0" alt="Background" />
            <div className="absolute right-0 bottom-0 bg-blue-600 h-[48px] rounded-br-[27px] flex justify-center items-center rounded-tl-[27px] w-[56px]">
              <img src={car.CarBox} alt="Car Box Icon" />
            </div>
          </Link>
        ))}
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

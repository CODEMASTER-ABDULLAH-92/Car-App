import React from "react";
import { car } from "../assets/car";

const BrandCar = ({text}) => {
  return (
    <div className="h-[328px] text-white relative min-w-[270px] rounded-[20px] overflow-hidden bg-[#111213]">
      <img src={car.bigSvg} className="absolute left-0 -top-28 z-10" alt="" />
      <h1 className="text-3xl pt-8 px-6 text-white">Porsche</h1>
      <h2 className="text-2xl py-1 px-6 text-white">Turbo {text}</h2>
      <img src={car.brand1} className="absolute z-10 top-32 left-10" alt="" />
      <div className="grid grid-cols-2 gap-1 absolute z-10 top-56">
        <div className="flex justify-center items-center gap-2">
          <img src={car.raceIcon} alt="" />
          <h1>3.7sec</h1>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img src={car.upingIcon} alt="" />
          <h1>356 km/h</h1>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img src={car.elelric} alt="" />
          <h1>Eleltric</h1>
        </div>
      </div>
      <h1 className="absolute z-10 top-72 left-3 text-2xl">$176,900</h1>
      <div className="bg-blue-600 px-5 absolute z-10 bottom-0 right-0 py-3 rounded-tl-[20px]">
      <img src={car.CarBox} alt="" />
      </div>
    </div>
  );
};

export default BrandCar;

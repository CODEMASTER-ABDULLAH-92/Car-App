import React, { useState, useEffect } from 'react';
import { car } from '../assets/car';

const Hero = () => {
  const [temp, setTemp] = useState(0);
  const [km, setKm] = useState(0);
  const [power, setPower] = useState(0);

  useEffect(() => {
    let tempIntervalId, kmIntervalId, powerIntervalId;

    if (temp < 24) {
      tempIntervalId = setInterval(() => {
        setTemp(prev => Math.min(prev + 1, 24));
      }, 10); // Set interval to a reasonable value
    }

    if (km < 873) {
      kmIntervalId = setInterval(() => {
        setKm(prev => Math.min(prev + 1, 873));
      }, 1); // Set interval to a reasonable value
    }

    if (power < 94) {
      powerIntervalId = setInterval(() => {
        setPower(prev => Math.min(prev + 1, 94));
      }, 10); // Set interval to a reasonable value
    }

    return () => {
      clearInterval(tempIntervalId);
      clearInterval(kmIntervalId);
      clearInterval(powerIntervalId);
    };
  }, [temp, km, power]);

  const handleStart = () => {
    setTemp(0); // Reset temp to 0 (it will be incremented by the useEffect)
    setKm(0); // Reset km to 0 (it will be incremented by the useEffect)
    setPower(0); // Reset power to 0 (it will be incremented by the useEffect)
  };

  return (
    <div className='text-white'>
      <div className='flex flex-col justify-center items-center gap-2 py-12'>
        <h1 className='text-4xl pb-4 bestCar' >Choose The Best Car</h1>
        <h2 className='text-3xl carName'>Porsche Mission E</h2>
        <img src={car.mini_logo} className='mb-9' alt="Porsche Logo" />
        <img src={car.homeCarImage} alt="Porsche Mission E Car" className='mb-6' />
        <div className='flex justify-center gap-10 sm:gap-28 items-start'>
          <div className='flex flex-col gap-2 justify-center items-center'>
            <img src={car.temp} alt="Temperature Icon" className='w-10' />
            <h1 className='text-3xl logoN'>{temp} &deg;</h1>
            <h3 className='text-[#888B91]'>Temperature</h3>
          </div>
          <div className='flex flex-col gap-2 justify-center items-center'>
            <img src={car.km} alt="Mileage Icon" className='w-10' />
            <h1 className='text-3xl logoN'>{km}</h1>
            <h3 className='text-[#888B91]'>MILEAGE</h3>
          </div>
          <div className='flex flex-col gap-2 justify-center items-center'>
            <img src={car.power} alt="Battery Icon" className='w-10' />
            <h1 className='text-3xl logoN'>{power}%</h1>
            <h3 className='text-[#888B91]'>Battery</h3>
          </div>
        </div>
        <img 
          src={car.startBtn} 
          onClick={handleStart} 
          className='mt-3 cursor-pointer' 
          alt="Start Button" 
        />
      </div>
      <a href="http://localhost:5173/add">
              Create the Post 
</a>
    </div>
  );
};

export default Hero;
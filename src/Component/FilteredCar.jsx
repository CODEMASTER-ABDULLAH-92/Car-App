import React, { useContext} from 'react';
import { car, smallIcons } from '../assets/car';
import Car from './Car';
import { Context } from '../Context';

const FilteredCar = () => {
  const {company1, setCompany} = useContext(Context)

  return (
    <div className='text-white py-16' id='popular'>
      <h1 className='text-center text-2xl pb-10'>Featured Luxury Cars</h1>
      <div className='flex justify-center items-center gap-10'>
{
  smallIcons.map((items,index)=>{
    return (
      <div key={index}

          onClick={() => setCompany(prev => prev === items.company ? "All" : items.company)}
          className={`h-[51px] rounded-xl w-[51px] text-xl flex justify-center items-center cursor-pointer`}
        >
          {/* <p>All</p> */}
          <img src={items.carImage} alt="" />

      </div>
    )
  })
}
      </div>
      <div className='flex justify-center items-center'>
      <Car/>
      </div>
    </div>
  );
};

export default FilteredCar;
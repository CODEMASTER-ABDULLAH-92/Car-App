import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../Context';

const CarDetail = () => {
    const { id } = useParams();
    const { proshi } = useContext(Context);
    const [data, setData] = useState({}); // 🔹 Start with an empty object
    const fetchData = () => {
        if (proshi.length > 0) { // 🔹 Only run if proshi is not empty
            const car = proshi.find((item) => item._id === id);
            if (car) setData(car);
        }
    };
    useEffect(() => {
        fetchData();
    }, [id, proshi]); // 🔹 Run when `id` or `proshi` changes

    if (!data._id) {
        return <p className="text-center text-white">Loading...</p>; // 🔹 Prevents UI from breaking if data is empty
    }
    return (
        <div className="text-white px-[2vw] sm:px-[5vw] md:px-[7vw] lg:px-[9vw] flex flex-col lg:flex-row justify-center items-start gap-8 mt-10">
            {/* Car Image */}
            <div className="h-[400px] w-full lg:w-[40%] bg-gray-800 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
                <img 
                    src={data.CarImage?.[0]} 
                    className="object-cover w-full h-full" 
                    alt={data.modelName} 
                />
            </div>

            {/* Car Details */}
            <div className="w-full lg:w-[60%] space-y-4 bg-gray-900 p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold">{data.company}</h1>
                <h2 className="text-2xl font-semibold text-gray-300">{data.modelName}</h2>
                <p className="text-gray-400">{data.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <p><span className="font-bold">Price:</span> {data.price}</p>
                    <p><span className="font-bold">Power:</span> {data.power}</p>
                    <p><span className="font-bold">Top Speed:</span> {data.speed}</p>
                    <p><span className="font-bold">Seats:</span> {data.seats}</p>
                    <p><span className="font-bold">Warranty:</span> {data.warranty}</p>
                    <p><span className="font-bold">Torque:</span> {data.torque}</p>
                    <p><span className="font-bold">Battery Capacity:</span> {data.batteryCapacity}</p>
                    <p><span className="font-bold">Weight:</span> {data.weight}</p>
                    <p><span className="font-bold">Transmission:</span> {data.transmission}</p>
                    <p><span className="font-bold">Range:</span> {data.range}</p>
                </div>
                <div className="mt-4">
                    <p className="font-bold text-yellow-400">Rating: {data.rating} ⭐</p>
                </div>
            </div>
        </div>
    );
};

export default CarDetail;

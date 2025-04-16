import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../Context';

const List = () => {
  const { proshi, DeleteCar } = useContext(Context);
  const navigate = useNavigate();
  const handleUpdate = (id) =>{
navigate(`/update/${id}`)
  }
  return (
    <div className='flex flex-col lg:flex-row bg-gray-700 shadow-md rounded-lg min-h-screen'>
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-gray-400 py-6">
        <div className="flex flex-col space-y-4 lg:h-dvh text-center">
          <Link to="/car/add" className="text-xl font-medium py-4 text-gray-950 hover:bg-red-300">
            Add
          </Link>
          <Link to="/car/list" className="text-xl font-medium py-4 text-gray-950 hover:bg-red-300">
            Listing All Cars
          </Link>
          <Link to="/car/order" className="text-xl font-medium py-4 text-gray-950 hover:bg-red-300">
            Orders
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-3/4 p-4">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-700 text-gray-300">
            <thead>
              <tr className="bg-gray-800">
                <th className="border border-gray-600 px-4 py-2">Serial Number</th>
                <th className="border border-gray-600 px-4 py-2">Car Image</th>
                <th className="border border-gray-600 px-4 py-2">Name</th>
                <th className="border border-gray-600 px-4 py-2">Model</th>
                <th className="border border-gray-600 px-4 py-2">Price</th>
                <th className="border border-gray-600 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {proshi.map((car, index) => (
                <tr key={car.id} className="bg-gray-900 hover:bg-gray-700">
                  <td className="border border-gray-600 px-4 py-2 text-center">{index + 1}</td>
                  <td className="border border-gray-600 px-4 py-2 text-center">
                    <img src={car.CarImage[0]} alt={car.name} className="w-16 h-16 object-cover rounded" />
                  </td>
                  <td className="border border-gray-600 px-4 py-2 text-center">{car.company}</td>
                  <td className="border border-gray-600 px-4 py-2 text-center">{car.modelName}</td>
                  <td className="border border-gray-600 px-4 py-2 text-center">${car.price}</td>
                  <td className="border border-gray-600 px-4 py-2 text-center">
                    <button onClick={()=>handleUpdate(car._id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded mx-1"
                    >
                      Update
                    </button>
                    <button 
                    onClick={()=>DeleteCar(car._id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded mx-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default List;
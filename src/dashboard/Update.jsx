import React, { useContext, useState } from 'react';
import axios from 'axios'; // Import axios
import { Context } from '../Context';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const Update = ({ carId }) => { // Pass `carId` as a prop or fetch it from the route
  const [loading, setLoading] = useState(false);
  const {url} = useContext(Context);
  const { id } = useParams();
  const [formData, setFormData] = useState({
    _id:"", // Use the passed `carId`
    company: "",
    modelName: "",
    carImage: [], // Use an empty array for multiple files
    price: "",
    power: "",
    time: "",
    speed: "",
    description: "",
    seats: "",
    transmission: "",
    range: "",
    rating: "",
    weight: "",
    batteryCapacity: "",
    torque: "",
    warranty: "",
  });

useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await axios.get(`${url}/api/car/updateCar/${id}`);
        setFormData(response.data.car); // Assuming API response has `car` object
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    };

    if (id) fetchCarData();
  }, [id, url]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      carImage: e.target.files, // Store the file list
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      if (formData.carImage) {
        for (let i = 0; i < formData.carImage.length; i++) {
          data.append("carImage", formData.carImage[i]);
        }
      }
      data.append("company", formData.company);
      data.append("modelName", formData.modelName);
      data.append("price", formData.price);
      data.append("power", formData.power);
      data.append("time", formData.time);
      data.append("speed", formData.speed);
      data.append("description", formData.description);
      data.append("seats", formData.seats);
      data.append("transmission", formData.transmission);
      data.append("range", formData.range);
      data.append("rating", formData.rating);
      data.append("weight", formData.weight);
      data.append("batteryCapacity", formData.batteryCapacity);
      data.append("torque", formData.torque);
      data.append("warranty", formData.warranty);


       await axios.put(`${url}/api/car/updateCar/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Car updated successfully!");

      // Reset form
      setFormData({
        _id: carId,
        company: "",
        modelName: "",
        carImage: [],
        price: "",
        power: "",
        time: "",
        speed: "",
        description: "",
        seats: "",
        transmission: "",
        range: "",
        rating: "",
        weight: "",
        batteryCapacity: "",
        torque: "",
        warranty: "",
      });

      // Clear file input
      e.target.reset();

      console.log("Car updated successfully");
      alert("Car updated successfully!");
    } catch (error) {
      console.error("Error updating car:", error);
      alert("Failed to update car. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex-1 p-6">
        <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-white text-2xl font-bold text-center mb-4">Update Car Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="company" value={formData.company} type="text" onChange={handleChange} placeholder="Company" className="input px-2 py-2 text-lg text-white bg-gray-700 rounded" />
            <input name="modelName" value={formData.modelName} type="text" onChange={handleChange} placeholder="Model Name" className="input px-2 py-2 text-lg text-white bg-gray-700 rounded" />
            <input name="carImage" type="file" onChange={handleFileChange} multiple className="input px-2 py-2 text-lg text-white bg-gray-700 rounded" />
            <input name="price" value={formData.price} type="text" onChange={handleChange} placeholder="Price" className="input px-2 py-2 text-lg text-white bg-gray-700 rounded" />
            <input name="power" value={formData.power} type="text" onChange={handleChange} placeholder="Power" className="input px-2 py-2 text-lg text-white bg-gray-700 rounded" />
            <input name="time" value={formData.time} type="text" onChange={handleChange} placeholder="0-100 km/h Time" className="input px-2 py-2 text-lg text-white bg-gray-700 rounded" />
            <input name="speed" value={formData.speed} type="text" onChange={handleChange} placeholder="Top Speed" className="input px-2 py-2 text-lg text-white bg-gray-700 rounded" />
            <input name="seats" value={formData.seats} type="number" onChange={handleChange} placeholder="Seats" className="input px-2 py-2 text-lg text-white bg-gray-700 rounded" />
            <input name="transmission" value={formData.transmission} type="text" onChange={handleChange} placeholder="Transmission" className="input px-2 py-2 text-lg text-white bg-gray-700 rounded" />
            <input name="range" value={formData.range} type="text" onChange={handleChange} placeholder="Range" className="input px-2 py-2 text-lg text-white bg-gray-700 rounded" />
            <input name="rating" value={formData.rating} type="number" onChange={handleChange} step="0.1" placeholder="Rating" className="input px-2 py-2 text-lg text-white bg-gray-700 rounded" />
            <input name="weight" value={formData.weight} type="text" onChange={handleChange} placeholder="Weight" className="input px-2 py-2 text-lg text-white bg-gray-700 rounded" />
            <input name="batteryCapacity" value={formData.batteryCapacity} type="text" onChange={handleChange} placeholder="Battery Capacity" className="input px-2 py-2 text-lg text-white bg-gray-700 rounded" />
            <input name="torque" value={formData.torque} type="text" onChange={handleChange} placeholder="Torque" className="input px-2 py-2 text-lg text-white bg-gray-700 rounded" />
            <input name="warranty" value={formData.warranty} type="text" onChange={handleChange} placeholder="Warranty" className="input px-2 py-2 text-lg text-white bg-gray-700 rounded" />
          </div>

          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="input px-2 py-2 text-lg w-full min-h-28 text-white bg-gray-700 rounded mt-4"></textarea>
          <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition">
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
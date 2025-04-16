import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Context } from "../Context";

const Add = () => {
  const { url } = useContext(Context);

  const [formData, setFormData] = useState({
    _id: "",
    company: "",
    modelName: "",
    carImage: null, // Fix: Should be null for file inputs
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

  const [loading, setLoading] = useState(false);

  // Handle text input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input separately
  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      carImage: e.target.files, // Fix: Use `files` instead of `value`
    }));
  };

  // Handle form submission
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
      data.append("power", formData.power); // Fix: Was assigning price instead of power
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

      await axios.post(`${url}/api/car/addCar`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Reset form
      setFormData({
        _id: "",
        company: "",
        modelName: "",
        carImage: null,
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

      console.log("Car added successfully");
    } catch (error) {
      console.error("Error uploading car:", error);
      alert("Failed to add car. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-700 shadow-md rounded-lg min-h-screen">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-gray-400 py-6">
        <div className="flex flex-col space-y-4 text-center">
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

      {/* Form */}
      <div className="flex-1 p-6">
        <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-white text-2xl font-bold text-center mb-4">Add a New Car</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="company" value={formData.company} type="text" onChange={handleChange} placeholder="Company" className="input px-2 py-2 text-lg text-black" />
            <input name="modelName" value={formData.modelName} type="text" onChange={handleChange} placeholder="Model Name" className="input px-2 py-2 text-lg text-black" />
            <input name="carImage" type="file" onChange={handleFileChange} multiple className="input px-2 py-2 text-lg text-black" />
            <input name="price" value={formData.price} type="text" onChange={handleChange} placeholder="Price" className="input px-2 py-2 text-lg text-black" />
            <input name="power" value={formData.power} type="text" onChange={handleChange} placeholder="Power" className="input px-2 py-2 text-lg text-black" />
            <input name="time" value={formData.time} type="text" onChange={handleChange} placeholder="0-100 km/h Time" className="input px-2 py-2 text-lg text-black" />
            <input name="speed" value={formData.speed} type="text" onChange={handleChange} placeholder="Top Speed" className="input px-2 py-2 text-lg text-black" />
            <input name="seats" value={formData.seats} type="number" onChange={handleChange} placeholder="Seats" className="input px-2 py-2 text-lg text-black" />
            <input name="transmission" value={formData.transmission} type="text" onChange={handleChange} placeholder="Transmission" className="input px-2 py-2 text-lg text-black" />
            <input name="range" value={formData.range} type="text" onChange={handleChange} placeholder="Range" className="input px-2 py-2 text-lg text-black" />
            <input name="rating" value={formData.rating} type="number" onChange={handleChange} step="0.1" placeholder="Rating" className="input px-2 py-2 text-lg text-black" />
            <input name="weight" value={formData.weight} type="text" onChange={handleChange} placeholder="Weight" className="input px-2 py-2 text-lg text-black" />
            <input name="batteryCapacity" value={formData.batteryCapacity} type="text" onChange={handleChange} placeholder="Battery Capacity" className="input px-2 py-2 text-lg text-black" />
            <input name="torque" value={formData.torque} type="text" onChange={handleChange} placeholder="Torque" className="input px-2 py-2 text-lg text-black" />
            <input name="warranty" value={formData.warranty} type="text" onChange={handleChange} placeholder="Warranty" className="input px-2 py-2 text-lg text-black" />
          </div>

          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="input px-2 py-2 text-lg w-full min-h-28 text-black mt-4"></textarea>

          <button type="submit" className="w-full bg-blue-600 text-black p-3 rounded-md hover:bg-blue-700 transition">
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;

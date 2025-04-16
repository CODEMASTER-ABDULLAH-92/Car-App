import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../Context';

const SignUp = () => {
  const { url } = useContext(Context);
  const navigate = useNavigate(); // ✅ Enable navigation
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(""); // ✅ Define error state

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${url}/api/user/register`,
        { name, email, password },
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );

      setEmail("");
      setName("");
      setPassword("");
      setError(""); // Clear any previous errors

      alert("Registered Successfully!");
      navigate("/posts"); // ✅ Redirect to posts page after sign-up
    } catch (error) {
      setError("Registration failed. Please try again.");
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-white text-2xl font-bold text-center mb-6">Sign Up</h2>
        
        {error && <p className="text-red-400 text-center">{error}</p>} {/* ✅ Display error message */}

        <form className="space-y-4" onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 text-lg text-white bg-gray-700 rounded outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 text-lg text-white bg-gray-700 rounded outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 text-lg text-white bg-gray-700 rounded outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="flex items-center text-white">
            <input type="checkbox" className="mr-2 w-4 h-4" />
            <span>Remember Me</span>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-400 mt-4">
          Already have an account? <a href="/signIn" className="text-blue-400 hover:underline">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

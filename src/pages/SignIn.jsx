import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Context } from '../Context';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const { url } = useContext(Context);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(""); // ✅ Add error state

  const handleLogin = async (e) => {
    e.preventDefault(); // ✅ Prevent form refresh

    try {
      const response = await axios.post(
        `${url}/api/user/login`,
        { email, password },
        { headers: { "Content-Type": "application/json" }, withCredentials: true }
      );
      setEmail("");
      setPassword("");
      setError(""); // ✅ Clear previous errors
      alert("Logged in successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error in Login:", error);
      setError("Login failed. Please check your credentials."); // ✅ Display user-friendly error
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-white text-2xl font-bold text-center mb-6">Sign In</h2>

        {error && <p className="text-red-400 text-center">{error}</p>} {/* ✅ Show error message */}

        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-3 py-2 text-lg text-white bg-gray-700 rounded outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
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
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-400 mt-4">
          Don't have an account? <a href="/signUp" className="text-blue-400 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

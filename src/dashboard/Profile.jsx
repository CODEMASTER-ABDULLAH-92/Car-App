import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Context } from "../Context";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { url } = useContext(Context);
  const [hover, setHover] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Fetch user data on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.post(`${url}/api/user/fetchUser`, {}, { withCredentials: true });
        setUser(response.data.user);
      } catch (error) {
        console.error("User fetch error:", error);
        setUser(null);
      }
    };

    fetchUser();
  }, [url]);

  const Logout = async () => {
    try {
      await axios.post(`${url}/api/user/logout`, {}, { withCredentials: true });
      navigate("/");
    } catch (error) {
      console.error("Error in Logout:", error);
    }
  };

  return (
    <div className="text-white flex flex-col justify-center items-center gap-4 py-12">
      <h1 className="text-4xl pb-4 bestCar">User Profile</h1>

      <div className="flex flex-col gap-6 sm:gap-8 justify-center items-center">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="text-3xl logoN">{user && user.name ? user.name.toUpperCase() : "P"}</h1>
          <h3 className="text-[#888B91]">Username</h3>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="text-3xl logoN">{user && user.email ? user.email : "No Email"}</h1>
          <h3 className="text-[#888B91]">Email</h3>
        </div>
      </div>
      <div className="flex justify-center gap-10 sm:gap-28 items-start mt-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition" onMouseOver={() => setHover("Edit")}>
          Edit Profile
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition" onMouseOver={() => setHover("Change Password")}>
          Change Password
        </button>
        <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition" onMouseOver={() => setHover("Logout")} onClick={Logout}>
          Logout
        </button>
      </div>

      {hover && <p className="mt-4 text-blue-500">Hovering over: {hover}</p>}
    </div>
  );
};

export default Profile;

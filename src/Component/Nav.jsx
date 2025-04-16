import React, { useState, useEffect, useContext } from 'react';
import { car } from '../assets/car';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../Context';

const Nav = () => {
  const [hover, setHover] = useState("Home");
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState(null);
  const {url} = useContext(Context);
  // Fetch user data on mount (if token is stored)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.post(`${url}/api/user/fetchUser`,
          {},
          { withCredentials: true }
        );
        setUser(response.data.user)
      } catch (error) {
        console.error("User fetch error:", error);
        setUser(null); // Ensure user is null if request fails
      }
    };
    
    fetchUser();
  }, []);
  

  return (
    <div className="relative">
      <div className="px-[2vw] sm:px-[5vw] md:px-[7vw] lg:px-[9vw] flex justify-between items-center py-6">
        <Link to="/">
          <img src={car.webLogo} alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex justify-center items-center gap-4 text-white">
          {["Home", "About", "Popular", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onMouseOver={() => setHover(item)}
              className={`${hover === item ? "text-blue-600" : ""}`}
            >
              {item}
            </a>
          ))}

          {/* Profile / Sign In Button */}
          <Link
            to={user ? "/profile" : "/signIn"}
            onMouseOver={() => setHover("signIN")}
            className={`${hover === "signIN" ? "text-blue-600" : ""} flex items-center gap-2`}
          >
            {user ? (
              <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full font-semibold">
                {user.name ? user.name[0].toUpperCase() : "P"}
              </div>
            ) : (
              "Sign In"
            )}
          </Link>
        </ul>

        {/* Mobile Menu Button */}
        <img
          src={!visible ? car.burger : car.CrossIcon}
          className="sm:hidden block cursor-pointer"
          onClick={() => setVisible(!visible)}
          alt="Menu Toggle"
        />
      </div>

      {/* Mobile Sidebar */}
      <ul className={`${!visible ? "hidden" : "block"} flex flex-col min-h-screen justify-start items-center mt-6 gap-4 text-white`}>
        {["Home", "About", "Popular", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onMouseOver={() => setHover(item)}
            onClick={() => setVisible(false)}
            className={`${hover === item ? "text-blue-600" : ""} text-[23px]`}
          >
            {item}
          </a>
        ))}

        {/* Profile / Sign In Button in Mobile Menu */}
        <Link
          to={user ? "/profile" : "/signIn"}
          onClick={() => setVisible(false)}
          className={`${hover === "signIN" ? "text-blue-600" : ""} text-[23px] flex items-center gap-2`}
        >
          {user ? (
            <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full font-semibold">
              {user.name ? user.name[0].toUpperCase() : ""}

            </div>
          ) : (
            "Sign In"
          )}
        </Link>
      </ul>
    </div>
  );
};

export default Nav;

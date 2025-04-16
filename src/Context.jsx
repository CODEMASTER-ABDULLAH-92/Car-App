
import { createContext, useEffect, useState } from "react";
import { feacturedCar } from "./assets/car";
import axios from "axios";

export const Context = createContext();

const ContextProvider = (props) => {
    const url = "https://car-new-back.vercel.app"; // Move url here

    const [company1, setCompany] = useState("All");
    const [proshi, setProchi] = useState([]);
    const [token,setToken] = useState(null);
    const fetchData = async () => {
        try {
            const response = await axios.get(`${url}/api/car/listCar`);


            // Ensure response structure matches expectation
            setProchi(response.data.car || []); 
        } catch (error) {
            console.error("Error fetching cars:", error);
        }
    };

    //Delete The Car

    const DeleteCar = async (id) => {
        try {
            const delet = await axios.delete(`${url}/api/car/removeCar/${id}`)
        } catch (error) {
            console.error("Err in Deleting Car",error);
            
        }
    }
    const UpdateCar = async (id) => {
        try {
            await axios.put(`${url}/api/car/addCar/updateCar/${id}`,{
                headers: { "Content-Type": "multipart/form-data" },
              });

        } catch (error) {
            console.error("Err in Updating: ", error);
            
        }
    }






    const singleUser = async (url) => {
      try {
        const response = await axios.post(
          `${url}/api/user/user`,
          {},
          { withCredentials: true } // Ensures cookies (like accessToken) are sent
        );
        return response.data; // Return the user data
      } catch (error) {
        console.error("Error fetching user data:", error);
        return null; // Return null if an error occurs
      }
    };


    useEffect(() => {
        fetchData();
    }, []);

    const value = {
        feacturedCar,
        company1,
        setCompany,
        proshi,
        url,
        DeleteCar,
        UpdateCar,
        singleUser
    };

    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;

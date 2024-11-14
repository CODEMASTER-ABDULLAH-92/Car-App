import { createContext,useState } from "react";
import { feacturedCar, proshi } from "./assets/car";

export const Context = createContext();

const ContextProvider = (props)=>{
  const [company1, setCompany] = useState("All");
    const value ={
        feacturedCar,
        company1,setCompany,
        proshi
    }
    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;


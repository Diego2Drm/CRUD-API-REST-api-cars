import { createContext, useState } from "react";

const MethodContext = createContext();

const MethodContextProvider = ({ children }) => {

  const [dataCars, setDataCars] = useState([]);
  const getAllCars = () => {
    fetch('https://api-rest-cars-zwl7.onrender.com/cars')
      .then(res => res.json())
      .then(data => setDataCars(data))
      .catch(err => console.warn(err))
  }

  console.log(dataCars);

  const value = {
    dataCars,
    getAllCars
  }

  return (
    <MethodContext.Provider value={value}>
      {children}
    </MethodContext.Provider>
  )
}

export { MethodContext, MethodContextProvider };
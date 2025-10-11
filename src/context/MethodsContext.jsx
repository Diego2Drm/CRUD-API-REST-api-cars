import { createContext, useState } from "react";

const MethodContext = createContext();

const MethodContextProvider = ({ children }) => {
 const initialFormData = {
    image: '',
    brand: '',
    model: '',
    price: '',
    rating: '',
  };

  const [dataCars, setDataCars] = useState([]);
  const getAllCars = () => {
    fetch('https://api-rest-cars-zwl7.onrender.com/cars')
      .then(res => res.json())
      .then(data => setDataCars(data))
      .catch(err => console.warn(err))
  }
  const [newCar, setNewCar] = useState(initialFormData);
  const [edit, setEdit] = useState(false);
  const [currentID, setCurrentID] = useState('');

  const editCar = (val) => {
    setEdit(true);
    setCurrentID(val.id)
    setNewCar({
      image: val.image,
      brand: val.brand,
      model: val.model,
      price: val.price,
      rating: val.rating,
    })
  }

  const cleanForm = () => {
    setNewCar(initialFormData); console.log('CLEAN');
  }
  const value = {
    dataCars,
    getAllCars,
    newCar,
    setNewCar,
    editCar,
    cleanForm,
    edit,
    setEdit,
    currentID,initialFormData
  }

  return (
    <MethodContext.Provider value={value}>
      {children}
    </MethodContext.Provider>
  )
}

export { MethodContext, MethodContextProvider };
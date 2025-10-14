import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

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
    setNewCar(initialFormData);
    setEdit(false)
  }

  // DELETE
  const handleDelete = (id) => {
    fetch(`https://api-rest-cars-zwl7.onrender.com/cars/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        Swal.fire({
          title: "Deleted with success",
          icon: "success",
          draggable: true
        });
        getAllCars()

      })
      .catch(err => console.log("ERROR NOT ELIMINATED", err))
  }
  // Search by brand
  const [search, setSearch] = useState('');
  const [searchCars, setSearchCars] = useState([]);
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const searchByBrand = () => {
    fetch(`https://api-rest-cars-zwl7.onrender.com/cars?brand=${search}`)
      .then(res => res.json())
      .then(data => setSearchCars(data))
      .catch(err => console.log(err))
  }

  const cleanFIltered = () => {
    setSearch('');
    setSearchCars([]);
  }

  const value = {
    dataCars,
    getAllCars,
    newCar,
    setNewCar,
    editCar,
    edit,
    setEdit,
    currentID,
    cleanForm,
    handleDelete,
    initialFormData,
    search,
    handleSearch,
    searchCars,
    searchByBrand,
    cleanFIltered,
  }

  return (
    <MethodContext.Provider value={value}>
      {children}
    </MethodContext.Provider>
  )
}

export { MethodContext, MethodContextProvider };
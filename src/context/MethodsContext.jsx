import { createContext, useState } from "react";
import Swal from "sweetalert2";
import { validateCar, validatePartialCar } from "../schemas/carSchemas";

const MethodContext = createContext();

const MethodContextProvider = ({ children }) => {
  const initialFormData = {
    image: '',
    brand: '',
    model: '',
    price: '',
    rating: '',
  };

  // GET ALL CARS AND BY BRAND
  const [dataCars, setDataCars] = useState([]);
  const getAllCars = () => {
    fetch('https://api-rest-cars-zwl7.onrender.com/cars')
      .then(res => res.json())
      .then(data => setDataCars(data))
      .catch(err => console.warn(err))
  }

  const [newCar, setNewCar] = useState(initialFormData);

  // ADD NEW CAR
  const [errors, setErrors] = useState([]);
  const handlePostCar = () => {
    const result = validateCar(newCar)
    if (!result.success) {
      const formattedErrors = result.error.format();
      setErrors(formattedErrors);
      console.log('Error validation', formattedErrors);
      return;
    }

    fetch('https://api-rest-cars-zwl7.onrender.com/cars', {
      method: "POST",
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(result.data)
    })
      .then(res => res.json())
      .then(() => {
        getAllCars()
        setNewCar(initialFormData);
        Swal.fire({
          title: "Good job!",
          text: "Added with success",
          icon: "success"
        });
        setErrors([]);
      }).catch(err => console.error(err)
      )
  }

// EDIT CAR
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
  const updateCar = (id) => {
    const result = validatePartialCar(newCar)
    if (!result.success) {
      const formattedErrors = result.error.format();
      setErrors(formattedErrors);
      console.log('Error validation', formattedErrors);
      return;
    }

    fetch(`https://api-rest-cars-zwl7.onrender.com/cars/${id}`, {
      method: "PATCH",
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(result.data)
    })
      .then(res => res.json())
      .then(() => {
        getAllCars()
        setNewCar(initialFormData);
        setEdit(false)
        Swal.fire({
          title: "Good job!",
          text: "Updated with success",
          icon: "success"
        });
        setErrors([]);
      })
      .catch(err => console.error(err)
      )
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

  // CLEAN FUNCTIONS
  const cleanForm = () => {
    setNewCar(initialFormData);
    setEdit(false)
    setErrors([])

  }
  const cleanFIltered = () => {
    setSearch('');
    setSearchCars([]);
  }

  // VALUES
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
    handlePostCar,
    updateCar,
    errors,
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
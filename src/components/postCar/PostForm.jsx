import React, { useContext, useState } from 'react'
import { validateCar } from '../../schemas/carSchemas';
import { MethodContext } from '../../context/MethodsContext';

function PostForm() {
  const { getAllCars } = useContext(MethodContext);

  const initialFormData = {
    image: '',
    brand: '',
    model: '',
    price: '',
    rating: '',
  };

  const [newcar, setNewcar] = useState(initialFormData);
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);


  const handlePostCar = () => {
    const result = validateCar(newcar)

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
        setNewcar(initialFormData);
        setSuccess(true)
        setTimeout(() => {
          setSuccess(false)
        }, 2000)
      }).catch(err => console.error(err)
      )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePostCar()
  }

  return (
    <form onSubmit={handleSubmit} className='d-flex flex-column align-items-center my-5'>
      <label className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          <i className="bi bi-card-image"></i>
        </span>
        <input type="text" className="form-control" placeholder="Image by url" aria-label="Image by url" aria-describedby="basic-addon1"
          onChange={(e) => setNewcar(prev => ({
            ...prev,
            image: e.target.value
          }))}
          value={newcar.image}
        />
      </label>
      {errors.image && <span>{errors.image._errors[0]}</span>}


      <label className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          <i className="bi bi-car-front"></i>
        </span>
        <input type="text" className="form-control" placeholder="Brand" aria-label="Brand" aria-describedby="basic-addon1"
          onChange={(e) => setNewcar(prev => ({
            ...prev,
            brand: e.target.value
          }))}
          value={newcar.brand}
        />
      </label>
      {errors.brand && <span>{errors.brand._errors[0]}</span>}

      <label className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          <i className="bi bi-car-front-fill"></i>
        </span>
        <input type="text" className="form-control" placeholder="Model" aria-label="Model" aria-describedby="basic-addon1"
          onChange={(e) => setNewcar(prev => ({
            ...prev,
            model: e.target.value
          }))}
          value={newcar.model}
        />
      </label>
      {errors.model && <span>{errors.model._errors[0]}</span>}

      <label className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          <i className="bi bi-currency-dollar"></i>
        </span>
        <input type="number" className="form-control" placeholder="Price" aria-label="Price" aria-describedby="basic-addon1"
          onChange={(e) => setNewcar(prev => ({
            ...prev,
            price: Number(e.target.value)
          }))}
          value={newcar.price}
        />
      </label>
      {errors.price && <span>{errors.price._errors[0]}</span>}

      <label className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          <i className="bi bi-star-fill"></i>
        </span>
        <input type="number" className="form-control" placeholder="Rating" aria-label="Rating" aria-describedby="basic-addon1"
          onChange={(e) => setNewcar(prev => ({
            ...prev,
            rating: Number(e.target.value)
          }))}
          value={newcar.rating}
        />
      </label>
      {errors.rating && <span>{errors.rating._errors[0]}</span>}

      <div className="modal-footer">
        <button type="submit" className="btn btn-success">Confirm</button>
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
      </div>

      {success && <p className='text-primary fst-italic'>Added with success!🎉🎉</p>}
    </form>
  )
}

export { PostForm }

// {
// "id": "3908aa3b-4b38-4bff-b483-44560713d3e3",
// "model": "Explorer 2025",
// "brand": "Ford",
// "image": "https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/nameplate/explorer/2025/colorizer/rojo-cereza/ford-explorer-2025-suv-comoda-lujo-3-filas-nueva-color-rojo-cereza.jpg.dam.full.high.jpg/1725887820755.jpg",
// "price": 30000,
// "rating": 4
// },
// {
// "id": "4f03c690-9360-4734-af53-dcfc74ef204e",
// "model": "Mustang 2025",
// "brand": "Ford",
// "image": "https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/nameplate/mustang/2025/overview/colorizer/rojo-racing/ford-mustang-2025-auto-deportivo-sport-muscle-car-color-rojo-racing.jpg.dam.full.high.jpg/1745245734111.jpg",
// "price": 20000,
// "rating": 4
// },
// {
// "id": "da5efdf3-fae0-429f-a682-7fd120677fe4",
// "model": "EcoBoost Premium",
// "brand": "Ford",
// "image": "https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/nameplate/mustang/2025/models/ford-mustang-2025-auto-deportivo-version-motor-ecoboost-premium.png",
// "price": 25000,
// "rating": 4
// }

// {
// "id": "7b90aae0-b6af-433c-ad8a-b1ddc3c128af",
// "model": "Corvette Z06",
// "brand": "Chevrolet",
// "image": "https://www.chevrolet.com.mx/content/dam/chevrolet/na/mx/es/index/performance/2025-corvette-z06/colorizer/01-images/exterior/rip-tide-met.jpg",
// "price": 50000,
// "rating": 5
// }
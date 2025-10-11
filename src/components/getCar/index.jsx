import React, { useContext, useEffect, useState } from 'react'
import { Loading } from './Loading';
import { MethodContext } from '../../context/MethodsContext';

function GetAllCars() {
  const { dataCars, getAllCars, editCar } = useContext(MethodContext);
  const [loading, setLoading] = useState(true);


  const handleDelete = (id) => {
    fetch(`https://api-rest-cars-zwl7.onrender.com/cars/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        alert('DELETED')
        getAllCars()
      })
      .catch(err => console.log("ERROR NOT ELIMINATED", err))
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      getAllCars()
    }, 2000)

  }, [])

  return (
    <section className='mt-5'>
      <h3 className='mb-5'>Get All Cars</h3>

      {
        loading ? <Loading /> :

          <div className='d-flex flex-wrap gap-3'>
            {
              dataCars.map(car =>
                <div className="card bg-transparent rounded text-white border-1 border-white" style={{ width: "15rem" }} key={car.id}>
                  <img src={car.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Brand: {car.brand}</h5>
                    <p className="card-text">
                      Model: {car.model}
                    </p>
                    <p>$ {car.price}</p>
                    <p>Rating: {car.rating} {'⭐'.repeat(car.rating)}</p>
                  </div>

                  <div className='d-flex gap-5 justify-content-center mb-3'>
                    <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => editCar(car)}>Edit</button>
                    <button className='btn btn-danger'
                      onClick={() => handleDelete(car.id)}
                    >
                      Delete
                    </button>
                  </div>

                </div>
              )
            }
          </div>
      }
    </section>
  )
}

export { GetAllCars } 
import React, { useContext } from 'react'
import { MethodContext } from '../../context/MethodsContext';

function Cards({ data }) {
  const { editCar, handleDelete } = useContext(MethodContext);
  return (
    <div className='d-flex flex-wrap gap-3 justify-content-center'>
      {
        data.map(car =>
          <div className="card bg-transparent rounded text-white border-1 border-white" style={{ width: "15rem" }} key={car.id}>
            <img src={car.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{car.brand}</h5>
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
  )
}

export { Cards };
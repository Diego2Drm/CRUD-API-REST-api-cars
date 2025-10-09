import React, { useEffect, useState } from 'react'
import { Loading } from './components/Loading';

function GetAllCars() {
  const [loading, setLoading] = useState(true)
  const [dataCars, setDataCars] = useState([]);

  const getAllCars = () => {
    fetch('https://api-rest-cars-zwl7.onrender.com/cars')
      .then(res => res.json())
      .then(data => setDataCars(data))
      .catch(err => console.warn(err))
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
                </div>
              )
            }
          </div>
      }
    </section>
  )
}

export { GetAllCars } 
import React, { useContext, useEffect, useState } from 'react'
import { Loading } from './Loading';
import { MethodContext } from '../../context/MethodsContext';
import { Cards } from './Cards';

function GetAllCars() {
  const { dataCars, getAllCars, search, searchCars, cleanFIltered } = useContext(MethodContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      getAllCars()
    }, 2000)

  }, [])
  const hasResults = searchCars.length > 0;
  return (
    <section className='mt-5'>
      <div className='d-flex justify-content-between align-items-center mb-5'>
        {
          hasResults ?
            <h3 className='text-secondary'>Brand:
              <span className='text-capitalize text-primary m-2'>
                {search}
              </span>
            </h3> :
            <h3 className=''>Get All Cars</h3>
        }
        {
          hasResults && <button className='btn btn-secondary' onClick={cleanFIltered}>Get All Cars</button>
        }
      </div>

      {
        loading && <Loading />
      }

      {
        searchCars.length > 0 ?

          <Cards data={searchCars} />
          :

          <Cards data={dataCars} />

      }

    </section>
  )
}

export { GetAllCars } 
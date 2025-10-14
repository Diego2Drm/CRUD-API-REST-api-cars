import React, { useContext } from 'react'
import { MethodContext } from '../../context/MethodsContext'

function Search() {
  const { search, handleSearch, searchByBrand } = useContext(MethodContext);

  return (
    <div className='d-flex flex-column my-5'>
      <p>Search by Brand</p>
      <label htmlFor="search" className='input-group'>
        <span className='input-group-text'>
          <i className="bi bi-car-front-fill"></i>
        </span>
        <input type="search" name="search" id="search" placeholder='ford'
          className='form-control'
          onChange={handleSearch}
          value={search}
        />

        <button className={search.length == 0 ? `pe-none btn btn-secondary` : 'btn btn-info'} onClick={searchByBrand}>search</button>
      </label>
    </div>
  )
}

export { Search }
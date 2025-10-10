import React from 'react'
import { PostForm } from './PostForm'

function PostCar() {
  return (
    <div className='d-flex justify-content-end'>
      {/* <!-- Button trigger modal --> */}
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        add new car
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                POST Add New Car
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              < PostForm />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export { PostCar }
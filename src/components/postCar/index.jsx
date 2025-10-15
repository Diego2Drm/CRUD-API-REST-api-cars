import React, { useContext } from 'react'
import { PostForm } from './PostForm'
import { MethodContext } from '../../context/MethodsContext'
import { Example } from './Example';

function PostCar() {
  const { edit, cleanForm } = useContext(MethodContext);
  return (
    <div className='d-flex justify-content-end'>
      {/* <!-- Button trigger modal --> */}
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        add new car
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {
                  edit ? 'PATCH- Edit Car' : 'POST- Add New Car '
                }
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={cleanForm}></button>
            </div>
            <div className="modal-body">
              < PostForm />
              <Example />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export { PostCar }
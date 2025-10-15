import React from 'react'

function HttpMethods() {
  return (
    <div>
      <h2 className="text-secondary">HTTP Methods</h2>
      <ul className="d-flex justify-content-around text-secondary">
        <li>GET</li>
        <li>POST</li>
        <li>PUT</li>
        <li>PATCH</li>
        <li>DELETE</li>
      </ul>

      <a href="https://github.com/Diego2Drm/api-rest-cars/tree/main"
      className='text-danger'
      >
        Guie API REST CARS
      </a>
    </div>
  )
}

export { HttpMethods }
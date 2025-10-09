import React from 'react'

function Loading() {
  return (
    <div className='d-flex flex-column align-items-center mt-5'>
      <div className="spinner"></div>
      <div className="loading-text">Loading Cars...</div>
    </div>
  )
}

export { Loading };

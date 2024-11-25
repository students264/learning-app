import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
const Container4 = () => {
  return (
    <div className="container mt-5">
  <div className="row">
    <div className="col-lg-6 mb-4 mb-lg-2">
      <img 
        src="https://www.franklin.edu/sites/default/files/styles/btcb_photo/public/fr/back%20to%20college%20blog/main%20images/iStock-1081869346.jpg?itok=aBlpXTJR" 
        alt="Learning Journey" 
        className="img-fluid rounded shadow-lg"
        style={{ borderRadius: '10px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }} 
      />
    </div>
    <div className="col-lg-6"style={{background:'#22303C'}}>
      <h1 className="fs-3 text-center mb-4 text-white" style={{ fontWeight: '700' }}>
        What will you learn here?
      </h1>
      
      <ul className="list-unstyled">
        <li className="text-white fs-5 mb-3 d-flex align-items-center">
          <span className="badge bg-info text-dark me-3">1</span> Basic to Advanced Data Structures with Python
        </li>
        <li className="text-white fs-5 mb-3 d-flex align-items-center">
          <span className="badge bg-info text-dark me-3">2</span> SQL and MySQL
        </li>
        <li className="text-white fs-5 mb-3 d-flex align-items-center">
          <span className="badge bg-info text-dark me-3">3</span> OOPs with Python
        </li>
        <li className="text-white fs-5 mb-3 d-flex align-items-center">
          <span className="badge bg-info text-dark me-3">4</span> HTML, CSS, JavaScript
        </li>
        <li className="text-white fs-5 mb-3 d-flex align-items-center">
          <span className="badge bg-info text-dark me-3">5</span> Basic Networking Concepts
        </li>
        <li className="text-white fs-5 mb-3 d-flex align-items-center">
          <span className="badge bg-info text-dark me-3">6</span> MongoDB
        </li>
      </ul>
    </div>
  </div>
</div>

  )
}

export default Container4
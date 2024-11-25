import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg" style={{ background: 'linear-gradient(to right, #7F00FF, #ff9066)' }}>
      <div className="container-fluid">
        <a className="navbar-brand fs-3 fw-bold" style={{ color: '#ded4d4' }}>Welcome to Skillwise</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item mx-3">
              <button className="btn btn-link" type="button" onClick={() => navigate('/')}>Home</button>
            </li>
            <li className="nav-item mx-3">
              <button className="btn btn-link" type="button" onClick={() => navigate('/about')}>About</button>
            </li>
            <li className="nav-item mx-3">
              <button className="btn btn-link" type="button" onClick={() => navigate('/courses')}>Courses</button>
            </li>
            <li className="nav-item mx-3">
              <button className="btn btn-link" type="button" onClick={() => navigate('/contact')}>Contact</button>
            </li>
            <li className="nav-item mx-3">
              <button className="btn btn-link" type="button" onClick={() => navigate('/work')}>What we do</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

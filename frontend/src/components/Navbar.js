import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/navbar.css'; // Make sure you create this file

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand logo" to="/">MY PORTFOLIO</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {['/', '/about', '/projects', '/contact'].map((path, idx) => {
              const name = ['Home', 'About', 'Projects', 'Resume'][idx];
              return (
                <li className="nav-item" key={path}>
                  <Link
                    className={`nav-link ${location.pathname === path ? 'active' : ''}`}
                    to={path}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

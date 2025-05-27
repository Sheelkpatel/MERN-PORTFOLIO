import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/navbar.css';

const Navbar = () => {
  const sectionMap = {
    Home: 'home',
    About: 'about',
    Services: 'services',
    Skills: 'skills',
    Projects: 'project',
    Testimonial: 'testimonial',
    Resume: 'cv',
    
    
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top shadow-sm">
      <div className="container-fluid px-5">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="navbar-brand"
        >
          MY PORTFOLIO
        </ScrollLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-center d-flex flex-row flex-wrap gap-3">
            {Object.entries(sectionMap).map(([label, id]) => (
              <li className="nav-item" key={id}>
                <ScrollLink
                  to={id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  className="nav-link custom-link"
                  activeClass="active"
                >
                  {label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

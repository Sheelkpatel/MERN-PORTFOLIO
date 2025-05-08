import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/navbar.css';

const Navbar = () => {
  const sectionMap = {
    Home: 'home',
    About: 'about',
    Skills:'skills',
    Projects: 'project',
    Resume: 'cv',
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar top-fixed">
      <div className="container-fluid">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="navbar-brand logo"
          style={{ cursor: 'pointer' }}
        >
          MY PORTFOLIO
        </ScrollLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {Object.entries(sectionMap).map(([label, id]) => (
              <li className="nav-item" key={id}>
                <ScrollLink
                  to={id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  className="nav-link"
                  activeClass="active"
                  style={{ cursor: 'pointer' }}
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

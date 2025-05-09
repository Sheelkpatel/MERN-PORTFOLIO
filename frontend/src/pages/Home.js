import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Type from "./TypeWriter";
import MyImage from '../Assets/image.png';
import '../css/main.css';

const Home = () => (
  <section className="hero-section" id="home">
    <Container className="home-content">
      <Row className="align-items-center">
        {/* Image Section */}
        <Col xs={12} md={5} className="text-center mb-4 mb-md-0 order-1">
          <img src={MyImage} alt="Sheel Patel" className="hero-image img-fluid" />
        </Col>

        {/* Text Section */}
        <Col xs={12} md={7} className="hero-text text-center text-md-start order-2">
          <p className="intro-text">HI, I'M SHEEL</p>
          <h1 className="main-heading">I'M A FULL-STACK DEVELOPER</h1>
          <div className="typewriter-container">
            <Type />
          </div>
          <a href="#project" className="hero-btn mt-3">
            VIEW MY PROJECTS
          </a>
        </Col>
      </Row>
    </Container>

    {/* WhatsApp Floating Button */}
    <a
      href="https://wa.me/9537904484?text=Hello!%20I'm%20interested%20in%20your%20portfolio..."
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  </section>
);

export default Home;

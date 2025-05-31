import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { motion } from 'framer-motion';
import { FaPhone  } from "react-icons/fa6";
import Type from "./TypeWriter";
import MyImage from '../Assets/image.png';
import '../css/main.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
const Home = () => (
  <section className="hero-section" id="home" style={{width:"100%"}}>
    <Container className="home-content">
      <Row className="align-items-center">
        
        {/* Image Section with fade-in-left */}
        <Col xs={12} md={5} className="text-center mb-4 mb-md-0 order-1">
        <motion.img
  loading="lazy"
  src={MyImage}
  alt="Sheel Patel"
  className="hero-image img-fluid"
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1 }}
/>
        </Col>

        {/* Text Section with fade-in-right */}
        <Col xs={12} md={7} className="hero-text text-center text-md-start order-2">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="intro-text">HI, I'M SHEEL</p>
            <h1 className="main-heading">I'M A FULL-STACK DEVELOPER</h1>
            <div className="typewriter-container">
              <Type />
            </div>
            <a href="#project" className="hero-btn mt-3">
              VIEW MY PROJECTS
            </a>
            <OverlayTrigger
  placement="bottom"
  overlay={
    <Tooltip id="hireme-tooltip" className="custom-tooltip">
     Click to contact me directly!
    </Tooltip>
  }
>
  <a
    href="tel:+919537904484"
    className="hero-btn mt-3 ms-2"
    target="_blank"
    rel="noopener noreferrer"
  >
  <FaPhone /> &nbsp; HIRE ME
  </a>
</OverlayTrigger>
           
         
          </motion.div>
        </Col>
      </Row>
    </Container>

    {/* WhatsApp Floating Button with zoom-in */}
    <OverlayTrigger
  placement="left"
  overlay={
    <Tooltip id="whatsapp-tooltip">
      Chat with me on WhatsApp
    </Tooltip>
  }
>
  <motion.a
    href="https://wa.me/9537904484?text=Hello!%20I'm%20interested%20in%20your%20portfolio%20and%20would%20like%20to%20learn%20more%20about%20your%20services.%20Can%20you%20provide%20more%20details%20on%20your%20projects%20or%20discuss%20potential%20collaboration%20opportunities?%20Looking%20forward%20to%20connecting%20with%20you!"
    className="whatsapp-float"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5, delay: 1 }}
  >
    <img
      src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
      alt="WhatsApp"
      className="whatsapp-icon"
    />
  </motion.a>
</OverlayTrigger>
  </section>
);

export default Home;

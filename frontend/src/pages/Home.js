import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Type from "./TypeWriter";
import MyImage from '../Assets/image.png';
import '../css/main.css';

const Home = () => (
  <section id="home">
    <section className="home-section" id="home">
      <Container className="home-content">
        {/* Top Section */}
        <Row className="align-items-center">
          <Col md={5} className="text-center home-image">
            <img
              src={MyImage}
              alt="Sheel Patel"
              className="profile-image"
            />
          </Col>
          <Col md={7} className="home-header">
            <div>
              <h1 className="heading hello">
              Hi There!
                <span className="wave" role="img" aria-labelledby="wave"> 👋 </span>
              </h1>
              <p>
                I'm <strong style={{ color: "#00bcd4" }}>Sheel Patel</strong>, a passionate full-stack developer
                specializing in the MERN stack (MongoDB, Express, React, Node.js).
                I love building responsive web applications and learning new technologies.
              </p>
              <p>
                I have experience in developing scalable applications and integrating RESTful APIs.
                I'm always looking for opportunities to collaborate and grow as a developer.
              </p>
              <div className="typewriter-container" style={{ color: "#00bcd4" }}>
                <strong><Type /></strong>
              </div>
            </div>
          </Col>
        </Row>
        

        

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/9537904484?text=Hello!%20I'm%20interested%20in%20your%20portfolio%20and%20would%20like%20to%20learn%20more%20about%20your%20services.%20Can%20you%20provide%20more%20details%20on%20your%20projects%20or%20discuss%20potential%20collaboration%20opportunities%3F%20Looking%20forward%20to%20connecting%20with%20you%21"
          className="whatsapp-chat-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
            alt="WhatsApp Chat"
          />
        </a>
      </Container>
    </section>
  </section>
);

export default Home;

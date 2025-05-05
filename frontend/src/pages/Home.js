import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";
import Type from "./TypeWriter";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import MyImage from '../Assets/image.png';
import Avatar from "../Assets/avatar.svg";
import '../css/main.css';

const Home = () => (
  <section className="home-section" id="home">
    <Particle />
    
    <Container className="home-content">
      {/* Top Section */}
      <Row className="align-items-center">
        <Col md={7} className="home-header">
          <h1 className="heading">
            Hello 
            <span className="wave" role="img" aria-labelledby="wave"> 👋 </span>
          </h1>
          <p>
            I'm <strong>Sheel Patel</strong>, a passionate full-stack developer
            specializing in the MERN stack (MongoDB, Express, React, Node.js).
            I love building responsive web applications and learning new technologies.
          </p>
          <p>
            I have experience in developing scalable applications and integrating RESTful APIs.
            I'm always looking for opportunities to collaborate and grow as a developer.
          </p>
          <div className="typewriter-container">
            <Type />
          </div>
        </Col>

        <Col md={5} className="text-center home-image">
          <img
            src={MyImage}
            alt="Sheel Patel"
            className="profile-image"
          />
        </Col>
      </Row>

      {/* About Me Section */}
      <Row className="home-about-section">
      <Col md={4} className="myAvtar">
          <Tilt>
            <img src={Avatar} className="img-fluid avatar-img" alt="avatar" />
          </Tilt>
        </Col>
        <Col md={8} className="home-about-description text-description">
          <h2 className="section-title">LET ME <span className="highlight">INTRODUCE</span> MYSELF</h2>
          <p>
            I fell in love with programming and have been constantly learning and building since. 🤓
            <br /><br />
            Proficient in <span className="highlight">Java, JavaScript</span>, and passionate about
            developing <span className="highlight">Web Technologies</span> .
            <br /><br />
            I build web apps with <span className="highlight">Node.js</span> and modern frameworks like <span className="highlight">React.js</span> .
          </p>
        </Col>
        
      </Row>

      {/* Social Section */}
      <Row className="home-about-social text-center social-gap ">
        <Col>
          <h2 className="section-title">FIND ME ON</h2>
          <p>Feel free to <span className="highlight">connect</span> with me</p>
          <ul className="social-links">
            <li><a href="https://github.com/sheelpatel" target="_blank" rel="noreferrer"><AiFillGithub /></a></li>
            <li><a href="https://twitter.com/sheelpatel" target="_blank" rel="noreferrer"><AiOutlineTwitter /></a></li>
            <li><a href="https://linkedin.com/in/sheelpatel" target="_blank" rel="noreferrer"><FaLinkedinIn /></a></li>
            <li><a href="https://instagram.com/sheelpatel" target="_blank" rel="noreferrer"><AiFillInstagram /></a></li>
          </ul>
        </Col>
      </Row>

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
);

export default Home;

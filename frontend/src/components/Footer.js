import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "../css/Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer  ">
      <Container fluid>
        <Row className="align-items-center mx-2">
          <Col md={4} className="footer-text text-md-start text-center mb-2 mb-md-0">
            Designed and Developed by Sheel Patel
          </Col>
          <Col md={4} className="footer-text text-center mb-2 mb-md-0">
            Copyright &copy; {year} Sheel Patel
          </Col>
          <Col md={4} className="footer-icons text-md-end text-center">
            <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noreferrer" className="icon github">
              <AiFillGithub />
            </a>
            <a href="https://twitter.com/YOUR_USERNAME" target="_blank" rel="noreferrer" className="icon twitter">
              <AiOutlineTwitter />
            </a>
            <a href="https://linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noreferrer" className="icon linkedin">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com/YOUR_USERNAME" target="_blank" rel="noreferrer" className="icon instagram">
              <AiFillInstagram />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

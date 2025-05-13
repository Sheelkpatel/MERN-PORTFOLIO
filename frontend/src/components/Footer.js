import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "../css/Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="footer">
      <Container >
        <Row className="align-items-center justify-content-between text-center text-md-start">
          <Col xs={12} md={3} className="footer-icons mb-3 mb-md-0">
            <a href="https://github.com/Sheelkpatel/" target="_blank" rel="noreferrer" className="icon github">
              <AiFillGithub />
            </a>
            <a href="https://x.com/sheelpatel07" target="_blank" rel="noreferrer" className="icon twitter">
              <AiOutlineTwitter />
            </a>
            <a href="https://www.linkedin.com/in/sheel-patel-ba706b2b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="icon linkedin">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/sheel0710?igsh=MW1xb3Bkc2NiYWlwcQ==" target="_blank" rel="noreferrer" className="icon instagram">
              <AiFillInstagram />
            </a>
          </Col>

          <Col xs={12} md={7} className="footer-text mb-3 mb-md-0 text-md-center ">
            
             &copy; Copyright  Sheel Patel {year}  <br />
             Designed and Developed by <span style={{color:"#00bcd4"}}>Sheel Patel </span>
          </Col>

          <Col xs={12} md={2} className="text-md-end text-center justify-content-end d-flex ">
            {showButton && (
              <div className="back-to-top" onClick={scrollToTop}>
                <AiOutlineArrowUp />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

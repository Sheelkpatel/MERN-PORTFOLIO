import React from 'react';
import Avatar from "../Assets/avatar1.svg";
import Tilt from "react-parallax-tilt";
import { motion } from 'framer-motion';
import '../css/About.css';
import { useNavigate } from 'react-router-dom';

const About = () => {
  

  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row align-items-center gy-2">
        <h5 className="text-center   fw-bold "  style={{ color: "#00bcd4" }}>About me</h5>
        <h2 className="text-center text-light mb-5 fw-bold display-6">LET ME INTRODUCE MYSELF</h2>
          {/* Text Section */}
          <motion.div 
            className="col-12 col-md-7 gy-5"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            
          
            <h4 className="text-accent1 fw-bold mb-2">Full Stack Developer</h4>
            <p className="about-text">
              Hello! I'm <strong className="text-accent1">Sheel Patel</strong> from Vadodara, Gujarat, India. I hold a Bachelor's degree in Computer Engineering from Gujarat Technological University.
            </p>

            <p className="about-text">
              I'm a passionate and driven software developer with a solid foundation in mathematics, data structures, and real-world problem-solving. I'm eager to contribute to impactful web development projects.
            </p>

            <p className="about-text">
              I specialize in <span className="text-accent1 fw-semibold">MERN stack</span> and have a strong grip on <span className="text-accent1 fw-semibold">JavaScript</span>. I enjoy building responsive and dynamic web applications using modern technologies like <span className="text-accent1 fw-semibold">React.js</span> and <span className="text-accent1 fw-semibold">Node.js</span>.
            </p>

            <a href='#cv'className="btn btn-accent mt-3" >
              
              Get in Touch
            </a>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            className="col-12 col-md-5 text-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Tilt glareEnable={true} glareMaxOpacity={0.4} scale={1.05}>
              <img 
                src={Avatar} 
                alt="Developer illustration" 
                className="img-fluid responsive-avatar rounded"
              />
            </Tilt>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

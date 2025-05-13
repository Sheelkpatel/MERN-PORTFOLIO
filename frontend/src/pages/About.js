import React from 'react';
import Avatar from "../Assets/avatar1.svg";
import Tilt from "react-parallax-tilt";
import '../css/About.css';
import { motion } from 'framer-motion';

const About = () => {
  
  return (
    <section id="about" className="about-section">
      <div className="container-fluid">
        <div className="row align-items-center gy-5">

          {/* Text Section */}
          <motion.div className="col-12 col-md-7"
           initial={{ x: 100, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ duration: 1, delay: 0.3 }}>
            <h1 className="section-title text-center">LET ME INTRODUCE MYSELF</h1>
            <p className="about-text">
              Hi Everyone, I am <strong className="text-accent">Sheel Patel</strong> from Vadodara, Gujarat, India.
              I have completed my Bachelors in Computer Engineering from Gujarat Technological University.
              I am a passionate and dedicated aspiring software developer with a strong foundation in mathematics, programming, and problem-solving.
              I am currently looking for opportunities to kickstart my career in software development and contribute to meaningful projects.
            </p>
            <p className="about-text">
              I fell in love with programming and have been constantly learning and building since.
              <br /><br />
              Proficient in <span className="text-accent fw-semibold">MERN, JavaScript</span>, and passionate about
              developing <span className="text-accent fw-semibold">Web Technologies</span>.
              <br /><br />
              I build web apps with <span className="text-accent fw-semibold">Node.js</span> and modern frameworks like <span className="text-accent fw-semibold">React.js</span>.
            </p>
          </motion.div>

          {/* Image Section */}
          <div
            className="col-12 col-md-5"
      
          >
            <Tilt>
              <motion.img 
                src={Avatar} 
                alt="Developer at work" 
                className="img-fluid responsive-avatar" 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
        
              />
            </Tilt>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import Avatar from "../Assets/avatar1.svg";
import Tilt from "react-parallax-tilt";
import { motion } from 'framer-motion'; // Import Framer Motion
import '../css/About.css';

const About = () => {
  return (
    <section id="about" className="py-3" style={{ backgroundColor: "#121212", color: "white" }}>
      <div className="container">
        <div className="row align-items-center gy-5 gx-5">

          {/* Text Section with animation */}
          <motion.div
            className="col-12 col-md-7"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="mb-4 fw-bold text-center">LET ME INTRODUCE MYSELF</h1>
            <p className="fs-5" style={{ textAlign: "justify" }}>
              Hi Everyone, I am <strong className="text-info">Sheel Patel</strong> from Vadodara, Gujarat, India.
              I have completed my Bachelors in Computer Engineering from Gujarat Technological University.
              I am a passionate and dedicated aspiring software developer with a strong foundation in mathematics, programming, and problem-solving.
              I am currently looking for opportunities to kickstart my career in software development and contribute to meaningful projects.
            </p>
            <p className="fs-5" style={{ textAlign: "justify" }}>
              I fell in love with programming and have been constantly learning and building since.
              <br /><br />
              Proficient in <span className="text-info fw-semibold">MERN, JavaScript</span>, and passionate about
              developing <span className="text-info fw-semibold">Web Technologies</span>.
              <br /><br />
              I build web apps with <span className="text-info fw-semibold">Node.js</span> and modern frameworks like <span className="text-info fw-semibold">React.js</span>.
            </p>
          </motion.div>

          {/* Image Section with animation */}
          <motion.div
            className="col-12 col-md-5"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Tilt>
              <img 
                src={Avatar} 
                alt="Developer at work" 
                className="img-fluid responsive-avatar" 
              />
            </Tilt>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

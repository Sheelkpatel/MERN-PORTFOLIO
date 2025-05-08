import React from 'react';
import '../css/About.css';
import Avatar from "../Assets/avatar1.svg";
import Tilt from "react-parallax-tilt";
const About = () => {
  
  return (
    <>
    <section id="about">
    <div className="about">
      <div className="about-content">
        <div className="about-text">
          <h1>LET ME INTRODUCE MYSELF</h1>
          <p>
          Hi Everyone, I am Sheel Patel from Vadodara , Gujarat India.
I have completed my Bachelors in Computer Engineering from Gujarat Technological University.
I am a passionate and dedicated aspiring software developer with a strong foundation in mathematics, programming, and problem-solving.
I am currently looking for opportunities to kickstart my career in software development and contribute to meaningful projects.
          </p>
          <p>
         
                I fell in love with programming and have been constantly learning and building since. 🤓
                <br /><br />
                Proficient in <span className="highlight">Java, JavaScript</span>, and passionate about
                developing <span className="highlight">Web Technologies</span>.
                <br /><br />
                I build web apps with <span className="highlight">Node.js</span> and modern frameworks like <span className="highlight">React.js</span>.
             
          </p>
          
        </div>
        <div className="about-image">
          <Tilt>
          <img src={Avatar} alt="Developer at work" />
          </Tilt>
        </div>
      </div>
      </div>
      
      
      </section>
    </>
  );
};

export default About;

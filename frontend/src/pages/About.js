import React from 'react';
import '../css/About.css';
import Avatar from "../Assets/avatar1.svg";
import Skills from '../components/Skills';
import Tools from '../components/Tools';

const About = () => {
  const handleEmailClick = () => {
    window.open(
      'https://mail.google.com/mail/?view=cm&fs=1&to=sheelpatel0710@gmail.com&su=Contact%20from%20Portfolio&body=Hello%20Sheel%2C%20I%20wanted%20to%20reach%20out%20regarding...',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <>
    <div className="about">
      <div className="about-content">
        <div className="about-image">
          <img src={Avatar} alt="Developer at work" />
        </div>
        <div className="about-text">
          <h1>About Me</h1>
          <p>
          Hi Everyone, I am Sheel Patel from Vadodara , Gujarat India.
I have completed my Bachelors in Computer Engineering from Gujarat Technological University.
I am a passionate and dedicated aspiring software developer with a strong foundation in mathematics, programming, and problem-solving.
I am currently looking for opportunities to kickstart my career in software development and contribute to meaningful projects.
          </p>
          
          <h3>Contact</h3>
          <ul>
            <li>
              Email:&nbsp;
              <button onClick={handleEmailClick} className="email-button">
                sheelpatel0710@gmail.com
              </button>
            </li>
            <li>Mobile:&nbsp;+919537904484</li>
          </ul>
        </div>
      </div>
      </div>
      {/* Skills in new row */}
      <div className="about-skills-row">
        <Skills />
      </div>
      <div className="about-tools-row">
        <Tools />
      </div>
    
    </>
  );
};

export default About;

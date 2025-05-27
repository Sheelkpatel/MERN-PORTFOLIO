import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import '../css/resume.css';
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
const Resume = () => {
  const [resumeAvailable, setResumeAvailable] = useState(false);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/resume/latest`
        );
        if (data.url) {
          setResumeAvailable(true);
        }
      } catch (error) {
        console.error(error);
        alert('Failed to fetch resume');
      }
    };

    fetchResume();
  }, []);

  const handleEmailClick = () => {
    window.open(
      'https://mail.google.com/mail/?view=cm&fs=1' +
        '&to=sheelpatel0710@gmail.com' +
        '&su=Contact%20from%20Portfolio' +
        '&body=Hi%20Sheel,%0D%0A%0D%0A' +
        'I%27m%20interested%20in%20collaborating%20with%20you.%20Let%27s%20connect!%0D%0A',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="cv" className="resume">
      <div className="container">
        <motion.h2
          className="display-5 fw-bold mb-5 text-center text-md-start"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch.
        </motion.h2>

        <div className="row align-items-start">
          <motion.div
            className="col-12 col-md-6 mb-4 xyz"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p
              style={{
                color: 'gray',
                fontSize: '1.3rem',
                lineHeight: '1.8',
                textAlign: 'justify',
                marginBlockEnd: '8px',
              }}
            >
              I'm always open to discussing new projects, imaginative solutions,
              and opportunities to be part of your vision. Whether you have a
              question or just want to say hi — feel free to reach out. Let's
              build something great together.
            </p>
          </motion.div>

          <motion.div
            className="col-12 col-md-6 mb-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="d-flex flex-column flex-md-row find-me">
              <div className="me-md-5 mb-3 mb-md-0">
                <h5 className="fw-bold" style={{ fontSize: '1.5rem', fontFamily: 'Castoro, serif' }}>
                  Services
                </h5>
                <ul className="list-unstyled" style={{ color: 'gray', fontSize: '1.2rem' }}>
                 <li>Frontend Development</li>
                 <li>backend Development</li>
                 <li>API Integration</li>
                 <li>Custom Website</li>
                </ul>
              </div>
              <div>
                <h5 className="fw-bold" style={{ fontSize: '1.5rem', fontFamily: 'Castoro, serif' }}>
                  Contact Me
                </h5>
                <ul className="list-unstyled" style={{ color: 'gray', fontSize: '1.2rem' }}>
                  <li className='fex'> <MdOutlineMail/> sheelpatel0710@gmail.com</li>
                  <li> <FaPhone/> +91 9537904484</li>
                  <li> <IoLocationSharp/> Vadodara,Gujarat</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Buttons */}
        <div className="row mt-4">
          <motion.div
            className="col-12 col-md-6 mb-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button
              onClick={handleEmailClick}
              className="btn btn-info w-100 py-3 text-uppercase fw-semibold text-white"
            >
              Contact via Email
            </button>
          </motion.div>

          <motion.div
            className="col-12 col-md-6 mb-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {resumeAvailable && (
              <a
                href={`${process.env.REACT_APP_API_BASE_URL}/api/resume/download`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light w-100 py-3 text-uppercase fw-semibold custom-resume"
              >
                GET MY CV
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

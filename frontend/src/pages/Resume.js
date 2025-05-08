import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Resume = () => {
  const [resumeUrl, setResumeUrl] = useState('');

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/resume/latest`
        );
        setResumeUrl(data.url);
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
    <section
      id="cv"
      style={{ backgroundColor: '#121212', color: 'white', paddingTop: '150px', paddingBottom: '100px' }}
    >
      <div className="container py-4">
        <h2 className="display-4 fw-bold mb-5">Get In Touch.</h2>

        <div className="row">
          {/* Left text */}
          <div className="col-md-6 mb-4">
            <p
              className="text-align-justify"
              style={{ color: 'gray', fontSize: '1.5rem', marginTop: '35px' }}
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Whether you have a question or just want to say hi — feel free to reach out.
              Let's build something great together.
            </p>
          </div>

          {/* Right info */}
          <div className="col-md-6 mb-4 d-md-flex">
            <div >
              <h5 style={{ fontSize: '1.5rem',fontFamily: 'Castoro, serif'  }}>Follow Me</h5>
              <ul className="list-unstyled" style={{ color: 'gray', fontSize: '1.5rem' }}>
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>GitHub</li>
              </ul>
            </div>
            <div style={{ marginLeft: '50px' }}>
              <h5 style={{ fontSize: '1.5rem', fontFamily: 'Castoro, serif' }}>Contact Me</h5>
              <ul className="list-unstyled" style={{ color: 'gray', fontSize: '1.5rem' }}>
                <li>sheelpatel0710@gmail.com</li>
                <li>+91 95379 04484</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="row mt-4">
          <div className="col-md-6 mb-2">
            <button
              onClick={handleEmailClick}
              className="btn btn-info w-100 py-3 text-uppercase fw-semibold text-white"
            >
             Contact via Email
            </button>
          </div>
          <div className="col-md-6 mb-2">
            {resumeUrl && (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-100 py-3 text-uppercase fw-semibold custom-resume-btn"
              >
                Get My CV
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

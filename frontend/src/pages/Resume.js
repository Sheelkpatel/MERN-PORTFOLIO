import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Resume = () => {
  const [resumeUrl, setResumeUrl] = useState('');

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/resume/latest`);
        setResumeUrl(data.url);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch resume');
      }
    };

    fetchResume();
  }, []);

  // Responsive height based on window width
  const getPreviewHeight = () => {
    const width = window.innerWidth;
    if (width >= 992) return '100vh';   // large screens
    if (width >= 768) return '80vh';   // tablets
    return '50vh';                     // small screens
  };

  return (
    <div className="container-fluid text-light min-vh-100 py-5" style={{ backgroundColor: '#121212' }}>
      <div className="container">
        <h2 className="text-center mb-4">My Resume</h2>
        {resumeUrl ? (
          <>
            <div className="text-center mb-4">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Download Resume (PDF)
              </a>
            </div>

            <div className="d-flex justify-content-center mb-4">
              <div
                className="w-100"
                style={{
                  maxWidth: '900px',
                  height: getPreviewHeight(),
                  border: '1px solid #ccc',
                  boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                  backgroundColor: '#fff',
                }}
              >
                <iframe
                  src={`https://docs.google.com/gview?url=${encodeURIComponent(resumeUrl)}&embedded=true`}
                  title="PDF Preview"
                  width="100%"
                  height="100%"
                  style={{ border: 'none' }}
                ></iframe>
              </div>
            </div>

            <p className="text-center text-light" style={{ fontSize: '0.9rem' }}>
              If the preview doesn't load, you can{' '}
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="text-info">
                click here to download the PDF
              </a>.
            </p>
          </>
        ) : (
          <p className="text-center">No resume available.</p>
        )}
      </div>
    </div>
  );
};

export default Resume;

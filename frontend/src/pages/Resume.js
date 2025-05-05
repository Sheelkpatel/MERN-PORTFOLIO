import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Resume = () => {
  const [resumeUrl, setResumeUrl] = useState('');

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/api/resume/latest');
        setResumeUrl(data.url);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch resume');
      }
    };

    fetchResume();
  }, []);

  return (
    <div className="container-fluid  text-light min-vh-100 py-5" style={{ backgroundColor:' #121212 '}}>
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
                style={{
                  width: '794px',      // A4 width at 96dpi
                  height: '1123px',    // A4 height at 96dpi
                  maxWidth: '100%',
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

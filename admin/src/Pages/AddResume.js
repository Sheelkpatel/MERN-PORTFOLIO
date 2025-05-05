import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UploadResume = () => {
  const [resume, setResume] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  // Fetch latest resume on mount to persist preview
  useEffect(() => {
    const fetchResume = async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/api/resume/latest');
        setPreviewUrl(data.url); // assuming backend sends { url: '...' }
      } catch (err) {
        console.error('Failed to fetch latest resume:', err);
      }
    };
    fetchResume();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setResume(file);
    } else {
      setResume(null);
      alert('Please upload a valid PDF file.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resume || resume.type !== 'application/pdf') {
      return alert('Please upload a valid PDF resume.');
    }

    const formData = new FormData();
    formData.append('resume', resume);

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8080/api/resume/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('Resume uploaded successfully');

      // Clear file input
      setResume(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

      // Set preview from backend URL
      const uploadedUrl = response.data?.url;
      if (uploadedUrl) {
        setPreviewUrl(uploadedUrl);
      }

    } catch (error) {
      console.error(error);
      alert('Failed to upload resume');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid bg-dark text-light py-5 min-vh-100">
      <div className="container">
        <h2 className="text-center mb-4">Upload Resume</h2>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-3">
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              ref={fileInputRef}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-success" disabled={loading}>
            {loading ? 'Uploading...' : 'Upload Resume'}
          </button>
        </form>

        {previewUrl && (
          <div className="d-flex justify-content-center">
            <div
              style={{
                width: '794px',
                height: '1123px',
                maxWidth: '100%',
                border: '1px solid #ccc',
                boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                backgroundColor: '#fff',
              }}
            >
              <iframe
                src={`https://docs.google.com/gview?url=${encodeURIComponent(
                  previewUrl
                )}&embedded=true`}
                title="Resume Preview"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadResume;

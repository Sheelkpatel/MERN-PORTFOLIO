import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UploadResume = () => {
  const [resume, setResume] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [iframeHeight, setIframeHeight] = useState('60vh');
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const { data } = await axios.get('https://mern-portfolio-1-yadr.onrender.com/api/resume/latest');
        setPreviewUrl(data.url);
      } catch (err) {
        console.error('Failed to fetch latest resume:', err);
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 576) {
        setIframeHeight('50vh');
      } else if (window.innerWidth < 768) {
        setIframeHeight('60vh');
      } else if (window.innerWidth < 992) {
        setIframeHeight('70vh');
      } else {
        setIframeHeight('135vh');
      }
    };

    fetchResume();
    handleResize(); // set initial height
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
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
      const response = await axios.post('https://mern-portfolio-1-yadr.onrender.com/api/resume/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('Resume uploaded successfully');
      setResume(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

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
    <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center py-4">
      <div className="row justify-content-center w-100 ">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card shadow-lg border-0 rounded-4 p-3 p-md-4">
            <h2 className="text-center fw-bold mb-2 fs-4 fs-md-3">Resume Manager</h2>
            <p className="text-center text-muted mb-4 small">
              Upload your latest resume to keep your portfolio up to date.
            </p>

            <form onSubmit={handleSubmit} className="mb-4">
              <div className="mb-3">
                <label className="form-label fw-semibold">Choose a PDF File:</label>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  className="form-control"
                />
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="submit" className="btn btn-success px-3" disabled={loading}>
                  {loading ? 'Uploading...' : 'Upload Resume'}
                </button>
              </div>
            </form>

            {previewUrl && (
              <>
                <h5 className="text-center mt-4 mb-3">Current Resume Preview</h5>
                <div
                  className="w-100 bg-light border rounded shadow-sm overflow-hidden"
                  style={{ height: iframeHeight }}
                >
                  <iframe
                    src={`https://docs.google.com/gview?url=${encodeURIComponent(previewUrl)}&embedded=true`}
                    title="Resume Preview"
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                  ></iframe>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadResume;

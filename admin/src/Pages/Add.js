import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddProject = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [technologiesUsed, setTechnologiesUsed] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [isPublished, setIsPublished] = useState(false);
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length > 4) {
      alert('You can upload a maximum of 4 images.');
      return;
    }

    const updatedImages = [...images, ...files];
    const updatedPreviews = [
      ...previewImages,
      ...files.map((file) => URL.createObjectURL(file)),
    ];

    setImages(updatedImages);
    setPreviewImages(updatedPreviews);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    const updatedPreviews = [...previewImages];
    updatedImages.splice(index, 1);
    updatedPreviews.splice(index, 1);
    setImages(updatedImages);
    setPreviewImages(updatedPreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    images.forEach((file) => formData.append('images', file));
    formData.append('projectName', projectName);
    formData.append('projectDescription', projectDescription);
    formData.append('technologiesUsed', technologiesUsed);
    formData.append('githubUrl', githubUrl);
    formData.append('isPublished', isPublished);

    try {
      setLoading(true);
      await axios.post('http://localhost:8080/api/projects/add', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Project added successfully');
      // Reset form
      setProjectName('');
      setProjectDescription('');
      setTechnologiesUsed('');
      setGithubUrl('');
      setIsPublished(false);
      setImages([]);
      setPreviewImages([]);
    } catch (error) {
      console.error(error);
      alert('Failed to add project');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Add New Project</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow-lg">
        <div className="mb-3">
          <label className="form-label">Project Name</label>
          <input
            type="text"
            className="form-control"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Project Description</label>
          <textarea
            className="form-control"
            rows="4"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Technologies Used</label>
          <input
            type="text"
            className="form-control"
            value={technologiesUsed}
            onChange={(e) => setTechnologiesUsed(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">GitHub URL</label>
          <input
            type="url"
            className="form-control"
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
          />
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            checked={isPublished}
            onChange={() => setIsPublished(!isPublished)}
            id="isPublished"
          />
          <label className="form-check-label" htmlFor="isPublished">
            Published
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Images (Max 4)</label>
          <input
            type="file"
            className="form-control"
            multiple
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
            disabled={images.length >= 4}
          />
        </div>

        {previewImages.length > 0 && (
          <div className="mb-4">
            <label className="form-label">Image Preview</label>
            <div className="d-flex flex-wrap gap-3">
              {previewImages.map((src, idx) => (
                <div key={idx} className="position-relative">
                  <img
                    src={src}
                    alt={`Preview ${idx + 1}`}
                    className="img-thumbnail"
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                    }}
                  />
                  <button
                    type="button"
                    className="btn-close position-absolute top-0 end-0"
                    aria-label="Remove"
                    onClick={() => handleRemoveImage(idx)}
                    style={{ backgroundColor: 'white' }}
                  ></button>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          type="submit"
          className="btn btn-success w-100"
          disabled={loading}
        >
          {loading ? 'Adding Project...' : 'Add Project'}
        </button>
      </form>
    </div>
  );
};

export default AddProject;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, useNavigate } from 'react-router-dom';

const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [technologiesUsed, setTechnologiesUsed] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [isPublished, setIsPublished] = useState(false);

  const [existingImages, setExistingImages] = useState([]); // image URLs
  const [newImages, setNewImages] = useState([]); // files
  const [previewImages, setPreviewImages] = useState([]); // new preview URLs
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/projects/${id}`);
        const project = res.data;
        setProjectName(project.projectName);
        setProjectDescription(project.projectDescription);
        setTechnologiesUsed(project.technologiesUsed);
        setGithubUrl(project.githubUrl);
        setIsPublished(project.isPublished);
        setExistingImages(project.images || []);
      } catch (err) {
        console.error(err);
        alert('Failed to load project');
      }
    };
    fetchProject();
  }, [id]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (existingImages.length + newImages.length + files.length > 4) {
      alert('You can upload a maximum of 4 images.');
      return;
    }
    setNewImages((prev) => [...prev, ...files]);
    setPreviewImages((prev) => [
      ...prev,
      ...files.map((file) => URL.createObjectURL(file)),
    ]);
  };

  const handleRemoveExisting = (index) => {
    const updated = [...existingImages];
    updated.slice(index, 1);
    setExistingImages(updated);
  };

  const handleRemoveNew = (index) => {
    const updatedNew = [...newImages];
    const updatedPreview = [...previewImages];
    updatedNew.splice(index, 1);
    updatedPreview.splice(index, 1);
    setNewImages(updatedNew);
    setPreviewImages(updatedPreview);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    newImages.forEach((file) => formData.append('newImages', file));
    formData.append('existingImages', JSON.stringify(existingImages));
    formData.append('projectName', projectName);
    formData.append('projectDescription', projectDescription);
    formData.append('technologiesUsed', technologiesUsed);
    formData.append('githubUrl', githubUrl);
    formData.append('isPublished', isPublished);

    try {
      setLoading(true);
      await axios.put(`http://localhost:8080/api/projects/edit/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Project updated successfully');
      navigate('/list-projects');
    } catch (error) {
      console.error(error);
      alert('Failed to update project');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Edit Project</h2>
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
          <label className="form-label">Upload More Images (Max 4)</label>
          <input
            type="file"
            className="form-control"
            multiple
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
            disabled={existingImages.length + newImages.length >= 4}
          />
        </div>

        {(existingImages.length > 0 || previewImages.length > 0) && (
          <div className="mb-4">
            <label className="form-label">Image Preview</label>
            <div className="d-flex flex-wrap gap-3">
              {existingImages.map((src, idx) => (
                <div key={`existing-${idx}`} className="position-relative">
                  <img
                    src={src}
                    alt={`Existing ${idx + 1}`}
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
                    onClick={() => handleRemoveExisting(idx)}
                  ></button>
                </div>
              ))}
              {previewImages.map((src, idx) => (
                <div key={`new-${idx}`} className="position-relative">
                  <img
                    src={src}
                    alt={`New ${idx + 1}`}
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
                    onClick={() => handleRemoveNew(idx)}
                  ></button>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading}
        >
          {loading ? 'Updating...' : 'Update Project'}
        </button>
      </form>
    </div>
  );
};

export default EditProject;

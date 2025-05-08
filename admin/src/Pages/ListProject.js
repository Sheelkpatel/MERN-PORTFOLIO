import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get('https://mern-portfolio-1-yadr.onrender.com/api/projects/list');
        setProjects(data);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch projects');
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center fs-3">Project List</h2>

      {/* Table for medium and larger screens */}
      <div className="table-responsive d-none d-md-block">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-dark text-nowrap">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Project Name</th>
              <th>Description</th>
              <th>Technologies</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <tr key={project._id}>
                  <td>{index + 1}</td>
                  <td>
                    {project.images?.[0] ? (
                      <img
                        src={project.images[0]}
                        alt="Project"
                        className="img-fluid rounded"
                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                      />
                    ) : (
                      <span className="text-muted small">No image</span>
                    )}
                  </td>
                  <td className="text-break">{project.projectName}</td>
                  <td className="text-break" style={{ maxWidth: '250px' }}>{project.projectDescription}</td>
                  <td className="text-break">{project.technologiesUsed}</td>
                  <td>
                    <Link className="btn btn-sm btn-primary" to={`/admin/edit-project/${project._id}`}>
                      Edit
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-3 text-muted">
                  No projects found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Card view for mobile */}
      <div className="d-block d-md-none">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <div key={project._id} className="card mb-3 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{index + 1}. {project.projectName}</h5>
                {project.images?.[0] && (
                  <img
                    src={project.images[0]}
                    alt="Project"
                    className="img-fluid rounded mb-3"
                    style={{ height: '150px', objectFit: 'cover', width: '100%' }}
                  />
                )}
                <p className="card-text">
                  <strong>Description:</strong> {project.projectDescription}
                </p>
                <p className="card-text">
                  <strong>Technologies:</strong> {project.technologiesUsed}
                </p>
                <Link className="btn btn-sm btn-primary" to={`/admin/edit-project/${project._id}`}>
                  Edit
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-muted">No projects found.</div>
        )}
      </div>
    </div>
  );
};

export default ProjectList;

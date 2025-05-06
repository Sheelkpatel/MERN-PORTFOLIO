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
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Project List</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Project Name</th>
              <th>Description</th>
              <th>Technologies</th>
              <th>Published</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <tr key={project._id}>
                  <td>{index + 1}</td>
                  <td>
                    {project.images && project.images.length > 0 ? (
                      <img
                        src={project.images[0]}
                        alt="Project"
                        className="img-thumbnail"
                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                      />
                    ) : (
                      <span>No image</span>
                    )}
                  </td>
                  <td>{project.projectName}</td>
                  <td style={{ maxWidth: '200px' }}>{project.projectDescription}</td>
                  <td>{project.technologiesUsed}</td>
                  <td>{project.isPublished ? 'Yes' : 'No'}</td>
                  <td>
                    <Link className="btn btn-sm btn-primary" to={`/admin/edit-project/${project._id}`}>
                      Edit
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No projects found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectList;

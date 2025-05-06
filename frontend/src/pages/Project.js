import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/projects/list`);
        setProjects(data);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch projects');
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="bg-dark text-light py-4">
      <h2 className="text-center mb-4">My Recent <span style={{ color: "#00bcd4" }}>Work</span></h2>
      <div className="container">
        <div className="row justify-content-center">
          {projects.map((project) => (
            <div
              key={project.projectId}
              className="col-12 col-sm-10 col-md-6 col-lg-4 d-flex mb-4"
            >
              <Card
                className="bg-dark text-light shadow d-flex flex-column w-100"
                style={{
                  border: "5px solid #00bcd4",
                  borderRadius: "0.5rem",
                  minWidth: "290px",
                }}
              >
                {/* Carousel */}
                <div id={`carousel-${project.projectId}`} className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner rounded-top">
                    {project.images && project.images.length > 0 ? (
                      project.images.map((image, index) => (
                        <div
                          key={image} // Use image URL as key
                          className={`carousel-item ${index === 0 ? 'active' : ''}`}
                        >
                          <img
                            src={image}
                            className="d-block w-100 rounded-top"
                            style={{ height: '200px', objectFit: 'cover' }}
                            alt={`Project image ${index + 1}`}
                          />
                        </div>
                      ))
                    ) : (
                      <div className="carousel-item active">
                        <img
                          src="https://via.placeholder.com/300x200"
                          className="d-block w-100 rounded-top"
                          alt="Placeholder"
                        />
                      </div>
                    )}
                  </div>

                  {project.images && project.images.length > 1 && (
                    <>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target={`#carousel-${project.projectId}`}
                        data-bs-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target={`#carousel-${project.projectId}`}
                        data-bs-slide="next"
                      >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </>
                  )}
                </div>

                {/* Card Body */}
                <Card.Body className="d-flex flex-column flex-grow-1">
  <div className="mb-3">
    <Card.Title className="fw-bold text-info fs-5 text-center border-bottom pb-2">
      {project.projectName}
    </Card.Title>
    <Card.Text className="mt-2" style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
      <span className="fw-semibold text-uppercase text-secondary">Description:</span><br />
      <span className="text-light">{project.projectDescription}</span>
    </Card.Text>
    <Card.Text className="mt-3 "style={{ fontSize: '0.95rem'}}>
      <span className="fw-semibold text-uppercase text-secondary">Technologies:</span><br />
      {project.technologiesUsed.split(',').map((tech, idx) => (
        <span key={idx} className="badge bg-info text-dark me-2 mb-1">
          {tech.trim()}
        </span>
      ))}
    </Card.Text>
  </div>
  <div className="mt-auto">
    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
      <Button variant="outline-info" className="w-100 fw-semibold">
        🔗 View on GitHub
      </Button>
    </a>
  </div>
</Card.Body>

              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;

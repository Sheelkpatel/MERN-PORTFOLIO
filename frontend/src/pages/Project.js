import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import '../css/main.css';
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
    <section id="project" className="py-5" style={{ backgroundColor: "#121212" }}>
      <div className="container">
        <h2 className="text-center text-light mb-5 fw-bold">
          My Recent <span style={{ color: "#00bcd4" }}>Work</span>
        </h2>
        <div className="row g-4 justify-content-center">
          {projects.map((project) => (
            <div key={project.projectId} className="col-12 col-sm-10 col-md-6 col-lg-4 d-flex">
              <Card
                className="bg-dark text-light shadow-lg w-100 border-0"
                style={{ borderRadius: "0.75rem", overflow: "hidden", transition: 'transform 0.3s' }}
              >
                <div id={`carousel-${project.projectId}`} className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    {project.images && project.images.length > 0 ? (
                      project.images.map((image, index) => (
                        <div
                          key={image}
                          className={`carousel-item ${index === 0 ? 'active' : ''}`}
                        >
                          <img
                            src={image}
                            className="d-block w-100"
                            style={{ height: '220px', objectFit: 'cover' }}
                            alt={`Project image ${index + 1}`}
                          />
                        </div>
                      ))
                    ) : (
                      <div className="carousel-item active">
                        <img
                          src="https://via.placeholder.com/300x200"
                          className="d-block w-100"
                          alt="Placeholder"
                        />
                      </div>
                    )}
                  </div>

                  {project.images && project.images.length > 1 && (
                    <>
                      <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${project.projectId}`} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${project.projectId}`} data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </>
                  )}
                </div>

                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="fw-bold text-info text-center border-bottom pb-2 fs-5">
                    {project.projectName}
                  </Card.Title>

                  <Card.Text className="mt-3" style={{ fontSize: '0.95rem', textAlign: 'justify' }}>
                    <span className="fw-semibold text-uppercase text-secondary">Description:</span><br />
                    <span>{project.projectDescription}</span>
                  </Card.Text>

                  <Card.Text className="mt-3" style={{ fontSize: '0.95rem' }}>
                    <span className="fw-semibold text-uppercase text-secondary">Technologies:</span><br />
                    {project.technologiesUsed.split(',').map((tech, idx) => (
                      <span key={idx} className="badge bg-info text-dark me-2 mb-1">
                        {tech.trim()}
                      </span>
                    ))}
                  </Card.Text>

                  <div className="mt-auto pt-3">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="info" className="w-100 fw-semibold text-dark">
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
    </section>
  );
};

export default ProjectList;

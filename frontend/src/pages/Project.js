import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/api/projects/list');
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
                          key={index}
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
                  <div className="mb-2">
                    <Card.Title>{project.projectName}</Card.Title>
                    <Card.Text>
                      <strong>Description:</strong> {project.projectDescription}
                    </Card.Text>
                    <Card.Text>
                      <strong>Technologies:</strong> {project.technologiesUsed}
                    </Card.Text>
                  </div>
                  <div className="mt-auto">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="light" className="w-100">
                        View on GitHub
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

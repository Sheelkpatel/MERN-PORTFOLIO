import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaLink } from "react-icons/fa6";
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
        <h2 className="text-center text-light mb-5 fw-bold display-6">
          My Recent <span style={{ color: "#00bcd4" }}>Work</span>
        </h2>
        <div className="row gx-lg-5 gy-4 justify-content-center">
          {projects.map((project, index) => (
            <div
              key={project.projectId}
              className="col-12 col-sm-10 col-md-6 col-lg-5 d-flex"
            >
              <motion.div
                className="w-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 12px 25px rgba(0, 188, 212, 0.2)",
                  transition: { type: 'spring', stiffness: 200 },
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="text-light shadow-lg border-1 w-100" style={{border:"1px solid rgba(0, 188, 212, 0.2)",  backgroundColor: "#121212" }}>
                  {/* Carousel */}
                  <div id={`carousel-${project.projectId}`} className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      {project.images?.length > 0 ? (
                        project.images.map((image, idx) => (
                          <div key={image} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                            <img
                              src={image}
                              className="d-block w-100"
                              style={{ objectFit: 'cover', maxHeight: '300px', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}
                              alt={`Project image ${idx + 1}`}
                            />
                          </div>
                        ))
                      ) : (
                        <div className="carousel-item active">
                          <img
                            src="https://via.placeholder.com/300x200"
                            className="d-block w-100"
                            alt="Placeholder"
                            style={{ objectFit: 'cover', maxHeight: '300px' }}
                          />
                        </div>
                      )}
                    </div>

                    {project.images?.length > 1 && (
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

                  {/* Card Content */}
                  <Card.Body className="d-flex flex-column p-4">
                    <Card.Title className="fw-bold text-info text-center border-bottom pb-2 fs-4">
                      {project.projectName}
                    </Card.Title>

                    <Card.Text className="mt-3 text-light" style={{ fontSize: '0.95rem', textAlign: 'justify' }}>
                      <span className="fw-semibold text-uppercase text-secondary">Description:</span><br />
                      {project.projectDescription}
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
                        <Button
                          variant="info"
                          className="w-100 fw-semibold text-dark"
                          style={{ borderRadius: "0.5rem" }}
                        >
                          <FaLink  className='text-lg'/>  View on GitHub
                        </Button>
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;

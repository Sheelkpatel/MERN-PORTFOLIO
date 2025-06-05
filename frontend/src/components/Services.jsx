import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaCogs, FaGlobe, FaPalette,FaCloudUploadAlt, FaTachometerAlt,FaDatabase,FaTools } from 'react-icons/fa';
import '../css/service.css';


const services = [
  {
    title: 'Frontend Development',
    icon: <FaCode />,
    description: 'Modern and responsive UI using React, HTML, CSS, and JavaScript.',
  },
  {
  title: 'Content Management System',
  icon: <FaTools />,
  description: 'CMS built with MERN stack to manage projects, resumes, and testimonials via a secure admin panel.'

}
,
  {
    title: 'Backend Development',
    icon: <FaServer />,
    description: 'Robust APIs and database-driven solutions using Node.js and MySQL/MongoDB.',
  },
  {
    title: 'API Integration',
    icon: <FaCogs />,
    description: 'Third-party API integration for seamless functionality and performance.',
  },
  {
    title: 'Custom Website',
    icon: <FaGlobe />,
    description: 'Tailored web solutions that fit your vision and business goals.',
  },
  {
    title: 'UI/UX Design',
    icon: <FaPalette />, // 🎨 Icon for design
    description: 'Creating user-friendly interfaces with attention to usability and accessibility.',
  },
  {
    title: 'Cloud Deployment',
    icon: <FaCloudUploadAlt />, // ☁️ Upload icon
    description: 'Deploying applications on cloud platforms like Vercel, Netlify, and AWS.',
  },
  {
    title: 'Performance Optimization',
    icon: <FaTachometerAlt />, // 🏎️ Speed meter icon
    description: 'Improving load speed, reducing bundle size, and optimizing user experience.',
  },
  {
    title: 'Database Design',
    icon: <FaDatabase />, // 🗃️ Database icon
    description: 'Designing scalable database schemas using MySQL and MongoDB.',
  },
  
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 }
  }),
};

const Services = () => {
  return (
    <section className="services-section py-5" id="services">
      <div className="container">
        <motion.h2
          className="text-center text-light mb-5 fw-bold display-6"
       
        
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What I <span style={{ color: "#00bcd4" }}>Offer</span>
        </motion.h2>
        <div className="row">
          {services.map((service, index) => (
            <motion.div
              className="col-12 col-sm-6 col-lg-3 mb-4"
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <div className="service-card text-center p-4 h-100">
                <div className="icon mb-3">{service.icon}</div>
                <h5 className="fw-bold mb-2">{service.title}</h5>
                <p className="text-white">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

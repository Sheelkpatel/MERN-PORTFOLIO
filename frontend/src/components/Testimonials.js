import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import '../css/testimonial.css'; // Make sure this includes new styles below

const testimonials = [
  {
    quote: "Sheel gained valuable skills and practical insights during his internship, building a strong foundation for projects. He is confident, flexible, and ready for challenges.",
author: 'Ashish Meghani',
    position: 'Managing Director, Sparks To Ideas',
    rating: 5,
  },
  {
    quote: "Sheel demonstrated dedication, creativity, and passion for learning. His growth mindset and strong work ethic will serve him well in his professional journey ahead.",
    author: 'Atul Yadav',
    position: 'Internship Mentor, Internship Studio',
    rating: 4,
  },
  {
    quote: "Sheel showed diligence, curiosity and solid technical skills during his internship. He adapted well to challenges and maintained  performance throughout training.",
    author: 'Sankalp Patel',
    position: 'Proprietor, Scrupulous Technology',
    rating: 5,
  },
  {
    quote: "Sheel displayed enthusiasm, adaptability, and strong grasp of creative design and development. He is a motivated learner with real potential in full-stack technologies.",
    author: 'Rabina Rana',
    position: 'Internship Co-ordinator, Internship Studio',
    rating: 4,
  },
];



const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024, // tablet and below
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768, // mobile and below
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Testimonial = () => {
  return (
    <section id="testimonial" className="testimonial-section py-5">
      <div className="container">
        <motion.h2
          className="text-center fw-bold mb-5"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Testimonials
        </motion.h2>

        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <motion.div
              className="testimonial-slide px-3 mb-4"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-card p-4 shadow-sm rounded text-center h-100 d-flex flex-column justify-content-between">
                <p className="testimonial-text  mb-3">"{item.quote}"</p>
                <div className="stars mb-2">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
                <h6 className="mb-1 text-accent fw-bold">{item.author}</h6>
                <small className="text-white">{item.position}</small>
              </div>
            </motion.div>
          ))}
          
        </Slider>
       
      </div>
    </section>
  );
};

export default Testimonial;

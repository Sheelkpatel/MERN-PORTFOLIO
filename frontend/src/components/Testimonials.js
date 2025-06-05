import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import '../css/testimonial.css';

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/testimonials`)  // backend URL
      .then(res => res.json())
      .then(data => setTestimonials(data))
      .catch(console.error);
  }, []);

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
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

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
          {testimonials.map((item) => (
            <motion.div
              className="testimonial-slide px-3 mb-4"
              key={item._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-card p-4 shadow-sm rounded text-center h-100 d-flex flex-column justify-content-between">
                <p className="testimonial-text mb-3">"{item.quote}"</p>
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

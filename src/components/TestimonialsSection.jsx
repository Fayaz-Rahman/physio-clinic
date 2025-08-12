import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './TestimonialsSection.css';
import { testimonials } from '../data/testimonials';

// Animation variants for smooth transitions
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const TestimonialsSection = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        (prevIndex + 1) % testimonials.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="testimonials-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Testimonials
      </motion.h2>
      <div className="testimonials-container">
        <motion.div
          className="testimonial-slider"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`testimonial-card ${index === currentTestimonialIndex ? 'active' : ''}`}
              style={{ transform: `translateX(${(index - currentTestimonialIndex) * 100}%)` }}
              variants={cardVariants}
            >
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">- {testimonial.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonial-dot ${index === currentTestimonialIndex ? 'active' : ''}`}
              onClick={() => setCurrentTestimonialIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
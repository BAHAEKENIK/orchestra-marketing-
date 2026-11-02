// src/components/Testimonials/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData } from './testimonialsData';
import TestimonialCard from './TestimonialCard';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        
        {/* Section Header */}
        <div className="testimonials-header">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="testimonials-eyebrow">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">ILS NOUS FONT CONFIANCE</span>
              <span className="eyebrow-line" />
            </div>
            <h2 className="testimonials-title">
              Une exigence saluée par<br />
              nos <span className="title-accent">partenaires.</span>
            </h2>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}
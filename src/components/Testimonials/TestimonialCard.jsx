// src/components/Testimonials/TestimonialCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './TestimonialCard.css';

export default function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Decorative Quote Icon */}
      <div className="quote-icon-wrapper">
        <Quote size={32} strokeWidth={1} />
      </div>

      {/* The Quote */}
      <p className="testimonial-quote">"{testimonial.quote}"</p>

      {/* Footer: Author & Metric */}
      <div className="testimonial-footer">
        <div className="testimonial-author-info">
          <div className="author-avatar">{testimonial.initials}</div>
          <div className="author-text">
            <span className="author-name">{testimonial.author}</span>
            <span className="author-role">{testimonial.role}</span>
          </div>
        </div>
        
        <div className="testimonial-metric">
          <span className="metric-number">{testimonial.metric}</span>
          <span className="metric-text">{testimonial.metricLabel}</span>
        </div>
      </div>
    </motion.div>
  );
}
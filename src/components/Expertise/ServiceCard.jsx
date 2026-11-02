// src/components/Expertise/ServiceCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './ServiceCard.css';

export default function ServiceCard({ service, index = 0 }) {
  const { Icon, title, description } = service;

  return (
    <motion.article
      className="service-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover="hover"
    >
      <motion.div
        className="service-icon-wrapper"
        variants={{ hover: { rotate: -6, scale: 1.05 } }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Icon size={22} strokeWidth={1.75} />
      </motion.div>

      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>

      <a href="#contact" className="service-link" aria-label={`En savoir plus sur ${title}`}>
        <span>En savoir plus</span>
        <motion.span
          className="service-link-arrow"
          variants={{ hover: { x: 4 } }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <ArrowRight size={14} />
        </motion.span>
      </a>

      {/* Subtle gold border glow on hover */}
      <span className="service-card-border-glow" aria-hidden="true" />
    </motion.article>
  );
}
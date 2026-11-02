// src/components/Expertise/ExpertiseArtwork.jsx
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './ExpertiseArtwork.css';

// Adjust import paths if your asset folder structure is different
import artworkDesktop from '../../assets/expertise/orchestra-expertise-desktop.png';
import artworkMobile from '../../assets/expertise/orchestra-expertise-mobile.png';

export default function ExpertiseArtwork() {
  // Detect OS-level "Reduce Motion" preference
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="expertise-artwork-wrapper"
      initial={{ opacity: 0, scale: 0.92, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="artwork-floor-shadow" aria-hidden="true" />

      {/* The infinite floating animation (disabled if user prefers reduced motion) */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="artwork-float-container"
      >
        <picture>
          <source media="(max-width: 768px)" srcSet={artworkMobile} />
          <img
            src={artworkDesktop}
            alt="Illustration 3D Orchestra Marketing IA : processeur IA, cible business, ordinateur et réseau neuronal"
            className="expertise-artwork-img"
            loading="lazy"
            width="850"
            height="1062"
          />
        </picture>
      </motion.div>
    </motion.div>
  );
}
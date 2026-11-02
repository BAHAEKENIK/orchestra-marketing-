// src/components/Expertise/ExpertiseDecor.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './ExpertiseDecor.css';

const drawOrbit = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2, ease: "easeInOut", delay: 0.5 }
  }
};

const pulseNode = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    opacity: [0.3, 1, 0.3], // Pulsing effect
    transition: {
      scale: { duration: 0.4, delay: i * 0.15 },
      opacity: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }
    }
  })
};

export default function ExpertiseDecor() {
  return (
    <div className="expertise-decor" aria-hidden="true">
      <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="decor-svg">
        {/* Gold Orbital Lines */}
        <motion.path 
          d="M 100 500 C 100 200, 700 100, 750 400" 
          stroke="#C58A35" strokeWidth="1.5" strokeDasharray="4 6"
          variants={drawOrbit} initial="hidden" whileInView="visible" viewport={{ once: true }}
        />
        <motion.path 
          d="M 50 600 C 150 750, 600 800, 750 600" 
          stroke="#EACB91" strokeWidth="1"
          variants={drawOrbit} initial="hidden" whileInView="visible" viewport={{ once: true }}
        />
        
        {/* Neural Network Nodes */}
        <motion.circle cx="650" cy="250" r="6" fill="#C58A35" custom={1} variants={pulseNode} initial="hidden" whileInView="visible" />
        <motion.circle cx="700" cy="320" r="4" fill="#C58A35" custom={2} variants={pulseNode} initial="hidden" whileInView="visible" />
        <motion.circle cx="600" cy="350" r="5" fill="#C58A35" custom={3} variants={pulseNode} initial="hidden" whileInView="visible" />
        <motion.circle cx="720" cy="420" r="7" fill="#C58A35" custom={4} variants={pulseNode} initial="hidden" whileInView="visible" />
      </svg>
    </div>
  );
}
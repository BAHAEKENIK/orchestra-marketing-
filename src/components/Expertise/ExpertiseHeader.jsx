// src/components/Expertise/ExpertiseHeader.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './ExpertiseHeader.css';

export default function ExpertiseHeader() {
  return (
    <div className="expertise-header">
      {/* Eyebrow */}
      <motion.div
        className="exp-eyebrow"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow-line" />
        <span className="eyebrow-text">NOTRE EXPERTISE</span>
      </motion.div>

      {/* Headline */}
      <motion.h2
        className="exp-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Une expertise complète
        <br />
        pour faire grandir votre
        <br />
        <span className="exp-title-accent">entreprise.</span>
      </motion.h2>

      {/* Description */}
      <motion.p
        className="exp-description"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Chez Orchestra Marketing IA, nous combinons stratégie, créativité
        et intelligence artificielle pour vous offrir des solutions marketing
        performantes et sur mesure.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="#services"
        className="exp-cta"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover="hover"
      >
        <span>Découvrir nos services</span>
        <motion.span
          className="exp-cta-arrow"
          variants={{ hover: { x: 4 } }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <ArrowRight size={16} />
        </motion.span>
      </motion.a>
    </div>
  );
}
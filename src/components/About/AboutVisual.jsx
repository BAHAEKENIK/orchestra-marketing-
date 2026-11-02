// src/components/About/AboutVisual.jsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Award, TrendingUp, Users } from 'lucide-react';
import './AboutVisual.css';

// Adjust path if needed based on your assets folder
import portrait from '../../assets/images/adil-portrait.png'; 

const stats = [
  { value: '40%', label: 'Croissance CA', icon: TrendingUp, desc: 'NOOREL (An 2)' },
  { value: 'Bac+5', label: 'Niveau d\'études', icon: Award, desc: 'ENCG Tanger' },
  { value: '25+', label: 'Clients / jour', icon: Users, desc: 'Relation Client' },
];

export default function AboutVisual() {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  
  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Portrait moves up slower than scroll for a parallax effect
  const portraitY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  return (
    <div className="about-visual" ref={ref}>
      
      {/* Portrait Image with Parallax & Brand Border */}
      <motion.div 
        className="about-image-wrapper"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.img 
          src={portrait} 
          /* SEO OPTIMIZED ALT TAG */
          alt="Adil El Makhloufi, expert en marketing IA et fondateur d'Orchestra à Tanger, Maroc" 
          className="about-portrait"
          style={{ y: shouldReduceMotion ? 0 : portraitY }}
        />
      </motion.div>

      {/* Floating Stats Grid Below Image */}
      <div className="about-stats-grid">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div 
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              whileHover={shouldReduceMotion ? {} : { y: -3 }}
            >
              <div className="stat-icon"><Icon size={18} /></div>
              <div className="stat-info">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-desc">{stat.desc}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
// src/components/About/AboutContent.jsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap, Building2 } from 'lucide-react';
import './AboutContent.css';

const timelineData = [
  {
    year: 'Oct. 2026',
    title: 'Fondateur, ORCHESTRA MARKETING IA',
    company: 'Maroc',
    description: "Création d'une agence de marketing IA visant à aider les marques à se développer grâce à l'intelligence artificielle.",
    icon: Building2,
  },
  {
    year: 'Janv. 2025',
    title: 'Chargé de relation client',
    company: 'SONAC (Société Nordafricaine de Crédit)',
    description: "Gestion d'environ 25 clients par jour, constitution et suivi de dossiers de crédit, avec un taux de résolution de 90%.",
    icon: Briefcase,
  },
  {
    year: '2023 - Présent',
    title: 'Fondateur, NOOREL',
    company: 'Marque de vêtements',
    description: "Gestion complète de la marque (sourcing, stock, trésorerie). Croissance du CA de 40% en 2ème année, avec une marge brute moyenne de 45%.",
    icon: Briefcase,
  },
  {
    year: '2026 (en cours)',
    title: 'DCESS Marketing et Commerce International',
    company: 'ENCG Tanger',
    description: "Dernière année de Master (Bac+5) axée sur le marketing, le management et le commerce international.",
    icon: GraduationCap,
  },
];

export default function AboutContent() {
  const timelineRef = useRef(null);
  
  // Track the scroll progress of the timeline container
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 80%', 'end 40%'], // Starts filling when the timeline enters view
  });

  // Map the scroll progress to the scaleY of the gold line (from 0 to 1)
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="about-content">
      
      {/* Editorial Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="about-eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-text">À PROPOS DU FONDATEUR</span>
        </div>

        <h2 className="about-title">
          L'humain derrière<br />
          la <span className="about-title-accent">stratégie.</span>
        </h2>

        <p className="about-description">
          Je suis <strong>Adil El Makhloufi</strong>. Étudiant en Master (DCESS) et entrepreneur, 
          je combine mon expertise en développement commercial et marketing avec la puissance de l'IA. 
          Fondateur de la marque de vêtements <strong>NOOREL</strong> et d'<strong>ORCHESTRA</strong>, 
          je mets ma polyvalence et ma rigueur au service de la croissance des marques.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="about-timeline" ref={timelineRef}>
        
        {/* Static faint line (background) */}
        <div className="timeline-line-bg" aria-hidden="true" />
        
        {/* Animated gold line (fills as scroll) */}
        <motion.div
          className="timeline-line-progress"
          style={{ scaleY: lineScaleY }}
          aria-hidden="true"
        />

        {timelineData.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div 
              key={item.title}
              className="timeline-item"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Left side: Year and Dot */}
              <div className="timeline-left">
                <span className="timeline-year">{item.year}</span>
                <div className="timeline-dot">
                  <Icon size={16} />
                </div>
              </div>

              {/* Right side: Content */}
              <div className="timeline-right">
                <h3 className="timeline-title">{item.title}</h3>
                <span className="timeline-company">{item.company}</span>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
}
// src/components/Projects/ProjectCard.jsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import {
  ArrowUpRight,
  BarChart2,
  TrendingUp,
  ShieldCheck,
  GraduationCap,
} from 'lucide-react';
import './ProjectCard.css';

const getIcon = (category) => {
  if (category.includes('Agence')) return TrendingUp;
  if (category.includes('E-commerce')) return BarChart2;
  if (category.includes('Opérations')) return ShieldCheck;
  return GraduationCap;
};

export default function ProjectCard({ project, index }) {
  const Icon = getIcon(project.category);
  const cardRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  // Shapes drift in opposite directions as the card passes through viewport.
  // ✅ If the user prefers reduced motion, the output values are locked to 0.
  const shapeY1 = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -30]);
  const shapeY2 = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 30]);
  const yearY  = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -10]);

  return (
    <motion.article
      ref={cardRef}
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      whileHover="hover"
      variants={{
        hover: { y: -4 },
      }}
    >
      {/* Abstract Visual */}
      <div className="project-visual" style={{ backgroundColor: project.color }}>
        <div
          className="project-visual-bg"
          style={{
            background: `radial-gradient(circle at top right, ${project.accent}33, transparent 60%)`,
          }}
        />
        <div className="project-grid-pattern" aria-hidden="true" />

        <motion.div
          className="visual-element-1"
          style={{ backgroundColor: project.accent, y: shapeY1 }}
          variants={{ hover: { rotate: 15, scale: 1.05 } }}
        />
        <motion.div
          className="visual-element-2"
          style={{ borderColor: project.accent, y: shapeY2 }}
          variants={{ hover: { rotate: -15, scale: 1.05 } }}
        />

        <div
          className="project-badge"
          style={{ color: project.color, backgroundColor: project.accent }}
        >
          <Icon size={14} />
          <span>{project.category}</span>
        </div>

        <motion.span
          className="project-year"
          style={{ color: project.accent, y: yearY }}
        >
          {project.year}
        </motion.span>
      </div>

      {/* Content */}
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <motion.div
            className="project-arrow"
            variants={{ hover: { x: 5, y: -5 } }}
          >
            <ArrowUpRight size={20} />
          </motion.div>
        </div>

        <p className="project-desc">{project.description}</p>

        <div className="project-metrics">
          {project.metrics.map((metric, i) => (
            <div key={i} className="metric">
              <span className="metric-value">{metric.value}</span>
              <span className="metric-label">{metric.label}</span>
            </div>
          ))}
        </div>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>

        {/* CTA */}
        <a href="#contact" className="project-cta">
          <span>Voir le projet</span>
          <motion.span
            className="project-cta-arrow"
            variants={{ hover: { x: 4 } }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <ArrowUpRight size={14} />
          </motion.span>
        </a>
      </div>
    </motion.article>
  );
}
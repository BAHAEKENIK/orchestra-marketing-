// src/components/Projects/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from './projectsData';
import ProjectCard from './ProjectCard';
import ProjectsBackground from './ProjectsBackground';
import './Projects.css';

export default function Projects() {
  return (
    <section className="projects-section" id="projets">
      <ProjectsBackground />

      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="projects-eyebrow">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">ÉTUDES DE CAS</span>
            </div>

            <h2 className="projects-title">
              Des résultats<br />
              <span className="title-accent">concrets.</span>
            </h2>

            <p className="projects-intro">
              Découvrez comment nous appliquons la stratégie, l'IA et le marketing
              pour générer une croissance mesurable.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
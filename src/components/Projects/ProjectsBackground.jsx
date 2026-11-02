// src/components/Projects/ProjectsBackground.jsx
import React from 'react';
import './ProjectsBackground.css';

export default function ProjectsBackground() {
  return (
    <div className="projects-bg" aria-hidden="true">
      <div className="projects-bg-orb projects-bg-orb-1" />
      <div className="projects-bg-orb projects-bg-orb-2" />
      <div className="projects-bg-sweep" />
      <div className="projects-bg-grain" />
    </div>
  );
}
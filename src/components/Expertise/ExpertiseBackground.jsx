// src/components/Expertise/ExpertiseBackground.jsx
import React from 'react';
import './ExpertiseBackground.css';

export default function ExpertiseBackground() {
  return (
    <div className="expertise-bg" aria-hidden="true">
      {/* Large soft circles for depth */}
      <div className="bg-circle bg-circle-1"></div>
      <div className="bg-circle bg-circle-2"></div>
      
      {/* Radial gradient for lighting */}
      <div className="bg-light-sweep"></div>
      
      {/* Grain overlay */}
      <div className="bg-grain"></div>
    </div>
  );
}
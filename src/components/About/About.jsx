// src/components/About/About.jsx
import React from 'react';
import './About.css';
import AboutBackground from './AboutBackground';
import AboutVisual from './AboutVisual';
import AboutContent from './AboutContent';

export default function About() {
  return (
    <section className="about-section" id="apropos">
      <AboutBackground />

      <div className="about-container">
        
        {/* LEFT: Visual & Stats */}
        <div className="about-left">
          <AboutVisual />
        </div>

        {/* RIGHT: Story & Timeline */}
        <div className="about-right">
          <AboutContent />
        </div>

      </div>
    </section>
  );
}
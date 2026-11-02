// src/components/Expertise/Expertise.jsx
import React from 'react';
import './Expertise.css';
import ExpertiseBackground from './ExpertiseBackground';
import ExpertiseDecor from './ExpertiseDecor';
import ExpertiseHeader from './ExpertiseHeader';
import ExpertiseBenefits from './ExpertiseBenefits';
import ExpertiseArtwork from './ExpertiseArtwork';
import ServiceGrid from './ServiceGrid';

export default function Expertise() {
  return (
    <section className="expertise-section" id="services">
      <ExpertiseBackground />
      
      <div className="expertise-container">
        {/* LEFT COLUMN: Editorial text */}
        <div className="expertise-left">
          <ExpertiseHeader />
          <ExpertiseBenefits />
        </div>

        {/* RIGHT COLUMN: Decor (Back) -> Artwork (Middle) -> Cards (Front) */}
        <div className="expertise-right">
          <ExpertiseDecor />   {/* 1. Gold Orbits */}
          <ExpertiseArtwork /> {/* 2. 3D Artwork */}
          <ServiceGrid />      {/* 3. Service Cards */}
        </div>
      </div>
    </section>
  );
}
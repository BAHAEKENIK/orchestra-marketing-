// src/components/About/AboutBackground.jsx
import React from 'react';
import './AboutBackground.css';

export default function AboutBackground() {
  return (
    <div className="about-bg" aria-hidden="true">
      <div className="about-bg-circle about-bg-circle-1" />
      <div className="about-bg-circle about-bg-circle-2" />
      <div className="about-bg-light" />
      <div className="about-bg-grain" />
    </div>
  );
}
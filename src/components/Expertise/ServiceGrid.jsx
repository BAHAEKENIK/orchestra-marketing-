// src/components/Expertise/ServiceGrid.jsx
import React from 'react';
import ServiceCard from './ServiceCard';
import { servicesData } from './expertiseData';
import './ServiceGrid.css';

export default function ServiceGrid() {
  return (
    <div className="service-grid">
      {servicesData.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}
    </div>
  );
}
// src/components/Expertise/ExpertiseBenefits.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Zap, Handshake } from 'lucide-react';
import './ExpertiseBenefits.css';

const benefits = [
  { icon: Trophy, label: 'Stratégie sur mesure' },
  { icon: Zap, label: 'Résultats concrets' },
  { icon: Handshake, label: 'Partenariat durable' },
];

export default function ExpertiseBenefits() {
  return (
    <motion.div
      className="exp-benefits"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {benefits.map((benefit, index) => {
        const Icon = benefit.icon;
        return (
          <React.Fragment key={benefit.label}>
            <div className="benefit-item">
              <div className="benefit-icon">
                <Icon size={18} strokeWidth={1.75} />
              </div>
              <span className="benefit-label">{benefit.label}</span>
            </div>
            {index < benefits.length - 1 && (
              <span className="benefit-divider" aria-hidden="true" />
            )}
          </React.Fragment>
        );
      })}
    </motion.div>
  );
}
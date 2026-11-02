import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Cog, TrendingUp, Target, ArrowUpRight } from 'lucide-react';
import './ServicesStrip.css';

const services = [
  {
    icon: <Megaphone size={22} />,
    title: 'Smart Ads',
    desc: 'Publicité ciblée pilotée par l\u2019IA',
  },
  {
    icon: <Cog size={22} />,
    title: 'Automatisation',
    desc: 'Processus marketing optimisés',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Growth',
    desc: 'Croissance mesurable & durable',
  },
  {
    icon: <Target size={22} />,
    title: 'Conseil',
    desc: 'Stratégie & audit personnalisés',
  },
];

export default function ServicesStrip() {
  return (
    <section className="services-strip" aria-label="Nos services clés">
      <div className="services-strip-container">
        {services.map((service, index) => (
          <motion.a
            key={service.title}
            href="#services"
            className="services-strip-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="strip-icon">{service.icon}</div>

            <div className="strip-text">
              <span className="strip-title">{service.title}</span>
              <span className="strip-desc">{service.desc}</span>
            </div>

            <div className="strip-arrow" aria-hidden="true">
              <ArrowUpRight size={16} />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
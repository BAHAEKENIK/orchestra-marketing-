import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  MapPin,
  Megaphone,
  Settings,
  TrendingUp,
  MessageCircle,
  Brain,
} from 'lucide-react';
import HeroVisual from '../HeroVisual/HeroVisual';
import './Hero.css';

const serviceHighlights = [
  { icon: <Megaphone size={20} />, title: 'Smart Ads', desc: 'Publicité intelligente' },
  { icon: <Settings size={20} />, title: 'Automation', desc: 'Processus optimisés' },
  { icon: <TrendingUp size={20} />, title: 'Growth', desc: 'Croissance durable' },
];

const bottomServices = [
  { icon: <Brain size={24} strokeWidth={1.5} />, title: 'Intelligence artificielle', desc: 'Des solutions intelligentes' },
  { icon: <Megaphone size={24} strokeWidth={1.5} />, title: 'Marketing digital', desc: 'Des campagnes qui convertissent' },
  { icon: <Settings size={24} strokeWidth={1.5} />, title: 'Automatisation', desc: 'Gagnez du temps' },
  { icon: <TrendingUp size={24} strokeWidth={1.5} />, title: 'Croissance', desc: 'Des résultats mesurables' },
];

// Variants for the bottom strip stagger animation
const stripContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const stripItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Hero() {
  // Creative pre-filled message for the main CTA
  const whatsappMessage = encodeURIComponent("Bonjour Orchestra Marketing IA, je suis sur votre site et je souhaite discuter de mon projet. Comment l'IA peut-elle accélérer ma croissance ? 🚀");
  const whatsappUrl = `https://wa.me/212682159130?text=${whatsappMessage}`;

  return (
    <section className="hero" id="accueil">
      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <motion.div
            className="hero-eyebrow-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <span className="eyebrow-line"></span>
            <span className="hero-eyebrow">IA + MARKETING + CROISSANCE</span>
          </motion.div>

          {/* Fast CSS Reveal for LCP */}
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Faites grandir<br />
            votre <span>marque.</span>
          </motion.h1>

          {/* LCP ELEMENT: Instant visibility */}
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Basée à Tanger, <strong>Orchestra Marketing IA</strong>, l'agence dirigée par Adil El Makhloufi, transforme votre croissance grâce à des stratégies marketing IA, automatisées et orientées résultats au Maroc.
          </motion.p>

          {/* 3 Service Highlights */}
          <motion.div
            className="hero-highlights"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {serviceHighlights.map((item, index) => (
              <div key={index} className="highlight-item">
                <div className="highlight-icon">{item.icon}</div>
                <div className="highlight-text">
                  <span className="h-title">{item.title}</span>
                  <span className="h-desc">{item.desc}</span>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-primary"
            >
              <MessageCircle size={18} /> Discuter sur WhatsApp <ArrowUpRight size={18} />
            </a>
            
            <a href="#services" className="hero-secondary">
              Découvrir l'agence
            </a>
          </motion.div>

          <motion.div
            className="hero-location"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <MapPin size={16} />
            <span>Tanger, Maroc | Disponible pour vos projets partout</span>
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <HeroVisual />
      </div>

      {/* ✅ NEW BOTTOM SERVICES STRIP WITH LAZY-LOAD STAGGER ANIMATION */}
      <motion.div 
        className="hero-bottom-strip"
        variants={stripContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="strip-dots" aria-hidden="true"></div>
        
        <div className="strip-items">
          {bottomServices.map((service, index) => (
            <React.Fragment key={index}>
              <motion.div className="strip-item" variants={stripItemVariants}>
                <div className="strip-icon">{service.icon}</div>
                <div className="strip-text">
                  <span className="strip-title">{service.title}</span>
                  <span className="strip-desc">{service.desc}</span>
                </div>
              </motion.div>
              {index < bottomServices.length - 1 && (
                <div className="strip-divider" aria-hidden="true"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        <motion.div className="strip-handwritten" variants={stripItemVariants}>
          <span>L'IA au service</span>
          <span>de votre croissance</span>
          <svg viewBox="0 0 150 20" className="handwritten-underline" aria-hidden="true">
            <path d="M5,15 Q50,5 145,10" fill="none" stroke="#C58A35" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
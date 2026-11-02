// src/components/Footer/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from '../Icons/BrandIcons';
import logo from '../../assets/images/orchestra_logo.svg';
import './Footer.css';

export default function Footer() {
  // Automatically updates the year (e.g., 2025, 2026, etc.)
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Expertises', href: '#services' },
    { name: 'Projets', href: '#projets' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Contact', href: '#contact' },
  ];

  const socials = [
    { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/adil-el-makhloufi-583565346/', label: 'LinkedIn' },
    { icon: InstagramIcon, href: 'https://www.instagram.com/orchestra.marketing.ai/', label: 'Instagram Agence' },
    { icon: InstagramIcon, href: 'https://www.instagram.com/ing.elmakhloufi.adel/', label: 'Instagram Fondateur' },
    { icon: MessageCircle, href: 'https://wa.me/212682159130', label: 'WhatsApp' },
  ];

  return (
    <footer className="footer-section">
      {/* Background Decor */}
      <div className="footer-bg-glow" aria-hidden="true" />
      <div className="footer-bg-grain" aria-hidden="true" />

      <div className="footer-container">
        
        {/* TOP: Brand & Navigation & Socials */}
        <div className="footer-top">
          
          {/* Column 1: Brand */}
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#accueil" className="footer-logo-link">
              <img src={logo} alt="Orchestra Logo" className="footer-logo-img" />
              <span className="footer-brand-name">ORCHESTRA</span>
            </a>
            <p className="footer-tagline">
              L'intelligence artificielle au service<br /> de votre croissance.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div 
            className="footer-nav"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Socials & Back to top */}
          <motion.div 
            className="footer-socials-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="footer-heading">Restons connectés</h4>
            <div className="footer-socials">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={index} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="social-icon-btn"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>

            <button 
              className="back-to-top" 
              onClick={handleScrollToTop}
              aria-label="Retour en haut de page"
            >
              <ArrowUp size={16} />
              <span>Retour en haut</span>
            </button>
          </motion.div>

        </div>

        {/* BOTTOM: Copyright & Credits */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Orchestra Marketing IA. Tous droits réservés.
          </p>
          <p className="credits">
            Conçu & développé par{' '}
            <a 
              href="https://www.linkedin.com/in/bahae-kenikssi-40414021b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="developer-link"
            >
              Bahae Kenikssi
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
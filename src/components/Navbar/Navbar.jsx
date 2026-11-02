// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import logo from '../../assets/images/orchestra_logo.svg';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to apply glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Creative pre-filled message for the top navigation CTA
  const whatsappMessage = encodeURIComponent("Bonjour Orchestra Marketing IA, je suis sur votre site et je souhaite discuter d'une stratégie de croissance pour ma marque. Êtes-vous disponible pour un échange ? 🚀");
  const whatsappUrl = `https://wa.me/212682159130?text=${whatsappMessage}`;

  // Ordered to match the page layout
  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Expertises', href: '#services' },
    { name: 'À propos', href: '#apropos' },
    { name: 'Projets', href: '#projets' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* LOGO */}
        <motion.a 
          href="#accueil" 
          className="navbar-logo" 
          aria-label="Orchestra Accueil"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img src={logo} alt="Orchestra Marketing IA" className="logo-img" />
          <div className="logo-text">
            <span className="logo-title">ORCHESTRA</span>
            <span className="logo-subtitle">MARKETING IA</span>
          </div>
        </motion.a>

        {/* DESKTOP NAV */}
        <nav className="navbar-desktop">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <motion.a 
                  href={link.href} 
                  className="nav-link"
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {link.name}
                </motion.a>
              </li>
            ))}
          </ul>
          
          <motion.a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-cta"
            whileHover="hover"
            initial="initial"
          >
            <span>Discuter sur WhatsApp</span>
            <motion.span
              variants={{
                initial: { x: 0, y: 0 },
                hover: { x: 3, y: -3 }
              }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <ArrowUpRight size={18} />
            </motion.span>
          </motion.a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            className="navbar-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={() => setIsOpen(false)}>{link.name}</a>
                </li>
              ))}
            </ul>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-cta mobile-cta"
            >
              Discuter sur WhatsApp <ArrowUpRight size={18} />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
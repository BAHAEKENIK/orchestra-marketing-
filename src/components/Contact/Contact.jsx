// src/components/Contact/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowUpRight, Sparkles } from 'lucide-react';
import { LinkedinIcon, InstagramIcon } from '../Icons/BrandIcons';
import './Contact.css';

export default function Contact() {
  // WhatsApp configuration (Same number as Navbar)
  const whatsappMessage = encodeURIComponent("Bonjour Orchestra Marketing IA, je suis sur votre site et je souhaite discuter d'une stratégie de croissance pour ma marque. Êtes-vous disponible pour un échange ? 🚀");
  const whatsappUrl = `https://wa.me/212682159130?text=${whatsappMessage}`;

  const linkedinUrl = "https://www.linkedin.com/in/adil-el-makhloufi-583565346/";
  const igFounderUrl = "https://www.instagram.com/ing.elmakhloufi.adel/";
  const igAgencyUrl = "https://www.instagram.com/orchestra.marketing.ai/";

  return (
    <section className="contact-section" id="contact">
      {/* Background Decor */}
      <div className="contact-bg-glow" aria-hidden="true" />
      <div className="contact-bg-grain" aria-hidden="true" />

      <div className="contact-container">
        
        {/* LEFT: Editorial CTA */}
        <div className="contact-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-eyebrow">
              <Sparkles size={16} className="eyebrow-icon" />
              <span className="eyebrow-text">PRÊT À DÉCOLLER ?</span>
            </div>

            <h2 className="contact-title">
              Donnons vie à<br />
              votre <span className="title-accent">ambition.</span>
            </h2>

            <p className="contact-description">
              Que ce soit pour déployer une stratégie marketing IA, automatiser vos processus 
              ou propulser votre marque, je suis à votre écoute. Échangeons directement.
            </p>

            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-whatsapp-btn"
            >
              <MessageCircle size={20} />
              <span>Discuter sur WhatsApp</span>
              <ArrowUpRight size={18} />
            </a>
            
            <div className="contact-availability">
              <span className="pulse-dot" />
              <span>Disponible pour de nouveaux projets · Tanger, Maroc</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: The Digital Business Card */}
        <motion.div 
          className="contact-right"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="contact-hub">
            <div className="contact-hub-header">
              <span className="hub-label">Direct & Sans intermédiaire</span>
            </div>

            {/* LinkedIn */}
            <a href={linkedinUrl} target="_blank" rel="noreferrer" className="social-link">
              <div className="social-icon-wrapper linkedin">
                <LinkedinIcon size={20} />
              </div>
              <div className="social-info">
                <span className="social-platform">LinkedIn</span>
                <span className="social-handle">Adil El Makhloufi</span>
              </div>
              <ArrowUpRight size={18} className="social-arrow" />
            </a>

            {/* Instagram Agence */}
            <a href={igAgencyUrl} target="_blank" rel="noreferrer" className="social-link">
              <div className="social-icon-wrapper instagram">
                <InstagramIcon size={20} />
              </div>
              <div className="social-info">
                <span className="social-platform">Instagram · Agence</span>
                <span className="social-handle">@orchestra.marketing.ai</span>
              </div>
              <ArrowUpRight size={18} className="social-arrow" />
            </a>

            {/* Instagram Fondateur */}
            <a href={igFounderUrl} target="_blank" rel="noreferrer" className="social-link">
              <div className="social-icon-wrapper instagram">
                <InstagramIcon size={20} />
              </div>
              <div className="social-info">
                <span className="social-platform">Instagram · Fondateur</span>
                <span className="social-handle">@ing.elmakhloufi.adel</span>
              </div>
              <ArrowUpRight size={18} className="social-arrow" />
            </a>

            <div className="contact-hub-footer">
              <span>Ou par email :</span>
              <a href="mailto:adilmakhloufi624@gmail.com" className="email-link">
                adilmakhloufi624@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
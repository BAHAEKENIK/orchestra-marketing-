import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import portrait from '../../assets/images/adil-portrait.png';
// ✅ Import your new background images
import pcBackground from '../../assets/images/logo/pc_background.png';
import phoneBackground from '../../assets/images/logo/phone_background.png';
import './HeroVisual.css';

// --- CUSTOM GROWTH CHART ICON ---
const GrowthChartIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="22" width="7" height="12" rx="1.5" fill="#C58A35" />
    <rect x="13" y="14" width="7" height="20" rx="1.5" fill="#C58A35" />
    <rect x="24" y="6" width="7" height="28" rx="1.5" fill="#C58A35" />
    <path d="M6 18L17 9L28 2" stroke="#C58A35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 2H29V9" stroke="#C58A35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// --- NEW OFFICIAL BRAND SVGs ---
const MetaIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M16.5 2.5c-2.3 0-4.1 1.4-5.1 3.3-1.1-1.9-2.9-3.3-5.1-3.3-3.6 0-6.3 3.1-6.3 7 0 4.4 3.4 7.3 6.7 7.3 2.1 0 3.9-1.3 4.7-3 1 1.7 2.7 3 4.7 3 3.2 0 6.7-2.9 6.7-7.3 0-3.9-2.7-7-6.3-7zm-10.2 12c-1.7 0-3.1-1.5-3.1-3.4 0-1.9 1.4-3.4 3.1-3.4 1.5 0 2.7 1.1 3.5 2.5-.9 1.4-2.1 4.3-3.5 4.3zm10.2 0c-1.5 0-2.7-1.1-3.5-2.5.9-1.4 2.1-4.3 3.5-4.3 1.7 0 3.1 1.5 3.1 3.4 0 1.9-1.4 3.4-3.1 3.4z" fill="#A55A35" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 48 48" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" fill="#000"/>
    <path d="M20.592 7.686a4.793 4.793 0 0 1-3.77-4.245V3h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V9.687a8.182 8.182 0 0 0 4.773 1.526V7.79a4.831 4.831 0 0 1-1.003-.104z" fill="#FE2C55" opacity="0.6"/>
    <path d="M19.589 8.686a4.793 4.793 0 0 1-3.77-4.245V4h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V10.687a8.182 8.182 0 0 0 4.773 1.526V8.79a4.831 4.831 0 0 1-1.003-.104z" fill="#25F4EE" opacity="0.6"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.73 3.73 0 01-1.38-.9 3.73 3.73 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38C1.35 2.68.93 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13.67.67 1.34 1.08 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.72 2.13-1.38.67-.67 1.08-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.72-1.46-1.38-2.13C21.32 1.35 20.65.93 19.86.63 19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zM12 16a4 4 0 110-8 4 4 0 010 8zm6.41-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" fill="url(#instagram-gradient)"/>
    <defs>
      <linearGradient id="instagram-gradient" x1="2.16" y1="21.84" x2="21.84" y2="2.16" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDD35E"/>
        <stop offset="0.25" stopColor="#F45C3C"/>
        <stop offset="0.5" stopColor="#DC2743"/>
        <stop offset="0.75" stopColor="#CC2366"/>
        <stop offset="1" stopColor="#BC1888"/>
      </linearGradient>
    </defs>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function HeroVisual() {
  const whatsappMessage = encodeURIComponent("Bonjour Orchestra Marketing IA, je visite votre site et je souhaite discuter de mon projet. Comment l'IA peut-elle booster ma croissance ? 🚀");
  const whatsappUrl = `https://wa.me/212682159130?text=${whatsappMessage}`;

  return (
    <div className="hero-visual">

      {/* 1. PORTRAIT + NEW BACKGROUND IMAGES */}
      <motion.div
        className="portrait-wrapper"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      >
        <div className="hero-logo-backdrop" aria-hidden="true">
          <div className="logo-color-aura"></div>
          
          <motion.div
            className="hero-logo-motion"
            initial={{ scale: 0.8, opacity: 0, rotate: -10, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, rotate: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          >
            {/* ✅ Responsive Picture Element for the new backgrounds */}
            <picture>
              <source media="(max-width: 1024px)" srcSet={phoneBackground} />
              <img 
                src={pcBackground} 
                alt="Orchestra Marketing IA Background" 
                className="default-logo-img" 
                width="1000" 
                height="1000"
              />
            </picture>
          </motion.div>
        </div>

        {/* ✅ PREMIUM BLUR-UP LOADING EFFECT ON PORTRAIT */}
        <motion.img 
          src={portrait} 
          alt="Adil El Makhloufi, fondateur de l'agence de marketing IA Orchestra à Tanger, Maroc" 
          className="portrait-img" 
          width="600"
          height="800"
          fetchPriority="high"
          loading="eager"
          initial={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        />
      </motion.div>

      {/* 2. FLOATING CARDS */}
      
      {/* --- +300% CARD --- */}
      <motion.div
        className="floating-card card-growth-stats"
        initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="growth-icon-wrapper">
          <GrowthChartIcon />
        </div>
        <div className="card-text">
          <span className="card-title">+300%</span>
          <span className="card-desc">de croissance<br/>grâce à l'IA</span>
        </div>
        <div className="card-arrow-top">
          <ArrowUpRight size={16} color="#C58A35" />
        </div>
      </motion.div>

      {/* --- UPDATED PLATFORMS CARD --- */}
      <motion.div
        className="floating-card card-platforms"
        initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="platforms-list">
          <div className="platform-item">
            <div className="platform-icon"><MetaIcon /></div>
            <span>Meta Ads</span>
          </div>
          <div className="platform-item">
            <div className="platform-icon"><GoogleIcon /></div>
            <span>Google Ads</span>
          </div>
          <div className="platform-item">
            <div className="platform-icon"><TikTokIcon /></div>
            <span>TikTok Ads</span>
          </div>
          <div className="platform-item">
            <div className="platform-icon"><InstagramIcon /></div>
            <span>Instagram Ads</span>
          </div>
        </div>
      </motion.div>

      {/* --- WHATSAPP CARD (CLICKABLE) --- */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-card card-whatsapp"
        initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 1.4 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        style={{ textDecoration: 'none' }}
      >
        <div className="wa-icon"><WhatsAppIcon /></div>
        <div className="card-text">
          <span className="card-title">Contactez-moi</span>
          <span className="card-desc">Je réponds rapidement</span>
        </div>
        <div className="wa-arrow"><ArrowRight size={16} color="white" /></div>
      </motion.a>

      {/* --- ANALYTICS CARD --- */}
      <motion.div
        className="floating-card card-analytics"
        initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <div className="analytics-content">
          <div className="analytics-header">Plus de clients</div>
          <div className="analytics-desc">Plus de résultats ↗</div>
        </div>
        
        <div className="analytics-chart-wrapper">
          <svg viewBox="0 0 120 40" className="analytics-chart" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C58A35" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#C58A35" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            
            <motion.path
              d="M0,35 C20,35 30,10 50,15 C70,20 80,30 120,5 L120,40 L0,40 Z"
              fill="url(#chartGradient)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            
            <motion.path
              d="M0,35 C20,35 30,10 50,15 C70,20 80,30 120,5"
              fill="none"
              stroke="#C58A35"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </motion.div>

    </div>
  );
}
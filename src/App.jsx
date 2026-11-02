// src/App.jsx
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Expertise from './components/Expertise/Expertise';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/global.css';
import SEO from './components/SEO/SEO';

export default function App() {
  return (
    <div className="hero-background-wrapper">
      <SEO 
        title="Orchestra Marketing IA | Agence Marketing IA à Tanger, Maroc"
        description="Découvrez Orchestra Marketing IA, l'agence fondée par Adil El Makhloufi à Tanger. Nous transformons votre croissance grâce à l'intelligence artificielle, le Smart Ads et l'automatisation."
        keywords="Orchestra Marketing IA, Adil El Makhloufi, Agence IA Tanger, Marketing IA Maroc, Automatisation marketing, Smart Ads Maroc, Consultant IA Tanger"
        url="https://orchestra-marketing.ai"
        image="/assets/images/orchestra-og-image.jpg"
      />
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
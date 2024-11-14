import React from 'react';
import NavBar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectGallery from './components/ProjectGallery';
import TestimonialsSection from './components/TestimonialsSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import StickyContactBar from './components/StickyContactBar';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

function App() {
  return (
    <div className="bg-background text-text font-sans">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectGallery />
      <TestimonialsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
      <StickyContactBar />
      <ScrollToTop />
    </div>
  );
}

export default App;

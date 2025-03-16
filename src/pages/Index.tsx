
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Manifesto from '@/components/Manifesto';
import Testimonials from '@/components/Testimonials';
import WorkProcess from '@/components/WorkProcess';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import TransitionEffect from '@/components/TransitionEffect';

const Index: React.FC = () => {
  useEffect(() => {
    // Add smooth scrolling behavior for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          
          // Optional: Update URL with hash without scrolling
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <TransitionEffect />
      <Header />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Manifesto />
        <About />
        <Testimonials />
        <WorkProcess />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

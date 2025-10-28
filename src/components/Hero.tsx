
import React, { useRef, useEffect, useState } from 'react';
import AnimatedText from './AnimatedText';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);
  
  const handleScrollClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <>
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to content
      </a>
      
      <section id="home" ref={heroRef} className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-32 relative overflow-hidden pt-20 md:pt-32">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(52,152,219,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(52,152,219,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-60" aria-hidden="true" />
        
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />
        
        {/* Main content */}
        <div className="max-w-7xl w-full mx-auto z-10">
          <div className="relative flex flex-col items-start">
            {/* Location Badge */}
            <span className="text-sm md:text-base font-medium tracking-wider mb-4 md:mb-6 inline-flex items-center py-1 px-4 rounded-full bg-primary/10 text-primary backdrop-blur-sm animate-fade-in">
              Barcelona
            </span>
            
            {/* Typography hero section */}
            <div className="flex flex-col mb-8 md:mb-12 w-full">
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-display font-bold leading-tight tracking-tight mb-6 opacity-0 animate-slide-up animation-delay-300">
                Alfonso — Product Designer & DesignOps Specialist
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8 opacity-0 animate-slide-up animation-delay-500">
                I help product teams ship faster by building design systems, optimizing DesignOps workflows, and turning research insights into measurable outcomes.
              </p>
            </div>
            
            {/* Call to action */}
            <div className="flex flex-col sm:flex-row items-start gap-4 w-full opacity-0 animate-slide-up animation-delay-700">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" 
                onClick={handleScrollClick}
              >
                View Selected Projects
              </a>
              
              <a 
                href="/alfonso-cv.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border bg-background text-foreground font-medium transition-all hover:bg-muted hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Download CV (PDF)
              </a>
              
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border bg-background text-foreground font-medium transition-all hover:bg-muted hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center opacity-0 animate-fade-in animation-delay-2000">
          <button onClick={handleScrollClick} className="p-2 text-muted-foreground animate-float" aria-label="Scroll down">
            <ChevronDown size={24} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;

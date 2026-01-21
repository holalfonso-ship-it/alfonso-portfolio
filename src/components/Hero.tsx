
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
    <section id="home" ref={heroRef} className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-32 relative overflow-hidden pt-20 md:pt-32">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(52,152,219,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(52,152,219,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-60" />
      
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      {/* Main content */}
      <div className="max-w-7xl w-full mx-auto z-10">
        <div className="relative flex flex-col items-start">
          {/* Badge */}
          <span className="text-sm md:text-base font-medium tracking-wider mb-2 md:mb-6 inline-flex items-center py-1 px-4 rounded-full bg-primary/10 text-primary backdrop-blur-sm animate-fade-in">
            Design Ops Specialist
          </span>
          
          {/* Typography hero section */}
          <div className="flex flex-col md:flex-row mb-8 md:mb-16 w-full">
            <div className="w-full md:w-3/4">
              <h1 className="text-6xl md:text-8xl xl:text-9xl font-display font-bold leading-tight md:leading-none tracking-tighter mb-6 md:mb-8">
                <span className="block text-2xl md:text-3xl tracking-widest text-muted-foreground mb-2 opacity-0 animate-slide-up animation-delay-200 font-bold">Hi, I am Alfonso</span>
                <span className="block opacity-0 animate-slide-up animation-delay-500 italic">
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">DesignOps</span>
                </span>
                <span className="block opacity-0 animate-slide-up animation-delay-700">
                  & Senior <span className="text-primary">Product</span>
                </span>
                <span className="block opacity-0 animate-slide-up animation-delay-900">
                  <span className="text-primary">Designer</span>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-slide-up animation-delay-1000">
                Helping teams create more efficient design workflows and processes to scale creativity.
              </p>
            </div>
            
            <div className="hidden md:flex md:w-1/4 items-end justify-end opacity-0 animate-fade-in animation-delay-1200">
              <div className="flex flex-col gap-3 text-right">
                <div className="flex items-center justify-end gap-2">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Barcelona</span>
                  <div className="w-16 h-[1px] bg-muted-foreground/30"></div>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Design Systems</span>
                  <div className="w-12 h-[1px] bg-muted-foreground/30"></div>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Product design</span>
                  <div className="w-8 h-[1px] bg-muted-foreground/30"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 mt-4 md:mt-0 w-full">
            <a href="#projects" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium transition-transform hover:scale-105 active:scale-95 relative overflow-hidden group opacity-0 animate-slide-up animation-delay-1200" onClick={handleScrollClick}>
              <span className="absolute inset-0 w-full h-full bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <span className="relative">View my work</span>
            </a>
            
            <div className="text-muted-foreground flex flex-col gap-1 opacity-0 animate-slide-up animation-delay-1400">
              <p className="text-sm">Specialized in</p>
              <p className="text-base">Product Design · UI Design · Design Systems · DesignOps · Workflows</p>
            </div>
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
  );
};

export default Hero;

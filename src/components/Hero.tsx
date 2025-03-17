
import React, { useRef, useEffect, useState } from 'react';
import AnimatedText from './AnimatedText';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  const handleScrollClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculate gradient position based on mouse
  const gradientStyle = {
    background: isMobile 
      ? 'radial-gradient(70% 70% at 50% 50%, rgba(var(--primary-rgb), 0.2) 0%, rgba(var(--primary-rgb), 0) 100%)' 
      : `radial-gradient(70% 70% at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(var(--primary-rgb), 0.25) 0%, rgba(var(--primary-rgb), 0) 100%)`
  } as React.CSSProperties;
  
  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-32 relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-500 ease-out" 
        style={{...gradientStyle, '--primary-rgb': '52, 152, 219'} as React.CSSProperties}
      />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="hidden md:block absolute top-1/2 right-1/4 transform rotate-45">
          <Sparkles className="text-primary/20 w-16 h-16" />
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(52,152,219,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(52,152,219,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-60" />
      
      <div className="max-w-7xl w-full mx-auto z-10 opacity-0 animate-fade-in animation-delay-200">
        <div className="flex flex-col items-start mb-6">
          <span className="text-sm md:text-base font-medium tracking-wider mb-2 md:mb-4 inline-flex items-center py-1 px-4 rounded-full bg-primary/10 text-primary backdrop-blur-sm">
            Design Ops Specialist
          </span>
          
          <h1 className="text-4xl md:text-7xl font-display font-bold leading-tight md:leading-tight mb-6 md:mb-8 tracking-tight">
            <AnimatedText 
              text="Hola, I'm Alfonso a" 
              className="block mb-2"
              delay={100}
              once
            />
            <AnimatedText 
              text="Product Designer turned" 
              className="block mb-2"
              delay={300}
              once
            />
            <AnimatedText 
              text="Design Ops specialist" 
              className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent block"
              delay={500}
              once
            />
            <AnimatedText 
              text="🌎 Barcelona · 🚀 Design Systems · 💎 Process"
              className="text-2xl md:text-3xl mt-4 font-normal"
              delay={700}
              once
            />
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-slide-up animation-delay-1000">
            Helping teams create more efficient design workflows and processes to scale creativity.
          </p>
        </div>
        
        <div className="mt-8 md:mt-12 opacity-0 animate-slide-up animation-delay-1200">
          <a 
            href="#projects" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium transition-transform hover:scale-105 active:scale-95 relative overflow-hidden group"
            onClick={handleScrollClick}
          >
            <span className="absolute inset-0 w-full h-full bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
            <span className="relative">View my work</span>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-0 right-0 flex justify-center opacity-0 animate-fade-in animation-delay-2000">
        <button
          onClick={handleScrollClick}
          className="p-2 text-muted-foreground animate-float"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;


import React, { useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const handleScrollClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-32 relative overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_50%_50%,rgba(var(--primary-rgb),0.1)_0%,rgba(var(--primary-rgb),0)_100%)]" 
        style={{ '--primary-rgb': '52, 152, 219' } as React.CSSProperties} 
      />
      
      <div className="max-w-7xl w-full mx-auto z-10 opacity-0 animate-fade-in animation-delay-200">
        <div className="flex flex-col items-start mb-6">
          <span className="text-sm md:text-base font-medium tracking-wider mb-2 md:mb-4 inline-flex items-center py-1 px-4 rounded-full bg-primary/10 text-primary">
            Design Ops Specialist
          </span>
          
          <h1 className="text-4xl md:text-7xl font-display font-bold leading-tight md:leading-tight mb-6 md:mb-8 tracking-tight">
            <AnimatedText text="Hola, I'm Alfonso a" className="block mb-2" delay={100} once />
            <AnimatedText text="Product Designer turned" className="block mb-2" delay={300} once />
            <AnimatedText text="Design Ops specialist 😎" className="text-gradient block" delay={500} once />
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-slide-up animation-delay-1000">Based in sunny Barcelona, focus on helping teams to create more efficient design processes.</p>
        </div>
        
        <div className="mt-8 md:mt-12 opacity-0 animate-slide-up animation-delay-1200">
          <a 
            href="#projects" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium transition-transform hover:scale-105 active:scale-95" 
            onClick={handleScrollClick}
          >
            View my work
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

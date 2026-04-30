import React, { useRef, useEffect, useState } from 'react';
import { ChevronDown, Download, MapPin } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [cvUrl, setCvUrl] = useState<string | null>(null);

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
    const fetchLatestCV = async () => {
      try {
        const { data, error } = await supabase.storage
          .from('cv_files')
          .list('', { limit: 1, sortBy: { column: 'created_at', order: 'desc' } });
        if (error) throw error;
        if (data && data.length > 0) {
          const { data: { publicUrl } } = supabase.storage
            .from('cv_files')
            .getPublicUrl(data[0].name);
          setCvUrl(publicUrl);
        }
      } catch (error) {
        console.error('Error fetching CV:', error);
      }
    };
    fetchLatestCV();
  }, []);

  const handleScrollClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    window.open(cvUrl || '/alfonso-cv.pdf', '_blank');
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-[88vh] px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(52,152,219,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(52,152,219,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-60" />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />

      {/* Main content */}
      <div className="max-w-7xl w-full mx-auto min-h-[88vh] flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20 z-10 relative">

        {/* LEFT: Text content (60%) */}
        <div className="w-full md:w-3/5 flex flex-col items-start order-2 md:order-1 py-24 md:py-0">

          {/* Badge */}
          <span className="text-sm font-medium tracking-wider mb-4 md:mb-5 inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 text-primary backdrop-blur-sm opacity-0 animate-fade-in animation-delay-200">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Exploring new opportunities
          </span>

          {/* Heading */}
          <h1 className="text-5xl md:text-5xl xl:text-6xl font-display font-bold leading-tight tracking-tighter mb-4 md:mb-5">
            <span className="block text-lg md:text-xl font-medium tracking-widest text-muted-foreground mb-2 opacity-0 animate-slide-up animation-delay-300">
              Hi, I'm Alfonso
            </span>
            <span className="block opacity-0 animate-slide-up animation-delay-500">
              I make design
            </span>
            <span className="block opacity-0 animate-slide-up animation-delay-700">
              teams{' '}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                work better.
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-6 md:mb-8 opacity-0 animate-slide-up animation-delay-900 leading-relaxed">
            Senior Product Designer with 10+ years building digital products for 1M+ users.
            Specialising in marketplace design, DesignOps, and AI-native workflows.
          </p>

          {/* CTA */}
          <div className="mb-6 md:mb-8 opacity-0 animate-slide-up animation-delay-1000">
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium transition-transform hover:scale-105 active:scale-95 relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download my CV
              </span>
            </button>
          </div>

          {/* Personal tags */}
          <div className="flex flex-wrap gap-2 md:gap-3 opacity-0 animate-fade-in animation-delay-1200">
            <span className="text-sm font-medium px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-muted/40 border border-border/60 text-foreground/80">
              10+ years in product design
            </span>
            <span className="text-sm font-medium px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-muted/40 border border-border/60 text-foreground/80">
              AI × Design enthusiast
            </span>
          </div>
        </div>

        {/* RIGHT: Photo (40%) */}
        <div className="w-full md:w-2/5 flex justify-center md:justify-end order-1 md:order-2 opacity-0 animate-fade-in animation-delay-400">
          <div className="relative">
            {/* Photo frame — height capped to viewport on small screens */}
            <div className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-72 md:h-[400px] md:max-h-[54vh] lg:w-80 lg:h-[460px] lg:max-h-[60vh] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/alfonso-hero.png"
                alt="Alfonso Zamorano — DesignOps Specialist"
                className="w-full h-full object-cover object-[center_15%]"
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/20 to-transparent" />
            </div>

            {/* Decorative offset borders */}
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl border border-primary/20 -z-10" />
            <div className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl border border-primary/10 -z-20" />

            {/* Floating label — positioned inside bottom edge */}
            <div className="absolute bottom-4 -left-4 md:-left-6 bg-card border border-border rounded-2xl px-3 py-2.5 shadow-lg backdrop-blur-sm">
              <p className="text-xs text-muted-foreground">Based in</p>
              <p className="text-sm font-semibold">Barcelona</p>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center opacity-0 animate-fade-in animation-delay-2000">
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

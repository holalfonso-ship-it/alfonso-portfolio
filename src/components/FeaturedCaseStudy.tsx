import React, { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import AnimatedText from '@/components/AnimatedText';
import aiCleanerHero from '@/assets/ai-cleaner-hero.png';

const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) {setIsVisible(true);observer.unobserve(el);}},
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, className: `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}` };
};

const FeaturedCaseStudy: React.FC = () => {
  const tags = ['DesignOps', 'AI Integration', 'Team Leadership'];

  {/* const actionMilestones = [
  { title: 'AiCleaner: Design System Governance & AI Automation Leadership', description: 'Led the cross-functional alignment between design, engineering, and product to establish a scalable cleaning ecosystem.' },
  { title: 'AI-Powered Prototyping', description: 'Integrated Figma AI and Gemini Copilots to reduce high-fidelity prototyping time by 40%.' },
  { title: 'Cross-Functional Leadership', description: 'Led a cross-functional team of 6 designers, implementing DesignOps frameworks that reduced delivery friction by 25%' }]; */}


  const results = [
  { value: '+30%', label: 'Product delivery acceleration through Design System scaling' },
  { value: '4.5/5', label: 'Stars rating & Top 100 Utilities on App Store' },
  { value: '25%', label: 'Reduction in team delivery friction using AI automation' }];


  const hero = useScrollReveal(0.1);
  const story = useScrollReveal();
  const situation = useScrollReveal();
  const task = useScrollReveal();
  const action = useScrollReveal();
  const actionItems = [useScrollReveal(), useScrollReveal(), useScrollReveal()];
  const impact = useScrollReveal();
  const metrics = [useScrollReveal(), useScrollReveal(), useScrollReveal()];
  const quote = useScrollReveal();
  const techStack = useScrollReveal();

  return (
    <section id="case-study" className="py-32 md:py-40 px-6 md:px-12 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col space-y-6 mb-12 md:mb-16">
          <span className="text-sm md:text-base font-medium tracking-wider py-1 px-4 rounded-full bg-primary/10 text-primary w-fit">
            Featured Case Study
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight max-w-4xl">
            <AnimatedText text="AiCleaner: Design System Governance & AI Automation Leadership" className="inline-block" once />
          </h2>
          <div className="flex flex-wrap gap-3 mt-4">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-sm px-4 py-1.5 bg-secondary/80 hover:bg-secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div ref={hero.ref} className={`relative mb-16 md:mb-24 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 ${hero.className}`}>
          <div className="relative aspect-[4/3] md:aspect-[16/9] w-full">
            <img src={aiCleanerHero} alt="AiCleaner Leadership Vision" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </div>

        {/* 1. Storytelling Section */}
        <div ref={story.ref} className={`max-w-3xl mx-auto mb-20 md:mb-28 ${story.className}`}>
          <h3 className="text-3xl md:text-4xl font-display font-semibold text-center mb-8 tracking-tight">
            The Story Behind AI Cleaner
          </h3>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed text-center md:text-left">
            <p>
              In an era of digital obesity, AiCleaner wasn't just conceived as a utility app, but as a strategic solution to cognitive overhead. As the <span className="font-semibold text-foreground">Design Lead</span>, my mission was to bridge the gap between complex AI capabilities and a seamless user experience.
            </p>
            <p>
              I spearheaded the cross-functional alignment, moving beyond simple interface design to establish a <span className="font-semibold text-foreground">Design System Governance</span>. This allowed our engineering team to iterate <span className="font-semibold text-primary">30% faster</span>.
            </p>
          </div>
        </div>

        {/* 2. Problem Section */}
        <div className="py-20 md:py-32 border-b border-border/10">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">The Problem</span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight leading-tight">
                Digital clutter as an <span className="text-muted-foreground italic text-3xl md:text-4xl block mt-2">Operational Bottleneck</span>
              </h3>
            </div>
            <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground">
              <p>
                Manual cleanup workflows were causing a <span className="font-semibold text-foreground">25% friction</span> in team delivery. From a DesignOps perspective, we identified that lack of automation was the primary growth blocker.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Goal Section */}
        <div className="py-20 md:py-32 border-b border-border/10 bg-muted/5 -mx-4 px-4 md:-mx-12 md:px-12">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">The Goal</span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight leading-tight">
                Scaling Excellence through <span className="text-muted-foreground italic text-3xl md:text-4xl block mt-2">Systems & Automation</span>
              </h3>
            </div>
            <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground">
              <p>
                The primary objective was to <span className="font-semibold text-foreground">scale the Design System governance</span> while expanding into international markets, reducing delivery friction by 25%.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Results Section */}
        <div id="results" className="py-20 md:py-32 border-b border-border/10">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block text-center">Impact & Metrics</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12">
            {results.map((result, index) => (
              <div key={index} className="p-8 rounded-2xl border border-border/10 bg-muted/5 text-center">
                <div className="text-4xl md:text-6xl font-display font-bold text-primary mb-4">{result.value}</div>
                <div className="text-lg text-muted-foreground font-medium italic">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

export default FeaturedCaseStudy;

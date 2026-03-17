import React from 'react';
import { Badge } from './ui/badge'; // Cambiado a minúscula para que Vercel lo encuentre
import AnimatedText from './AnimatedText';
import aiCleanerHero from '../assets/aicleaner-hero.png';

const FeaturedCaseStudy = () => {
  // Datos alineados con tu perfil Senior/DesignOps
  const results = [
    { value: '+30%', label: 'Product delivery acceleration through Design System scaling' },
    { value: '4.5/5', label: 'Stars rating & Top 100 Utilities on App Store' },
    { value: '25%', label: 'Reduction in team delivery friction using AI automation' }
  ];

  const tags = ['DesignOps', 'AI Integration', 'Team Leadership'];

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
        <div className="relative mb-16 md:mb-24 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
          <div className="relative aspect-[4/3] md:aspect-[16/9] w-full">
            <img 
              src={aiCleanerHero} 
              alt="AiCleaner Leadership Vision" 
              className="w-full h-full object-cover object-center" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </div>

        {/* Storytelling - Perfil Senior */}
        <div className="max-w-3xl mx-auto mb-20 md:mb-28">
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

        {/* Impact Results */}
        <div id="results" className="py-20 border-t border-border/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div key={index} className="p-8 rounded-2xl border border-border/10 bg-muted/5 text-center">
                <div className="text-4xl md:text-6xl font-display font-bold text-primary mb-4">
                  {result.value}
                </div>
                <div className="text-lg text-muted-foreground font-medium italic">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;

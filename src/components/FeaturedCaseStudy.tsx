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

  const actionMilestones = [
    { 
      title: 'Design System Governance & AI Leadership', 
      description: 'Led a cross-functional team of 6 designers, implementing DesignOps frameworks that reduced delivery friction by 25%' 
    },
    { 
      title: 'AI-Powered Prototyping', 
      description: 'Integrated Figma AI and Gemini Copilots to reduce high-fidelity prototyping time by 40%.' 
    },
    { 
      title: 'DesignOps & Team Management', 
      description: 'Led a cross-functional team of 6 designers, implementing DesignOps frameworks that reduced delivery friction by 25%.' 
    }
  ];

  const results = [
    { value: '+30%', label: 'Product delivery acceleration through Design System scaling' },
    { value: '4.5/5', label: 'Stars rating & Top 100 Utilities on App Store' },
    { value: '25%', label: 'Reduction in team delivery friction using AI automation' }
  ];

  const hero = useScrollReveal(0.1);
  const story = useScrollReveal();
  const situation = useScrollReveal();
  const task = useScrollReveal();
  const action = useScrollReveal();
  const actionItems = [useScrollReveal(), useScrollReveal(), useScrollReveal()];
  const impact = useScrollReveal();
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
            <AnimatedText text="AiCleaner: Design System Governance & AI Leadership" className="inline-block" once />
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
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 rounded-2xl blur-xl -z-10" />
        </div>

        {/* Storytelling Section */}
        <div ref={story.ref} className={`max-w-3xl mx-auto mb-20 md:mb-28 ${story.className}`}>
          <h3 className="text-3xl md:text-4xl font-display font-semibold text-center mb-8 tracking-tight">
            The Story Behind AI Cleaner
          </h3>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed text-center md:text-left">
            <p> In an era of digital obesity, AiCleaner was a strategic solution to cognitive overhead. As the Design Lead, my mission was to bridge the gap between complex AI capabilities and a seamless user experience. </p>
            <p> I spearheaded the cross-functional alignment and established a Design System Governance. This allowed our engineering team to iterate 30% faster across global markets.</p>
            <p> By integrating AI-driven workflows, we reduced team delivery friction by 25%. This project proves that modern DesignOps is the key to scaling premium products globally.</p>
          </div>
        </div>

        {/* SITUATION - PROBLEM */}
        <div ref={situation.ref} className={`py-20 md:py-32 border-b border-border/10 ${situation.className}`}>
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block text-center md:text-left">The Problem</span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight leading-tight">
                Digital clutter as an <span className="text-muted-foreground italic text-3xl md:text-4xl block mt-2">Operational Bottleneck</span>
              </h3>
            </div>
            <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground">
              <p>
                Users were overwhelmed by "digital obesity," but the real challenge was internal: manual cleanup workflows were slow and inconsistent. From a <span className="font-semibold text-foreground">DesignOps perspective</span>, we identified that friction in the process was slowing down our ability to scale.
              </p>
            </div>
          </div>
        </div>

        {/* RESULTS IMPACT */}
        <div ref={impact.ref} id="results" className={`py-20 md:py-32 border-b border-border/10 ${impact.className}`}>
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block text-center">Impact & Metrics</span>
          <h3 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-center mb-16">
            Driving Business <span className="text-muted-foreground italic">Efficiency</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {results.map((result, index) => (
              <div key={index} className="p-8 rounded-2xl border border-border/10 bg-muted/5 text-center">
                <div className="text-4xl md:text-6xl font-display font-bold text-primary mb-4">
                  {result.value}
                </div>
                <div className="text-lg text-muted-foreground font-medium leading-snug italic">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ACTION ITEMS */}
        <div ref={action.ref} className={`py-[60px] md:py-[120px] border-t border-border/20 ${action.className}`}>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-10 block">Action</span>
          <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-16">Merging DesignOps & AI Intelligence</h3>

          <div className="space-y-16 md:space-y-20">
            {actionMilestones.map((milestone, index) => (
              <div ref={actionItems[index].ref} key={index} className={`grid grid-cols-1 md:grid-cols-[3fr_7fr] gap-4 md:gap-12 items-start ${actionItems[index].className}`}>
                <h4 className="text-2xl md:text-3xl font-display font-semibold tracking-tight">{milestone.title}</h4>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TECH STACK */}
        <div ref={techStack.ref} className={`py-[60px] md:py-[120px] border-t border-border/20 ${techStack.className}`}>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-10 block">Tech Stack & Skills</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'Product Strategy', pills: ['Growth Loops', 'Data-Informed Design', 'Market Expansion'] },
              { title: 'AI & DesignOps', pills: ['Figma AI', 'Gemini Copilots', 'Automated Prototyping'] },
              { title: 'UX/UI Research', pills: ['Cohort Analysis', 'Cross-cultural UX', 'Design Systems Scaling'] },
              { title: 'Tools', pills: ['Figma', 'Amplitude', 'Jira', 'Notion'] }
            ].map((category) => (
              <div key={category.title}>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.pills.map((pill) => (
                    <span key={pill} className="px-4 py-1.5 text-sm rounded-full bg-secondary/60 text-foreground/80 border border-border/30">{pill}</span>
                  ))}
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

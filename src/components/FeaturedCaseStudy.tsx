import React, { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import AnimatedText from '@/components/AnimatedText';
import aiCleanerHero from '@/assets/ai-cleaner-mobiles.png';

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
  { title: 'Data-Driven Insights', description: 'Leveraged Amplitude for cohort analysis, identifying friction points that led to a 15% increase in user retention.' },
  { title: 'AI-Powered Prototyping', description: 'Integrated Figma AI and Gemini Copilots to reduce high-fidelity prototyping time by 40%.' },
  { title: 'Cross-Functional Leadership', description: 'Led a cross-functional team of 6 designers using Synthetic Users for rapid market validation before development.' }];


  const results = [
  { value: '+2.5GB', label: 'Average storage recovered per user' },
  { value: '4.5/5', label: 'Stars rating & Top 100 Utilities on App Store' },
  { value: '+25%', label: 'Increase in velocity & 20% stakeholder satisfaction' }];


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
            <AnimatedText text="AI Cleaner: Redefining Inbox Hygiene with AI" className="inline-block" once />
          </h2>
          <div className="flex flex-wrap gap-3 mt-4">
            {tags.map((tag) =>
            <Badge key={tag} variant="secondary" className="text-sm px-4 py-1.5 bg-secondary/80 hover:bg-secondary">
                {tag}
              </Badge>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <div ref={hero.ref} className={`relative mb-16 md:mb-24 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 ${hero.className}`}>
          <div className="relative aspect-[4/3] md:aspect-[16/9] w-full">
            <img src={aiCleanerHero} alt="AI Cleaner app interface showing +2.5GB recovered with Smart Filters" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent" />
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 rounded-2xl blur-xl -z-10" />
        </div>

        {/* Storytelling Section */}
        <div ref={story.ref} className={`max-w-3xl mx-auto mb-20 md:mb-28 ${story.className}`}>
          <h3 className="text-3xl md:text-4xl font-display font-semibold text-center mb-8 tracking-tight">
            The Story Behind AI Cleaner
          </h3>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed text-center md:text-left">
            <p>We live in an era of digital obesity. Our iPhones are no longer just tools; they have become cluttered archives of duplicate memories, forgotten screenshots, and endless junk mail that drain both our storage and our mental clarity.</p>
            <p>As the <span className="font-semibold text-foreground">Lead Product Designer</span>, I saw an opportunity to do more than just build a utility app. My goal was to leverage{' '}<span className="font-semibold text-foreground">AI-driven workflows</span> to create a 'digital sanctuary.' By merging Data-Informed Design (via Amplitude) with cutting-edge AI tools, we transformed a tedious 15 minute manual task into a seamless, one-tap experience.</p>
            <p>This isn't just a story about cleaning files; it's about how we scaled a premium iOS experience from Barcelona to a global stage including the highly competitive{' '}<span className="font-semibold text-foreground">Chinese market</span>—while maintaining a 4.5 star excellence and a 30% faster delivery velocity through modern{' '}<span className="font-semibold text-primary">DesignOps</span>.</p>
          </div>
        </div>

        {/* ── SITUATION ── */}
        <div ref={situation.ref} className={`py-[60px] md:py-[120px] ${situation.className}`}>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-6 block">The Problem</span>
          <div className="grid grid-cols-1 md:grid-cols-[3fr_7fr] gap-6 md:gap-12 items-start">
            <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight leading-tight">Digital Anxiety & Decision Fatigue</h3>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">Users suffered from Digital Anxiety the constant stress of full storage notifications compounded by Decision Fatigue when manually sorting thousands of files. As the Lead Product Designer, I identified these psychological barriers as the core UX problem, shifting our strategy from a simple utility to a cognitive-relief tool.
              <span className="font-semibold text-foreground">Digital Anxiety</span>—the constant stress of full storage notifications compounded by <span className="font-semibold text-foreground">Decision Fatigue</span> when manually sorting thousands of files. As the Lead Product Designer, I identified these psychological barriers as the core UX problem, shifting our strategy from a simple utility to a cognitive relief tool.
            </p>
          </div>
        </div>

        {/* ── TASK ── */}
        <div ref={task.ref} className={`py-[60px] md:py-[120px] border-t border-border/20 ${task.className}`}>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-6 block">The Goal</span>
          <div className="grid grid-cols-1 md:grid-cols-[3fr_7fr] gap-6 md:gap-12 items-start">
            <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight leading-tight">Cultural UX Adaptation for Global Scale</h3>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              My mission was to scale the corporate Design System while leading expansion into the <span className="font-semibold text-foreground">Chinese market</span>—a challenge that demanded <span className="font-semibold text-foreground">Cultural UX Adaptation</span>, not just translation. This meant rethinking information density, color semantics, trust signals, and payment flows to align with local user mental models and platform conventions (WeChat, Alipay).
            </p>
          </div>
        </div>

        {/* ── ACTION ── */}
        <div ref={action.ref} className={`py-[60px] md:py-[120px] border-t border-border/20 ${action.className}`}>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-10 block">Action</span>
          <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-16">Merging DesignOps, AI & Data Intelligence</h3>

          <div className="space-y-16 md:space-y-20">
            {actionMilestones.map((milestone, index) =>
            <div ref={actionItems[index].ref} key={index} className={`grid grid-cols-1 md:grid-cols-[3fr_7fr] gap-4 md:gap-12 items-start ${actionItems[index].className}`}>
                <h4 className="text-2xl md:text-3xl font-display font-semibold tracking-tight">{milestone.title}</h4>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">{milestone.description}</p>
              </div>
            )}
          </div>
        </div>

        {/* ── RESULTS ── */}
        <div ref={impact.ref} className={`py-[60px] md:py-[120px] border-t border-border/20 ${impact.className}`}>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-10 block">Impact</span>
          <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-16">Delivering Measurable Business & User Value</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-20">
            {results.map((result, index) =>
            <div ref={metrics[index].ref} key={index} className={`text-left ${metrics[index].className}`}>
                <span className={`text-5xl md:text-6xl font-display font-bold block mb-3 ${
              result.value === '4.5/5' ? 'text-primary' : 'text-[hsl(160,60%,50%)]'}`
              }>
                  {result.value}
                </span>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{result.label}</p>
              </div>
            )}
          </div>

        </div>

        {/* ── TECH STACK ── */}
        <div ref={techStack.ref} className={`py-[60px] md:py-[120px] border-t border-border/20 ${techStack.className}`}>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-10 block">Tech Stack & Skills</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
            { title: 'Product Strategy', pills: ['Growth Loops', 'Data-Informed Design (Amplitude)', 'Market Expansion (APAC/China)'] },
            { title: 'AI & DesignOps', pills: ['Figma AI', 'Gemini Copilots', 'Synthetic Users', 'Automated Prototyping'] },
            { title: 'UX/UI Research', pills: ['Cohort Analysis', 'Cross-cultural UX', 'A/B Testing', 'Design Systems Scaling'] },
            { title: 'Tools', pills: ['Figma', 'Amplitude', 'Jira', 'Slack', 'Notion (DesignOps documentation)'] }].
            map((category) =>
            <div key={category.title}>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.pills.map((pill) =>
                <span key={pill} className="px-4 py-1.5 text-sm rounded-full bg-secondary/60 text-foreground/80 border border-border/30">{pill}</span>
                )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default FeaturedCaseStudy;

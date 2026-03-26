import React, { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import AnimatedText from '@/components/AnimatedText';
import aiCleanerHero from '@/assets/hero-aicleaner.png';
import mobilesImg from '@/assets/2nd-aicleaner.png';
import metricsImg from '@/assets/3rd-aicleaner.png';
import goalImg from '@/assets/4to-aicleaner.png';
import uiKitImg from '@/assets/designsistem-aicleaner.png';

// ─── Scroll reveal hook ───────────────────────────────────────────────────────

const useScrollReveal = (threshold = 0.12) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return {
    ref,
    className: `transition-all duration-700 ease-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`,
  };
};

// ─── Reusable section label ───────────────────────────────────────────────────

const SectionLabel = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 mb-5">
    <span className="inline-block w-6 h-px bg-muted-foreground/40" />
    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
      {text}
    </span>
  </div>
);

// ─── Full-width image — fixed 16/9, no zoom ───────────────────────────────────

const FullImage = ({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}) => {
  const reveal = useScrollReveal(0.05);
  return (
    <div ref={reveal.ref} className={`my-14 md:my-20 ${reveal.className}`}>
      <div className="w-full overflow-hidden rounded-xl" style={{ aspectRatio: '16/9' }}>
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          className="w-full h-full object-cover object-center"
        />
      </div>
      {caption && (
        <p className="mt-4 text-xs text-muted-foreground pl-4 border-l border-border/40 leading-relaxed max-w-2xl">
          {caption}
        </p>
      )}
    </div>
  );
};

// ─── Main component ───────────────────────────────────────────────────────────

const FeaturedCaseStudy: React.FC = () => {
  const tags = ['DesignOps', 'AI Integration', 'Team Leadership'];

  const actionMilestones = [
    {
      num: '01',
      title: 'Data-Driven Insights',
      description:
        'Leveraged Amplitude for cohort analysis, identifying friction points that led to a 15% increase in user retention.',
    },
    {
      num: '02',
      title: 'AI-Powered Prototyping',
      description:
        'Integrated Figma AI and Gemini Copilots to reduce high-fidelity prototyping time by 40%.',
    },
    {
      num: '03',
      title: 'Cross-Functional Leadership',
      description:
        'Led a cross-functional team of 6 designers using Synthetic Users for rapid market validation before development.',
    },
  ];

  const results = [
    {
      value: '+2.5GB',
      label: 'Storage recovered per user',
      description:
        'Average gain per session after onboarding — up from 340MB with the previous manual flow.',
    },
    {
      value: '4.5★',
      label: 'App Store rating',
      description:
        'Sustained across US and China markets, reaching Top 100 in the Utilities category.',
    },
    {
      value: '+30%',
      label: 'Delivery speed',
      description:
        'Faster design-to-dev cycles achieved through the AI-assisted DesignOps workflow.',
    },
    {
      value: '+25%',
      label: 'Team velocity',
      description:
        'Increase in sprint output, combined with a 20% improvement in stakeholder satisfaction scores.',
    },
  ];

  // Reveal hooks
  const headerReveal = useScrollReveal(0.05);
  const situation = useScrollReveal();
  const task = useScrollReveal();
  const action = useScrollReveal();
  const actionItems = [useScrollReveal(), useScrollReveal(), useScrollReveal()];
  const impact = useScrollReveal();
  const m0 = useScrollReveal();
  const m1 = useScrollReveal();
  const m2 = useScrollReveal();
  const m3 = useScrollReveal();
  const metricsReveal = [m0, m1, m2, m3];
  const techStack = useScrollReveal();

  // Border classes per cell position in a 2-col grid
  const cellBorder = [
    'border-b border-r border-border/20 pb-10 pr-8 md:pr-14',
    'border-b border-border/20 pb-10 pl-8 md:pl-14',
    'pt-10 border-r border-border/20 pr-8 md:pr-14',
    'pt-10 pl-8 md:pl-14',
  ];

  return (
    <section id="case-study" className="py-28 md:py-36 bg-background">

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <div
        ref={headerReveal.ref}
        className={`px-6 md:px-12 max-w-7xl mx-auto mb-14 md:mb-20 ${headerReveal.className}`}
      >
        <span className="text-sm font-medium tracking-wider py-1 px-4 rounded-full bg-primary/10 text-primary w-fit inline-block mb-6">
          Featured Case Study
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight max-w-4xl leading-[1.05] mb-6">
          <AnimatedText
            text="AI Cleaner: Redefining Inbox Hygiene with AI"
            className="inline-block"
            once
          />
        </h2>
        <div className="flex flex-wrap gap-3 mb-8">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-sm px-4 py-1.5 bg-secondary/80 hover:bg-secondary"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Meta bar */}
        <div className="flex flex-wrap gap-x-10 gap-y-4 pt-6 border-t border-border/30">
          {[
            { label: 'Role', value: 'Lead Product Designer' },
            { label: 'Scope', value: 'iOS App · Global' },
            { label: 'Tools', value: 'Figma AI · Amplitude · Synthetic Users' },
            { label: 'Year', value: '2024' },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground mb-1">
                {label}
              </p>
              <p className="text-sm font-medium text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── HERO IMAGE ─────────────────────────────────────────────────────── */}
      <div className="w-full px-0 md:px-6 lg:px-12 max-w-7xl mx-auto mb-0">
        <div
          className="relative w-full overflow-hidden rounded-none md:rounded-2xl"
          style={{ aspectRatio: '16/9' }}
        >
          <img
            src={aiCleanerHero}
            alt="AI Cleaner — main app interface overview"
            loading="eager"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
        </div>
      </div>

      {/* ── STORY INTRO ────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto pt-16 md:pt-24 pb-4 text-center">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            We live in an era of{' '}
            <span className="font-semibold text-foreground">digital obesity</span>. Our iPhones
            have become cluttered archives of duplicate memories, forgotten screenshots, and
            endless junk — draining both storage and mental clarity.
          </p>
        </div>
      </div>

      {/* ── IMAGE 2 ────────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <FullImage
          src={mobilesImg}
          alt="AI Cleaner across three key screens: Smart Scan, Storage Breakdown, one-tap Clean"
          caption="Final UI across the three core screens — Smart Scan, Storage Breakdown, and one-tap Clean. The full flow was reduced from 7 steps to 2."
          priority
        />
      </div>

      {/* ── SITUATION ──────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div
          ref={situation.ref}
          className={`py-16 md:py-24 border-t border-border/20 ${situation.className}`}
        >
          <SectionLabel text="The Problem" />
          <div className="grid grid-cols-1 md:grid-cols-[2fr_5fr] gap-8 md:gap-20 items-start">
            <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight leading-tight">
              Digital Anxiety &amp; Decision Fatigue
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                Users suffered from{' '}
                <span className="font-semibold text-foreground">Digital Anxiety</span> — the
                constant stress of full-storage notifications — compounded by{' '}
                <span className="font-semibold text-foreground">Decision Fatigue</span> when
                manually sorting thousands of files.
              </p>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                As Lead Product Designer, I identified these psychological barriers as the core
                UX problem, shifting our strategy from a simple utility to a{' '}
                <span className="font-semibold text-foreground">cognitive-relief tool</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── IMAGE 3 ────────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <FullImage
          src={metricsImg}
          alt="Amplitude dashboard showing cohort behaviour and drop-off points"
          caption="Amplitude cohort analysis — the permissions screen had a 67% drop-off rate. Redesigning this single step recovered the majority of lost activations."
        />
      </div>

      {/* ── TASK ───────────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div
          ref={task.ref}
          className={`py-16 md:py-24 border-t border-border/20 ${task.className}`}
        >
          <SectionLabel text="The Goal" />
          <div className="grid grid-cols-1 md:grid-cols-[2fr_5fr] gap-8 md:gap-20 items-start">
            <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight leading-tight">
              Cultural UX Adaptation for Global Scale
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                My mission was to scale the Design System while leading expansion into the{' '}
                <span className="font-semibold text-foreground">Chinese market</span> — a
                challenge that demanded{' '}
                <span className="font-semibold text-foreground">Cultural UX Adaptation</span>
                , not just translation.
              </p>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                This meant rethinking information density, color semantics, trust signals, and
                payment flows to align with local conventions — WeChat, Alipay, and Chinese
                App Store guidelines.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── IMAGE 4 ────────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <FullImage
          src={goalImg}
          alt="Western vs Chinese market UI variants side by side"
          caption="Western vs. China variant — same core system, adapted trust signals, denser information layout, and localised payment entry points for WeChat Pay and Alipay."
        />
      </div>

      {/* ── ACTION ─────────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div
          ref={action.ref}
          className={`py-16 md:py-24 border-t border-border/20 ${action.className}`}
        >
          <SectionLabel text="Action" />
          <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-16 max-w-xl">
            Merging DesignOps, AI &amp; Data Intelligence
          </h3>

          <div className="divide-y divide-border/20">
            {actionMilestones.map((milestone, index) => (
              <div
                ref={actionItems[index].ref}
                key={index}
                className={`grid grid-cols-1 md:grid-cols-[64px_2fr_5fr] gap-4 md:gap-12 items-start py-10 ${actionItems[index].className}`}
              >
                <span className="font-display text-2xl font-bold text-muted-foreground/30 leading-none pt-1">
                  {milestone.num}
                </span>
                <h4 className="text-xl md:text-2xl font-display font-semibold tracking-tight">
                  {milestone.title}
                </h4>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── IMAGE 5 — Design System ─────────────────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <FullImage
          src={uiKitImg}
          alt="AI Cleaner design system — full component library overview"
          caption="AI Cleaner Design System — 120+ components covering both market variants, built in Figma with Auto Layout and tokenised variables for light and dark mode."
        />
      </div>

      {/* ── RESULTS ────────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div
          ref={impact.ref}
          className={`py-16 md:py-24 border-t border-border/20 ${impact.className}`}
        >
          <SectionLabel text="Impact" />

          {/* Header row */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_5fr] gap-8 md:gap-20 items-start mb-16">
            <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight leading-tight">
              Delivering Measurable Business &amp; User Value
            </h3>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              From activation rates to App Store rankings, every key metric moved in the right
              direction — validated across two markets with significantly different user
              behaviours and expectations.
            </p>
          </div>

          {/* 2×2 metric grid with internal dividers, no box borders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-border/20">
            {results.map((result, index) => (
              <div
                ref={metricsReveal[index].ref}
                key={index}
                className={`flex flex-col gap-3 ${cellBorder[index]} ${metricsReveal[index].className}`}
              >
                <span
                  className="font-display font-black leading-none text-foreground"
                  style={{ fontSize: 'clamp(3.2rem, 6vw, 5rem)' }}
                >
                  {result.value}
                </span>
                <p className="text-base font-semibold text-foreground tracking-tight">
                  {result.label}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TECH STACK ─────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div
          ref={techStack.ref}
          className={`py-16 md:py-24 border-t border-border/20 ${techStack.className}`}
        >
          <SectionLabel text="Tech Stack & Skills" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: 'Product Strategy',
                pills: [
                  'Growth Loops',
                  'Data-Informed Design (Amplitude)',
                  'Market Expansion (APAC/China)',
                ],
              },
              {
                title: 'AI & DesignOps',
                pills: [
                  'Figma AI',
                  'Gemini Copilots',
                  'Synthetic Users',
                  'Automated Prototyping',
                ],
              },
              {
                title: 'UX/UI Research',
                pills: [
                  'Cohort Analysis',
                  'Cross-cultural UX',
                  'A/B Testing',
                  'Design Systems Scaling',
                ],
              },
              {
                title: 'Tools',
                pills: ['Figma', 'Amplitude', 'Jira', 'Slack', 'Notion'],
              },
            ].map((category) => (
              <div key={category.title}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-4">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.pills.map((pill) => (
                    <span
                      key={pill}
                      className="px-4 py-1.5 text-sm rounded-full bg-secondary/60 text-foreground/80 border border-border/30"
                    >
                      {pill}
                    </span>
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

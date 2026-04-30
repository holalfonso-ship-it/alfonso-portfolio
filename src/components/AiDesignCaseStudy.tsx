import React, { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import AnimatedText from '@/components/AnimatedText';

// ─── Image imports ────────────────────────────────────────────────────────────
import heroImg     from '@/assets/1er-aidesign.png';
import screensImg  from '@/assets/2nd-aidesign.png';
import researchImg from '@/assets/3rd-aidesign.png';
import flowImg     from '@/assets/4to-aidesign.png';
import systemImg   from '@/assets/5to-aidesign.png';

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

// ─── Section label ────────────────────────────────────────────────────────────

const SectionLabel = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 mb-5">
    <span className="inline-block w-6 h-px bg-muted-foreground/40" />
    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
      {text}
    </span>
  </div>
);

// ─── Full-width image — optional src, shows placeholder when missing ──────────

const FullImage = ({
  src,
  alt,
  caption,
  priority = false,
}: {
  src?: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}) => {
  const reveal = useScrollReveal(0.05);
  return (
    <div ref={reveal.ref} className={`my-14 md:my-20 ${reveal.className}`}>
      <div
        className="w-full overflow-hidden rounded-xl bg-secondary/30"
        style={{ aspectRatio: '16/9' }}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <span className="text-[11px] tracking-[0.12em] uppercase text-muted-foreground/30">
              {alt}
            </span>
          </div>
        )}
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

const AiDesignCaseStudy: React.FC = () => {
  const tags = ['Generative AI', 'iOS App', 'Computer Vision'];

  const actionMilestones = [
    {
      num: '01',
      title: 'AI Room Scan',
      description:
        'Designed a single-tap capture flow that sends the photo through a ControlNet pipeline, returning a redesigned version in under 8 seconds — without requiring any manual room masking.',
    },
    {
      num: '02',
      title: 'Style Engine',
      description:
        'Built a curated library of 12 interior styles (Minimalist, Scandinavian, Industrial, Bohemian, Mid-Century and more), validated with 200+ users through Maze to ensure instant recognition and desirability.',
    },
    {
      num: '03',
      title: 'Granular Controls',
      description:
        'Introduced a secondary editing layer — wall colour picker, furniture swap by category, and lighting tone — giving users ownership over the AI output without overwhelming them with parameters.',
    },
  ];

  const results = [
    {
      value: '4.7★',
      label: 'App Store rating',
      description:
        'Achieved in the first 90 days, ranking in the top 50 of the Lifestyle category across 12 markets.',
    },
    {
      value: '+68%',
      label: 'Purchase confidence',
      description:
        'Users who visualised a redesign before buying reported significantly higher purchase confidence — validated through post-session surveys.',
    },
    {
      value: '8.3s',
      label: 'Time to first redesign',
      description:
        'From photo capture to AI-generated result — down from an initial 34-second prototype in our first sprint.',
    },
    {
      value: '4.2×',
      label: 'Sessions per week',
      description:
        'Weekly return rate — users came back to explore different styles across multiple rooms, driving strong organic growth.',
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
          Case Study
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight max-w-4xl leading-[1.05] mb-6">
          <AnimatedText
            text="AI Design: Reimagining Spaces with a Single Photo"
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
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4 pt-6 border-t border-border/30">
          {[
            { label: 'Role', value: 'Lead Product Designer' },
            { label: 'Scope', value: 'iOS App · B2C' },
            { label: 'Tools', value: 'Figma AI · Maze · Amplitude · Runway' },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground mb-1">
                {label}
              </p>
              <p className="text-sm font-medium text-foreground">{value}</p>
            </div>
          ))}
          {/* App Store badge — swap href for the real App Store URL */}
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex-shrink-0"
            aria-label="Download AI Design on the App Store"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-9 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </a>
        </div>
      </div>

      {/* ── HERO IMAGE ─────────────────────────────────────────────────────── */}
      <div className="w-full px-0 md:px-6 lg:px-12 max-w-7xl mx-auto mb-0">
        <div
          className="relative w-full overflow-hidden rounded-none md:rounded-2xl"
          style={{ aspectRatio: '16/9' }}
        >
          <img
            src={heroImg}
            alt="AI Design — main app interface overview"
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
            Everyone has a vision for their home. The problem is{' '}
            <span className="font-semibold text-foreground">the imagination gap</span> — the
            inability to visualise how a space will actually look before spending thousands on
            furniture, paint, and renovation.
          </p>
        </div>
      </div>

      {/* ── IMAGE 2 ────────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <FullImage
          src={screensImg}
          alt="AI Design — three core screens: Photo Capture, Style Picker, Result"
          caption="Core flow across three screens — Photo Capture, Style Picker, and the AI-generated result. The full journey was compressed from 11 steps to 3."
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
              Renovation Paralysis
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                Our research uncovered what we called{' '}
                <span className="font-semibold text-foreground">Renovation Paralysis</span> — 73%
                of users wanted to redecorate their home but felt blocked by uncertainty. They
                spent hours on Pinterest saving inspiration, yet couldn't translate that into their
                actual room.
              </p>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                The fear of making an expensive mistake kept them stuck. As Lead Product Designer, I
                reframed the core problem: this wasn't a{' '}
                <span className="font-semibold text-foreground">decoration tool</span>, it was a{' '}
                <span className="font-semibold text-foreground">confidence tool</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── IMAGE 3 ────────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <FullImage
          src={researchImg}
          alt="User research findings — renovation paralysis survey data"
          caption="Survey data from 340 users — 73% reported abandoning a redecoration project due to fear of making expensive mistakes. This insight reframed our entire product strategy."
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
              From Inspiration to Visualisation in Seconds
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                My mission was to design an experience so fast and frictionless that anyone —
                regardless of design knowledge — could take a photo of their room and instantly see
                it transformed into any style they chose.
              </p>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                The north star metric was{' '}
                <span className="font-semibold text-foreground">time to first redesign</span>. Every
                design decision — from onboarding to the style picker — was evaluated against whether
                it helped or hindered reaching that first "wow" moment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── IMAGE 4 ────────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <FullImage
          src={flowImg}
          alt="Before and after — same room in Minimalist and Scandinavian styles"
          caption="Before / after comparison — the same living room rendered in Minimalist and Scandinavian styles. Generated in under 9 seconds on a standard iPhone 14."
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
            AI-First UX Built Around Speed &amp; Trust
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
          src={systemImg}
          alt="AI Design component library — full design system overview"
          caption="AI Design System — 90+ components including the Style Card, Before/After slider, Room Snapshot, and Colour Picker — all built with Figma variables for instant theme switching."
        />
      </div>

      {/* ── RESULTS ────────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div
          ref={impact.ref}
          className={`py-16 md:py-24 border-t border-border/20 ${impact.className}`}
        >
          <SectionLabel text="Impact" />

          <div className="grid grid-cols-1 md:grid-cols-[2fr_5fr] gap-8 md:gap-20 items-start mb-16">
            <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight leading-tight">
              Closing the Gap Between Imagination &amp; Reality
            </h3>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Within 90 days of launch, the app became a daily habit for users redecorating their
              homes — driving both high retention and measurable increases in purchase confidence
              among partner retailers.
            </p>
          </div>

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
                pills: ['Jobs-to-be-Done', 'Conversion Funnels', 'North Star Metric', 'A/B Testing'],
              },
              {
                title: 'AI & Generative Tools',
                pills: ['Stable Diffusion', 'ControlNet', 'Runway', 'Figma AI', 'Gemini'],
              },
              {
                title: 'UX Research',
                pills: ['Usability Testing', 'Maze', 'Jobs-to-be-Done', 'Cohort Analysis'],
              },
              {
                title: 'Tools',
                pills: ['Figma', 'Amplitude', 'Hotjar', 'Jira', 'Notion'],
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

export default AiDesignCaseStudy;

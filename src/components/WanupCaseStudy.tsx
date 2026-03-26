import React, { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import AnimatedText from '@/components/AnimatedText';

// ─── Replace with your real assets when ready ─────────────────────────────────
// import heroImg    from '@/assets/wanup-hero.png';
// import screen2Img from '@/assets/wanup-2nd.png';
// import screen3Img from '@/assets/wanup-3rd.png';
// import screen4Img from '@/assets/wanup-4th.png';
// import screen5Img from '@/assets/wanup-5th.png';

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

// ─── Full-width image — 16/9, no zoom ─────────────────────────────────────────

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
        className="w-full overflow-hidden rounded-xl bg-secondary/40"
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
          /* Placeholder — remove once src is provided */
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full border border-border/40 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeOpacity=".3" strokeWidth="1.2"/>
                <circle cx="5.5" cy="7" r="1.5" stroke="currentColor" strokeOpacity=".3" strokeWidth="1.2"/>
                <path d="M1 11l3.5-3 2.5 2.5 3-3.5 4 4" stroke="currentColor" strokeOpacity=".3" strokeWidth="1.2" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground/40">{alt}</p>
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

const WanupCaseStudy: React.FC = () => {
  const tags = ['B2C Product Design', 'Booking Experience', 'Design System'];

  const actionMilestones = [
    {
      num: '01',
      title: 'User Research & Booking Audit',
      description:
        'Conducted a full audit of the existing booking funnel with session recordings and heatmaps. Identified 4 critical drop-off points between hotel search and checkout confirmation.',
    },
    {
      num: '02',
      title: 'Modular Design System',
      description:
        'Built a scalable component library covering hotel cards, availability selectors, checkout forms, and the loyalty dashboard — enabling the team to ship new features 35% faster.',
    },
    {
      num: '03',
      title: 'Loyalty & Retention Layer',
      description:
        'Designed the Cash Rewards and Member Get Member flows from scratch, creating a retention loop that increased repeat bookings and drove organic referral growth within the first quarter post-launch.',
    },
  ];

  const results = [
    {
      value: '+42%',
      label: 'Checkout completion rate',
      description:
        'Funnel conversion improved after simplifying the availability selection step and reducing form fields by 30%.',
    },
    {
      value: '−28%',
      label: 'Booking abandonment',
      description:
        'Drop-off rate at the hotel detail page reduced by surfacing availability and pricing earlier in the flow.',
    },
    {
      value: '+3.1×',
      label: 'Repeat booking rate',
      description:
        'Users enrolled in Cash Rewards returned to book again at 3× the rate of non-enrolled users within 90 days.',
    },
    {
      value: '4.7★',
      label: 'User satisfaction score',
      description:
        'Post-booking NPS improved significantly after redesigning the confirmation flow and booking detail screens.',
    },
  ];

  // Reveal hooks
  const headerReveal  = useScrollReveal(0.05);
  const situation     = useScrollReveal();
  const task          = useScrollReveal();
  const action        = useScrollReveal();
  const a0 = useScrollReveal(); const a1 = useScrollReveal(); const a2 = useScrollReveal();
  const actionItems   = [a0, a1, a2];
  const impact        = useScrollReveal();
  const m0 = useScrollReveal(); const m1 = useScrollReveal();
  const m2 = useScrollReveal(); const m3 = useScrollReveal();
  const metricsReveal = [m0, m1, m2, m3];
  const techStack     = useScrollReveal();

  const cellBorder = [
    'border-b border-r border-border/20 pb-10 pr-8 md:pr-14',
    'border-b border-border/20 pb-10 pl-8 md:pl-14',
    'pt-10 border-r border-border/20 pr-8 md:pr-14',
    'pt-10 pl-8 md:pl-14',
  ];

  return (
    <section id="case-study-wanup" className="py-28 md:py-36 bg-background">

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <div
        ref={headerReveal.ref}
        className={`px-6 md:px-12 max-w-7xl mx-auto mb-14 md:mb-20 ${headerReveal.className}`}
      >
        <span className="text-sm font-medium tracking-wider py-1 px-4 rounded-full bg-primary/10 text-primary w-fit inline-block mb-6">
          Case Study · B2C
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight max-w-4xl leading-[1.05] mb-6">
          <AnimatedText
            text="Wanup: Redesigning the Hotel Booking Experience"
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
            { label: 'Role',   value: 'Lead Product Designer' },
            { label: 'Scope',  value: 'Web · Desktop & Mobile' },
            { label: 'Tools',  value: 'Figma · Hotjar · Notion' },
            { label: 'Year',   value: '2024' },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground mb-1">{label}</p>
              <p className="text-sm font-medium text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── HERO IMAGE ─────────────────────────────────────────────────────── */}
      <div className="w-full px-0 md:px-6 lg:px-12 max-w-7xl mx-auto mb-0">
        <div
          className="relative w-full overflow-hidden rounded-none md:rounded-2xl bg-secondary/40"
          style={{ aspectRatio: '16/9' }}
        >
          {/* Replace with: <img src={heroImg} ... /> */}
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <p className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground/40">
              Hero image — wanup-hero.png
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
        </div>
      </div>

      {/* ── STORY INTRO ────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto pt-16 md:pt-24 pb-4 text-center">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Booking a hotel should feel effortless. Instead, most platforms bury availability behind
            multiple clicks, overwhelm users with options, and lose them at checkout.{' '}
            <span className="font-semibold text-foreground">Wanup</span> set out to fix that — and
            add a loyalty layer that actually makes users come back.
          </p>
        </div>
      </div>

      {/* ── IMAGE 2 — Hotel detail screens ─────────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <FullImage
          // src={screen2Img}
          alt="Hotel detail page — availability, rooms and booking widget"
          caption="The redesigned hotel detail page — availability, room options, and the booking CTA are all visible above the fold, eliminating the need to scroll before deciding."
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
              A Broken Funnel &amp; Zero Retention
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                The original platform had a{' '}
                <span className="font-semibold text-foreground">61% abandonment rate</span> at the
                hotel detail page — users couldn't find availability without navigating through
                three separate screens, and the checkout process had 11 form steps with no
                progress indicator.
              </p>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                Beyond acquisition, there was{' '}
                <span className="font-semibold text-foreground">no retention strategy</span>:
                no loyalty programme, no saved favourites, no post-booking engagement. Every
                user was effectively a first-time user, regardless of how many times they had
                booked before.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── IMAGE 3 — Checkout / funnel screens ────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <FullImage
          // src={screen3Img}
          alt="Checkout flow — streamlined form and progress indicator"
          caption="Checkout redesign — 11 steps collapsed into 3 stages with a persistent progress indicator. Form fields reduced from 18 to 11 by removing non-essential data collection."
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
              Convert Better. Keep Users Longer.
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                The brief had two distinct goals: first, reduce friction in the booking funnel to
                improve conversion — specifically targeting the hotel detail page and checkout
                completion rate. Second, design a{' '}
                <span className="font-semibold text-foreground">loyalty and retention system</span>{' '}
                that gave users a reason to return to Wanup instead of switching to a competitor
                for their next stay.
              </p>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                Both goals required a{' '}
                <span className="font-semibold text-foreground">scalable Design System</span> — the
                existing UI had no shared components, making every new screen a from-scratch effort
                that slowed the team and created visual inconsistency across the product.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── IMAGE 4 — Loyalty / Cash Rewards screens ───────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <FullImage
          // src={screen4Img}
          alt="Cash Rewards and Member Get Member loyalty dashboard"
          caption="Cash Rewards dashboard and Member Get Member flow — users earn credit on every booking and unlock referral bonuses, creating a flywheel that drives both retention and organic acquisition."
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
            Funnel First, Loyalty Second, System Always
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

      {/* ── IMAGE 5 — Design System / component library ────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <FullImage
          // src={screen5Img}
          alt="Wanup design system — component library and token structure"
          caption="Wanup Design System — a unified component library spanning hotel cards, booking widgets, forms, loyalty UI, and user account screens. Built with tokenised variables for consistent theming."
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
              Measurable Conversion &amp; Retention Gains
            </h3>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Results were tracked across a 90-day post-launch window covering both conversion
              metrics from the redesigned funnel and retention data from the new loyalty layer —
              measured against the same cohort from the previous quarter.
            </p>
          </div>

          {/* 2×2 metric grid */}
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
          <SectionLabel text="Skills & Tools" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: 'UX Strategy',
                pills: ['Funnel Optimisation', 'User Journey Mapping', 'Conversion Rate Optimisation'],
              },
              {
                title: 'Product Design',
                pills: ['Interaction Design', 'Responsive Web', 'Booking Flow Design', 'Loyalty UX'],
              },
              {
                title: 'Research & Validation',
                pills: ['Session Recording (Hotjar)', 'Usability Testing', 'A/B Testing', 'Heatmap Analysis'],
              },
              {
                title: 'Tools',
                pills: ['Figma', 'Hotjar', 'Notion', 'Jira', 'Zeroheight'],
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

export default WanupCaseStudy;

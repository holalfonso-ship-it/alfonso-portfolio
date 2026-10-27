import React from 'react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES, CaseStudyMeta } from '@/data/caseStudies';

// ─── Arrow icon (navigate-out) ────────────────────────────────────────────────

const ArrowOutIcon = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
    <path
      d="M2 9L9 2M9 2H3.5M9 2v5.5"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ─── Single case study card ───────────────────────────────────────────────────
// Borderless, image-led layout: the thumbnail does most of the talking, one
// hero metric gets visual priority next to the eyebrow line, and everything
// below a thin rule is just the way in to the full case study.

const CaseStudyCard: React.FC<{ cs: CaseStudyMeta; index: number }> = ({ cs, index }) => {
  const CardWrapper = cs.externalUrl
    ? ({ children }: { children: React.ReactNode }) => (
        <a
          href={cs.externalUrl}
          className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
        >
          {children}
        </a>
      )
    : ({ children }: { children: React.ReactNode }) => (
        <Link
          to={`/case-studies/${cs.slug}`}
          className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
        >
          {children}
        </Link>
      );

  const heroMetric = cs.metrics[cs.heroMetricIndex];

  return (
    <CardWrapper>
      {/* Thumbnail — bigger, more prominent, no card border around it */}
      <div className="relative w-full overflow-hidden rounded-2xl bg-secondary/40" style={{ aspectRatio: '8/5' }}>
        {cs.thumb ? (
          <img
            src={cs.thumb}
            alt={cs.thumbAlt}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="w-full h-full bg-secondary/60 flex items-center justify-center">
            <span className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground/30">
              {cs.thumbAlt}
            </span>
          </div>
        )}
      </div>

      {/* Eyebrow + hero metric */}
      <div className="flex items-start justify-between gap-4 mt-5 mb-2">
        <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted-foreground max-w-[70%]">
          {String(index + 1).padStart(2, '0')} · {cs.tags.join(' · ')}
        </p>
        <div className="flex-shrink-0 text-right">
          <p
            className="font-display font-bold leading-none text-primary"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}
          >
            {heroMetric.value}
          </p>
        </div>
      </div>

      {/* Title + hero metric label */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <h3
          className="font-display font-bold leading-tight text-foreground"
          style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)' }}
        >
          {cs.title}
        </h3>
        <p className="flex-shrink-0 text-[10px] uppercase tracking-[0.07em] text-muted-foreground/70 mt-1 text-right">
          {heroMetric.label}
        </p>
      </div>

      {/* Divider + CTA */}
      <div className="pt-4 border-t border-border/20">
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-all duration-200 group-hover:gap-2.5 group-hover:text-foreground">
          View case study
          <ArrowOutIcon />
        </span>
      </div>
    </CardWrapper>
  );
};

// ─── Main component ───────────────────────────────────────────────────────────

const CaseStudyTabs: React.FC = () => (
  <section id="case-study" className="bg-background">

    {/* ── Section header ─────────────────────────────────────────────────── */}
    <div className="px-6 md:px-12 max-w-7xl mx-auto pt-28 md:pt-36 pb-10 md:pb-14">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-block w-6 h-px bg-muted-foreground/40" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Selected work
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.05]">
        Case studies
      </h2>
    </div>

    {/* ── Cards grid ─────────────────────────────────────────────────────── */}
    <div className="px-6 md:px-12 max-w-7xl mx-auto pb-20 md:pb-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-x-14 gap-y-14 md:gap-y-20">
        {CASE_STUDIES.map((cs, i) => (
          <CaseStudyCard key={cs.slug} cs={cs} index={i} />
        ))}
      </div>
    </div>

  </section>
);

export default CaseStudyTabs;

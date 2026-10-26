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

const CaseStudyCard: React.FC<{ cs: CaseStudyMeta }> = ({ cs }) => {
  const CardWrapper = cs.externalUrl
    ? ({ children }: { children: React.ReactNode }) => (
        <a
          href={cs.externalUrl}
          className="group block rounded-xl overflow-hidden border border-border/20 bg-background transition-all duration-200 hover:border-foreground/20 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {children}
        </a>
      )
    : ({ children }: { children: React.ReactNode }) => (
        <Link
          to={`/case-studies/${cs.slug}`}
          className="group block rounded-xl overflow-hidden border border-border/20 bg-background transition-all duration-200 hover:border-foreground/20 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {children}
        </Link>
      );

  return (
    <CardWrapper>
      {/* Thumbnail */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/7' }}>
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
        {/* Bottom fade on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Body */}
      <div className="p-5">
        <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted-foreground mb-1">
          {cs.type}
        </p>

        <div className="flex items-start justify-between gap-4 mb-3">
          <h3
            className="font-display font-bold leading-tight text-foreground"
            style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)' }}
          >
            {cs.title}
          </h3>
          {/* Arrow circle */}
          <div className="flex-shrink-0 w-7 h-7 rounded-full border border-border/30 flex items-center justify-center mt-0.5 text-muted-foreground transition-all duration-200 group-hover:bg-foreground group-hover:border-foreground group-hover:text-background">
            <ArrowOutIcon />
          </div>
        </div>

        {/* Pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {cs.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-3 py-1 rounded-full border border-border/30 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Metrics — one hero metric gets visual priority, the rest stay secondary */}
        <div className="flex items-end gap-5 pt-4 border-t border-border/20">
          {cs.metrics.map(({ value, label }, i) => {
            const isHero = i === cs.heroMetricIndex;
            return (
              <div key={label}>
                <p
                  className={
                    isHero
                      ? 'font-display font-bold leading-none mb-0.5 text-primary'
                      : 'font-display font-semibold leading-none mb-0.5 text-foreground/60'
                  }
                  style={{
                    fontSize: isHero ? 'clamp(1.35rem, 2.6vw, 1.7rem)' : 'clamp(0.85rem, 1.4vw, 1rem)',
                  }}
                >
                  {value}
                </p>
                <p
                  className={
                    isHero
                      ? 'text-[10px] uppercase tracking-[0.07em] text-foreground/70 font-medium'
                      : 'text-[10px] uppercase tracking-[0.07em] text-muted-foreground/70'
                  }
                >
                  {label}
                </p>
              </div>
            );
          })}
        </div>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {CASE_STUDIES.map((cs) => (
          <CaseStudyCard key={cs.slug} cs={cs} />
        ))}
      </div>
    </div>

  </section>
);

export default CaseStudyTabs;

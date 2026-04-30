import React, { useState } from 'react';
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy';
import WanupCaseStudy from '@/components/WanupCaseStudy';

// ─── Thumbnail imports ────────────────────────────────────────────────────────
import aiCleanerCover from '@/assets/Cover-icleaner.png';
import wanupCover from '@/assets/Cover-wanup.png';

// ─── Tab config ───────────────────────────────────────────────────────────────

const TABS = [
  {
    id: 'ai-cleaner',
    type: 'B2C · iOS App',
    year: '2024',
    title: 'AI Cleaner',
    thumb: aiCleanerCover as string | undefined,
    thumbAlt: 'AI Cleaner app interface',
    tags: ['DesignOps', 'AI Integration', 'Team Leadership'],
    metrics: [
      { value: '4.5', label: 'App Store' },
      { value: '+30%', label: 'Delivery speed' },
      { value: '+2.5GB', label: 'Per user' },
    ],
  },
  {
    id: 'wanup',
    type: 'B2C · Web',
    year: '2024',
    title: 'Wanup',
    thumb: wanupCover as string | undefined,
    thumbAlt: 'Wanup hotel booking platform',
    tags: ['Booking Experience', 'Design System', 'Loyalty UX'],
    metrics: [
      { value: '+42%', label: 'Checkout rate' },
      { value: '28%', label: 'Abandonment' },
      { value: '3.1×', label: 'Repeat booking' },
    ],
  },
];

// ─── Single tab card ──────────────────────────────────────────────────────────

const TabCard: React.FC<{
  tab: typeof TABS[0];
  isActive: boolean;
  onClick: () => void;
}> = ({ tab, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`
      group w-full text-left rounded-xl overflow-hidden border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
      ${isActive
        ? 'border-foreground/20 bg-background'
        : 'border-border/20 bg-secondary/20 hover:bg-secondary/40 hover:border-border/30 opacity-60 hover:opacity-80'
      }
    `}
  >
    {/* Thumbnail */}
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/7' }}>
      {tab.thumb ? (
        <img
          src={tab.thumb}
          alt={tab.thumbAlt}
          className="w-full h-full object-cover object-center"
        />
      ) : (
        <div className="w-full h-full bg-secondary/60 flex items-center justify-center">
          <span className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground/30">
            {tab.thumbAlt}
          </span>
        </div>
      )}
      {/* Active underline */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[2px] bg-foreground transition-opacity duration-200 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>

    {/* Body */}
    <div className="p-5">
      <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted-foreground mb-1">
        {tab.type}
      </p>

      <div className="flex items-start justify-between gap-4 mb-3">
        <h3
          className={`font-display font-bold leading-tight transition-colors ${
            isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'
          }`}
          style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)' }}
        >
          {tab.title}
        </h3>
        {/* Arrow icon */}
        <div
          className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center mt-0.5 transition-all duration-200 ${
            isActive
              ? 'bg-foreground border-foreground text-background'
              : 'border-border/30 text-muted-foreground'
          }`}
        >
          {isActive ? (
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M5.5 2v7M2 6l3.5 3.5L9 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M2 9L9 2M9 2H3.5M9 2v5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
      </div>

      {/* Pills */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tab.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-3 py-1 rounded-full border border-border/30 text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Metrics */}
      <div className="flex gap-5 pt-4 border-t border-border/20">
        {tab.metrics.map(({ value, label }) => (
          <div key={label}>
            <p
              className={`font-display font-bold leading-none mb-0.5 transition-colors ${
                isActive ? 'text-foreground' : 'text-muted-foreground'
              }`}
              style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)' }}
            >
              {value}
            </p>
            <p className="text-[10px] uppercase tracking-[0.07em] text-muted-foreground">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </button>
);

// ─── Main component ───────────────────────────────────────────────────────────

const CaseStudyTabs: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(TABS[0].id);

  return (
    <section id="case-study" className="bg-background">

      {/* ── Section header ───────────────────────────────────────────────── */}
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

      {/* ── Two tab cards ─────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {TABS.map((tab) => (
            <TabCard
              key={tab.id}
              tab={tab}
              isActive={tab.id === activeId}
              onClick={() => setActiveId(tab.id)}
            />
          ))}
        </div>
      </div>

      {/* ── Active case study content ─────────────────────────────────────── */}
      <div
        key={activeId}
        className="animate-in fade-in slide-in-from-bottom-3 duration-500"
      >
        {activeId === 'ai-cleaner' && <FeaturedCaseStudy />}
        {activeId === 'wanup' && <WanupCaseStudy />}
      </div>

    </section>
  );
};

export default CaseStudyTabs;

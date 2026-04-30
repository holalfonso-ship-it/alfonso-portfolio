import React, { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import AnimatedText from '@/components/AnimatedText';

// ─── Image imports — uncomment and swap when assets are ready ─────────────────
// import heroImg    from '@/assets/1er-coperama.png';
// import screen2Img from '@/assets/2nd-coperama.png';
// import screen3Img from '@/assets/3rd-coperama.png';
// import screen4Img from '@/assets/4to-coperama.png';
// import screen5Img from '@/assets/5to-coperama.png';

// ─── Scroll reveal hook ───────────────────────────────────────────────────────
const useScrollReveal = (threshold = 0.12) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(el); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return {
    ref,
    className: `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
  };
};

// ─── Section label ────────────────────────────────────────────────────────────
const SectionLabel = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 mb-5">
    <span className="inline-block w-6 h-px bg-muted-foreground/40" />
    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{text}</span>
  </div>
);

// ─── Full-width image — optional src, shows placeholder when missing ──────────
const FullImage = ({ src, alt, caption, priority = false }: { src?: string; alt: string; caption?: string; priority?: boolean; }) => {
  const reveal = useScrollReveal(0.05);
  return (
    <div ref={reveal.ref} className={`my-14 md:my-20 ${reveal.className}`}>
      <div className="w-full overflow-hidden rounded-xl bg-secondary/40" style={{ aspectRatio: '16/9' }}>
        {src ? (
          <img src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} className="w-full h-full object-cover object-center" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <p className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground/40">{alt}</p>
          </div>
        )}
      </div>
      {caption && <p className="mt-4 text-xs text-muted-foreground pl-4 border-l border-border/40 leading-relaxed max-w-2xl">{caption}</p>}
    </div>
  );
};

// ─── Main component ───────────────────────────────────────────────────────────
const CoperamaCaseStudy: React.FC = () => {
  const tags = ['B2B Platform', 'Procurement UX', 'Enterprise Design'];

  const actionMilestones = [
    {
      num: '01',
      title: 'Procurement Audit & Stakeholder Mapping',
      description: 'Ran discovery workshops with 12 buyer personas across hotel operations, finance, and central procurement. Mapped the full purchasing journey — from request to approval to delivery — exposing 3 critical failure points: duplicate ordering across properties, zero group-level spend visibility, and a supplier management process stuck in spreadsheets and email chains.',
    },
    {
      num: '02',
      title: 'Centralised Spend Dashboard',
      description: 'Designed a real-time group dashboard giving the NH Hotels procurement team full visibility into spend by category, property, and supplier — for the first time in the chain\'s history. Hotel managers retained a local view filtered to their own property, preserving autonomy while feeding into the group picture.',
    },
    {
      num: '03',
      title: 'Joint Order & Cost-Sharing Flow',
      description: 'Built the core workflow that lets multiple hotels bundle individual purchase requests into a single consolidated order. The system automatically calculates each property\'s cost share based on volume, routes the order through a configurable approval hierarchy, and notifies each hotel\'s finance team once confirmed — reducing the average procurement cycle from 4 days to under 14 hours.',
    },
  ];

  const results = [
    {
      value: '−23%',
      label: 'Procurement costs',
      description: 'Reduction in purchasing costs achieved through consolidated buying power and renegotiated group supplier contracts in the first 6 months post-launch.',
    },
    {
      value: '340+',
      label: 'Hotels onboarded',
      description: 'NH Hotels properties across Europe migrated to the centralised platform within the first year, replacing fragmented local purchasing processes.',
    },
    {
      value: '−65%',
      label: 'Order processing time',
      description: 'Average procurement cycle reduced from 4 days to under 14 hours through automated approval routing and consolidated order management.',
    },
    {
      value: '€2.4M',
      label: 'Estimated annual savings',
      description: 'Projected group-wide savings in year one, based on volume discount gains and reduction in duplicate supplier contracts across the chain.',
    },
  ];

  const headerReveal = useScrollReveal(0.05);
  const situation = useScrollReveal();
  const task = useScrollReveal();
  const action = useScrollReveal();
  const a0 = useScrollReveal(); const a1 = useScrollReveal(); const a2 = useScrollReveal();
  const actionItems = [a0, a1, a2];
  const impact = useScrollReveal();
  const m0 = useScrollReveal(); const m1 = useScrollReveal(); const m2 = useScrollReveal(); const m3 = useScrollReveal();
  const metricsReveal = [m0, m1, m2, m3];
  const techStack = useScrollReveal();
  const cellBorder = [
    'border-b border-r border-border/20 pb-10 pr-8 md:pr-14',
    'border-b border-border/20 pb-10 pl-8 md:pl-14',
    'pt-10 border-r border-border/20 pr-8 md:pr-14',
    'pt-10 pl-8 md:pl-14',
  ];

  return (
    <section id="case-study-coperama" className="py-28 md:py-36 bg-background">

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <div ref={headerReveal.ref} className={`px-6 md:px-12 max-w-7xl mx-auto mb-14 md:mb-20 ${headerReveal.className}`}>
        <span className="text-sm font-medium tracking-wider py-1 px-4 rounded-full bg-primary/10 text-primary w-fit inline-block mb-6">
          Case Study · B2B
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight max-w-4xl leading-[1.05] mb-6">
          <AnimatedText text="Coperama: Centralising Procurement for NH Hotels" className="inline-block" once />
        </h2>
        <div className="flex flex-wrap gap-3 mb-8">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-sm px-4 py-1.5 bg-secondary/80 hover:bg-secondary">{tag}</Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-10 gap-y-4 pt-6 border-t border-border/30">
          {[
            { label: 'Role', value: 'Lead Product Designer' },
            { label: 'Client', value: 'NH Hotels Group' },
            { label: 'Scope', value: 'B2B Web Platform · 340+ properties' },
            { label: 'Tools', value: 'Figma · Maze · Confluence · Jira' },
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
        <div className="relative w-full overflow-hidden rounded-none md:rounded-2xl bg-secondary/40" style={{ aspectRatio: '16/9' }}>
          {/* Replace with: <img src={heroImg} alt="Coperama — main platform overview" loading="eager" className="w-full h-full object-cover object-center" /> */}
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-[11px] tracking-[0.1em] uppercase text-muted-foreground/40">Coperama — platform overview</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
        </div>
      </div>

      {/* ── STORY INTRO ────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto pt-16 md:pt-24 pb-4 text-center">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            When 340 hotels buy independently, nobody wins.{' '}
            <span className="font-semibold text-foreground">Coperama</span> set out to give
            NH Hotels the purchasing power of a group — without taking away the autonomy
            each property needed to run its own operations.
          </p>
        </div>
      </div>

      {/* ── IMAGE 2 ────────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <FullImage
          src={undefined}
          alt="Coperama — group spend dashboard with category breakdown and hotel filter"
          caption="The centralised spend dashboard — procurement managers see real-time spend across all properties, broken down by category and supplier. Individual hotels see only their own slice."
          priority
        />
      </div>

      {/* ── SITUATION ──────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div ref={situation.ref} className={`py-16 md:py-24 border-t border-border/20 ${situation.className}`}>
          <SectionLabel text="The Problem" />
          <div className="grid grid-cols-1 md:grid-cols-[2fr_5fr] gap-8 md:gap-20 items-start">
            <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight leading-tight">
              Fragmented Procurement Across 340 Properties
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                Each NH Hotels property was managing its own purchasing independently — negotiating directly with local suppliers, placing individual orders, and tracking spend in disconnected spreadsheets. The group had{' '}
                <span className="font-semibold text-foreground">no visibility into what 340 hotels were collectively buying</span>, which meant no leverage with suppliers and no way to identify savings opportunities at scale.
              </p>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                The operational cost was equally significant: procurement teams were spending an average of{' '}
                <span className="font-semibold text-foreground">4 days processing a single purchase order</span> — chasing approvals across departments, consolidating quotes manually, and reconciling invoices against fragmented local budgets.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── IMAGE 3 ────────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <FullImage
          src={undefined}
          alt="Discovery workshop output — procurement journey map across 3 hotel roles"
          caption="Stakeholder journey map from discovery workshops — 12 buyer personas across hotel operations, finance, and central procurement. Red zones mark the three critical failure points in the existing process."
        />
      </div>

      {/* ── TASK ───────────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div ref={task.ref} className={`py-16 md:py-24 border-t border-border/20 ${task.className}`}>
          <SectionLabel text="The Goal" />
          <div className="grid grid-cols-1 md:grid-cols-[2fr_5fr] gap-8 md:gap-20 items-start">
            <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight leading-tight">
              Group Buying Power With Property-Level Autonomy
            </h3>
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                The design challenge was balancing two conflicting needs: the NH Hotels group needed{' '}
                <span className="font-semibold text-foreground">centralised visibility and purchasing leverage</span>, while individual hotel managers needed the freedom to manage their own day-to-day operations without being blocked by corporate approval chains for routine purchases.
              </p>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                The solution had to work for three distinct user types simultaneously — central procurement managers overseeing group-wide strategy, hotel general managers making property-level decisions, and finance teams tracking spend and approving budgets. Getting the{' '}
                <span className="font-semibold text-foreground">information architecture</span> right was the most critical design decision of the project.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── IMAGE 4 ────────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <FullImage
          src={undefined}
          alt="Joint order flow — multiple hotels bundling requests into a single purchase order"
          caption="The joint order flow — hotels add their individual line items to a shared basket. The platform consolidates them into a single supplier order and automatically calculates each property's cost share."
        />
      </div>

      {/* ── ACTION ─────────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div ref={action.ref} className={`py-16 md:py-24 border-t border-border/20 ${action.className}`}>
          <SectionLabel text="Action" />
          <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-16 max-w-xl">
            Visibility First. Consolidation Second. Speed Always.
          </h3>
          <div className="divide-y divide-border/20">
            {actionMilestones.map((milestone, index) => (
              <div ref={actionItems[index].ref} key={index} className={`grid grid-cols-1 md:grid-cols-[64px_2fr_5fr] gap-4 md:gap-12 items-start py-10 ${actionItems[index].className}`}>
                <span className="font-display text-2xl font-bold text-muted-foreground/30 leading-none pt-1">{milestone.num}</span>
                <h4 className="text-xl md:text-2xl font-display font-semibold tracking-tight">{milestone.title}</h4>
                <p className="text-muted-foreground text-lg leading-relaxed">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── IMAGE 5 ────────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <FullImage
          src={undefined}
          alt="Coperama design system — component library for enterprise procurement UI"
          caption="Coperama Design System — built for density and clarity. Enterprise data tables, multi-level approval flows, supplier catalogue cards, and cost allocation widgets — all designed to handle real procurement complexity without overwhelming users."
        />
      </div>

      {/* ── RESULTS ────────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div ref={impact.ref} className={`py-16 md:py-24 border-t border-border/20 ${impact.className}`}>
          <SectionLabel text="Impact" />
          <div className="grid grid-cols-1 md:grid-cols-[2fr_5fr] gap-8 md:gap-20 items-start mb-16">
            <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight leading-tight">
              Group Savings &amp; Operational Efficiency at Scale
            </h3>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Results were measured across the first 12 months post-launch, covering all 340+ onboarded properties. Cost savings were validated against baseline spend data from the previous year, and processing time was tracked through the platform's built-in audit log.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-border/20">
            {results.map((result, index) => (
              <div ref={metricsReveal[index].ref} key={index} className={`flex flex-col gap-3 ${cellBorder[index]} ${metricsReveal[index].className}`}>
                <span className="font-display font-black leading-none text-foreground" style={{ fontSize: 'clamp(3.2rem, 6vw, 5rem)' }}>{result.value}</span>
                <p className="text-base font-semibold text-foreground tracking-tight">{result.label}</p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TECH STACK ─────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div ref={techStack.ref} className={`py-16 md:py-24 border-t border-border/20 ${techStack.className}`}>
          <SectionLabel text="Skills & Tools" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { title: 'UX Strategy', pills: ['Enterprise IA', 'Multi-role UX', 'Stakeholder Mapping', 'Service Design'] },
              { title: 'Product Design', pills: ['Data-dense UI', 'Approval Workflow Design', 'B2B Dashboard Design', 'Responsive Web'] },
              { title: 'Research & Validation', pills: ['Discovery Workshops', 'Usability Testing (Maze)', 'Journey Mapping', 'Prototype Testing'] },
              { title: 'Tools', pills: ['Figma', 'Maze', 'Confluence', 'Jira', 'Notion', 'Zeroheight'] },
            ].map((category) => (
              <div key={category.title}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-4">{category.title}</h4>
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

export default CoperamaCaseStudy;

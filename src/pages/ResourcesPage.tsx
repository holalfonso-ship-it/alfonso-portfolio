
import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedText from '@/components/AnimatedText';
import TransitionEffect from '@/components/TransitionEffect';
import ResourceCard, { Resource } from '@/components/ResourceCard';
import { Badge } from '@/components/ui/badge';

const resources: Resource[] = [
  {
    id: 6,
    title: 'Design <> Dev Handoff Checklist',
    description:
      'A free Notion checklist to ship pixel-perfect handoffs every time. Covers component naming, spacing tokens, interactive states, and accessibility annotations.',
    type: 'Checklist',
    price: 'Free',
    image: '/handoff-checklist-cover.png',
    gumroadUrl: 'https://abyssinian-dodo-5d1.notion.site/Design-Dev-Handoff-Checklist-344985943d318147bb5ee79828691fa5',
    tags: ['Handoff', 'Notion', 'Free'],
    format: 'Notion Template',
  },
  {
    id: 1,
    title: 'DesignOps Playbook',
    description:
      'A complete Notion playbook to implement DesignOps in your team from day one. Covers workflow governance, design rituals, tooling setup, and team onboarding processes.',
    type: 'Playbook',
    price: 29,
    image: '/designops-playbook-cover.png',
    gumroadUrl: 'https://alfonsowave74.gumroad.com/l/mranlq',
    tags: ['DesignOps', 'Notion', 'Team Workflow'],
    format: 'Notion Template',
  },
  {
    id: 2,
    title: 'UX Audit Framework',
    description:
      'A structured Figma + Notion bundle to run professional UX audits. Includes heuristic evaluation sheets, severity rating system, and a client-ready report template.',
    type: 'Framework',
    price: 39,
    image: '/ux-audit-framework-cover.png',
    gumroadUrl: 'https://alfonsowave74.gumroad.com/l/qlyyj',
    tags: ['UX Research', 'Figma', 'Notion', 'Audit'],
    format: 'Figma + Notion',
  },
  {
    id: 3,
    title: 'Design System Documentation Kit',
    description:
      'Notion template to document your design system properly. Covers component specs, usage guidelines, governance rules, and versioning — ready to share with engineering.',
    type: 'Documentation',
    price: 24,
    image: '/design-system-docs-cover.png',
    gumroadUrl: 'https://alfonsowave74.gumroad.com/l/pafjjp',
    tags: ['Design Systems', 'Notion', 'Documentation'],
    format: 'Notion Template',
  },
  {
    id: 4,
    title: 'Design Sprint Facilitation Kit',
    description:
      'Everything you need to run a 5-day Design Sprint. Figma workshop boards, Notion planning docs, facilitator scripts, and voting/prioritisation tools.',
    type: 'Workshop Kit',
    price: 34,
    image: '/design-sprint-cover.png',
    gumroadUrl: 'https://alfonsowave74.gumroad.com/l/qfvbs',
    tags: ['Design Sprint', 'Figma', 'Workshop', 'Facilitation'],
    format: 'Figma + Notion',
  },
  {
    id: 5,
    title: 'Design Team Onboarding Kit',
    description:
      'A Notion workspace to onboard new designers in under a week. Includes day-by-day plans, tool access checklists, buddy system setup, and first 30-60-90 day goals.',
    type: 'Onboarding',
    price: 19,
    image: '/team-onboarding-cover.png',
    gumroadUrl: 'https://alfonsowave74.gumroad.com/l/hdxkhs',
    tags: ['Onboarding', 'Notion', 'Team Management'],
    format: 'Notion Template',
  },
];

const ALL = 'All';
const filterOptions = [ALL, 'Notion Template', 'Figma + Notion'];

const ResourcesPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>(ALL);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered =
    activeFilter === ALL
      ? resources
      : resources.filter((r) => r.format === activeFilter);

  return (
    <div className="min-h-screen py-32 px-6 md:px-12">
      <TransitionEffect />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center mb-6 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to home
          </Link>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-display font-bold tracking-tight mb-4">
            <AnimatedText text="DesignOps Resources" className="inline-block" once />
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
            Practical templates and frameworks built from 10+ years running design operations
            at scale. Ready to plug into your team on day one.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors duration-200 ${
                  activeFilter === f
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-muted/40 text-muted-foreground hover:border-primary/50 hover:text-primary'
                }`}
              >
                {f}
              </button>
            ))}
            <span className="ml-auto self-center text-sm text-muted-foreground">
              {filtered.length} resource{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((resource) => (
            <ResourceCard key={resource.id} {...resource} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 border border-muted/20 rounded-2xl p-8 md:p-12 text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
            Custom work
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need something tailored to your team?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            I offer DesignOps consulting and bespoke workshops for design teams.
            Let's talk about what your team actually needs.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;

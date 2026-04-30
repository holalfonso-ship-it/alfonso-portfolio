import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy';
import WanupCaseStudy from '@/components/WanupCaseStudy';
import AiDesignCaseStudy from '@/components/AiDesignCaseStudy';
import CoperamaCaseStudy from '@/components/CoperamaCaseStudy';

// ─── Metadata per slug ────────────────────────────────────────────────────────

const META: Record<string, { title: string; description: string }> = {
  'ai-cleaner': {
    title: 'AI Cleaner Case Study — Alfonso Zamorano',
    description:
      'How I led product design for AI Cleaner — an iOS app that reached a 4.5 App Store rating and recovered 2.5GB per user through AI-powered DesignOps.',
  },
  wanup: {
    title: 'Wanup Case Study — Alfonso Zamorano',
    description:
      'How I redesigned the Wanup hotel booking experience — increasing checkout rates by 42% and driving 3.1× repeat bookings through loyalty UX.',
  },
  'ai-design': {
    title: 'AI Design Case Study — Alfonso Zamorano',
    description:
      'How I designed AI Design — an iOS app that lets anyone reimagine their living space with a single photo, achieving a 4.7★ App Store rating and 68% increase in purchase confidence.',
  },
  coperama: {
    title: 'Coperama Case Study — Alfonso Zamorano',
    description:
      'How I designed Coperama — a centralised procurement platform for NH Hotels that reduced purchasing costs by 23%, onboarded 340+ properties, and saved an estimated €2.4M annually.',
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const meta = slug ? META[slug] : undefined;

  const renderContent = () => {
    switch (slug) {
      case 'ai-cleaner':
        return <FeaturedCaseStudy />;
      case 'wanup':
        return <WanupCaseStudy />;
      case 'ai-design':
        return <AiDesignCaseStudy />;
      case 'coperama':
        return <CoperamaCaseStudy />;
      default:
        return (
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-muted-foreground">Case study not found.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {meta && (
        <Helmet>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
        </Helmet>
      )}

      {/* ── Back navigation bar ── sits below fixed header ───────────────── */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto pt-24 pb-0">
        <Link
          to="/#case-study"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft
            size={14}
            className="transition-transform group-hover:-translate-x-0.5"
          />
          All case studies
        </Link>
      </div>

      {/* ── Case study content ───────────────────────────────────────────── */}
      {renderContent()}
    </div>
  );
};

export default CaseStudyPage;

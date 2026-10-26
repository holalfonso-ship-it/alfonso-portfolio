import aiCleanerCover from '@/assets/Cover-icleaner.png';
import wanupCover from '@/assets/Cover-wanup.png';
import aiDesignCover from '@/assets/Cover-aidesign.png';
import coperamaCover from '@/assets/Cover-coperama.png';

// ─── Shared case-study registry ──────────────────────────────────────────────
// Single source of truth for both the homepage cards (CaseStudyTabs) and the
// header nav dropdown (DesktopNav). A case study with `externalUrl` set lives
// as a standalone static HTML page under public/case-studies/ — link to it
// with a plain <a>, not react-router <Link>, since it's a full page load.
// One without `externalUrl` still lives as an in-app React route.

export interface CaseStudyMeta {
  slug: string;
  label: string;
  type: string;
  title: string;
  thumb?: string;
  thumbAlt: string;
  tags: string[];
  metrics: { value: string; label: string }[];
  /** Hero metric index (0-based) — the one metric that gets visual priority. */
  heroMetricIndex: number;
  /** Set when this case study is a standalone static HTML page. */
  externalUrl?: string;
}

export const CASE_STUDIES: CaseStudyMeta[] = [
  {
    slug: 'ai-cleaner',
    label: 'AI Cleaner',
    externalUrl: '/case-studies/ai-cleaner-deep.html',
    type: 'B2C · iOS App',
    title: 'AI Cleaner',
    thumb: aiCleanerCover as string | undefined,
    thumbAlt: 'AI Cleaner app interface',
    tags: ['DesignOps', 'AI Integration', 'Team Leadership'],
    heroMetricIndex: 2,
    metrics: [
      { value: '4.5', label: 'App Store' },
      { value: '+30%', label: 'Delivery speed' },
      { value: '+2.5GB', label: 'Per user' },
    ],
  },
  {
    slug: 'wanup',
    label: 'Wanup',
    externalUrl: '/case-studies/wanup-deep.html',
    type: 'B2C · Web',
    title: 'Wanup',
    thumb: wanupCover as string | undefined,
    thumbAlt: 'Wanup hotel booking platform',
    tags: ['Booking Experience', 'Design System', 'Loyalty UX'],
    heroMetricIndex: 0,
    metrics: [
      { value: '+42%', label: 'Checkout rate' },
      { value: '28%', label: 'Abandonment' },
      { value: '3.1×', label: 'Repeat booking' },
    ],
  },
  {
    slug: 'ai-design',
    label: 'AI Design',
    externalUrl: '/case-studies/ai-design-deep.html',
    type: 'B2C · iOS App',
    title: 'AI Design',
    thumb: aiDesignCover as string | undefined,
    thumbAlt: 'AI Design — interior space redesign app',
    tags: ['Generative AI', 'Computer Vision', 'iOS App'],
    heroMetricIndex: 1,
    metrics: [
      { value: '4.7★', label: 'App Store' },
      { value: '+68%', label: 'Purchase confidence' },
      { value: '4.2×', label: 'Sessions/week' },
    ],
  },
  {
    slug: 'design-system',
    label: 'Design System',
    externalUrl: '/case-studies/design-system-deep.html',
    type: 'B2B · Design System',
    title: 'Design System',
    thumb: '/designsystem-casestudy.png',
    thumbAlt: 'AI Cleaner design system — bidirectional light/dark tokens',
    tags: ['Design Tokens', 'Component Library', 'Dual-reading Direction'],
    heroMetricIndex: 0,
    metrics: [
      { value: '120+', label: 'Components' },
      { value: '2', label: 'Markets covered' },
      { value: '+30%', label: 'Delivery speed' },
    ],
  },
  {
    slug: 'coperama',
    label: 'Coperama',
    externalUrl: '/case-studies/coperama-deep.html',
    type: 'B2B · Web Platform',
    title: 'Coperama',
    thumb: coperamaCover as string | undefined,
    thumbAlt: 'Coperama — NH Hotels centralised procurement platform',
    tags: ['Enterprise Design', 'Procurement UX', 'B2B Dashboard'],
    heroMetricIndex: 2,
    metrics: [
      { value: '−23%', label: 'Procurement costs' },
      { value: '340+', label: 'Hotels' },
      { value: '€2.4M', label: 'Annual savings' },
    ],
  },
];

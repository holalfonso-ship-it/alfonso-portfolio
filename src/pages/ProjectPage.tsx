import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProjectDetail from '../components/ProjectDetail';
import { CrossTeamCollaborationContent } from '../components/project-contents/CrossTeamCollaborationContent';
import { LeadtechGroupContent } from '../components/project-contents/LeadtechGroupContent';
import { LoyaltyAppContent } from '../components/project-contents/LoyaltyAppContent';
import { DesignOpsWorkflowContent } from '../components/project-contents/DesignOpsWorkflowContent';
import { DataVisualizationContent } from '../components/project-contents/DataVisualizationContent';
import { MobileAppDesignContent } from '../components/project-contents/MobileAppDesignContent';
import { VideoUpLandingContent } from '../components/project-contents/VideoUpLandingContent';
import { ResumeCoachContent } from '../components/project-contents/ResumeCoachContent';
import { OnlineCVContent } from '../components/OnlineCVContent';
import { WanupWebappContent } from '../components/project-contents/WanupWebappContent';

// This is our project data that should eventually be moved to a separate data file
const projects = [
  {
    id: 5,
    title: 'Mobile App Design',
    slug: 'mobile-app-design',
    description: 'Designed cross-platform mobile applications for iOS and Android that increased user retention by 35% and improved app store ratings by 1.5 stars.',
    category: 'Mobile',
    image: '/lovable-uploads/5cb0453f-dc0d-4b19-852f-8c3131354284.png',
    heroImages: [
      '/lovable-uploads/5cb0453f-dc0d-4b19-852f-8c3131354284.png'
    ],
    link: '/projects/mobile-app-design',
    content: <MobileAppDesignContent />
  },
  {
    id: 1,
    title: 'Design Systems',
    slug: 'design-systems',
    description: 'Created and maintained a comprehensive design system that increased development efficiency by 30% and ensured visual consistency across multiple products.',
    category: 'Design System',
    image: '/lovable-uploads/3dcf1c6d-4dde-437c-b626-bbe99631bf3f.png',
    heroImages: [
      '/lovable-uploads/3dcf1c6d-4dde-437c-b626-bbe99631bf3f.png'
    ],
    link: '/projects/design-systems',
    content: <LeadtechGroupContent />
  },
  {
    id: 2,
    title: 'DesignOps Workflow',
    slug: 'designops-workflow',
    description: 'Implemented and optimized DesignOps processes that enhanced team collaboration, reduced handoff time by 40%, and improved overall design efficiency.',
    category: 'DesignOps',
    image: '/lovable-uploads/ed4aab16-f8c3-46b1-be10-d44758f7d149.png',
    heroImages: [
      '/lovable-uploads/57eeac73-35bd-4bdd-bd6d-e697ef033612.png'
    ],
    link: '/projects/designops-workflow',
    content: <DesignOpsWorkflowContent />
  },
  {
    id: 3,
    title: 'Loyalty WebApp B2B SaaS',
    slug: 'loyalty-webapp-b2b-saas',
    description: 'Redesigned the B2B loyalty platform resulting in a 25% increase in client engagement and a 15% improvement in conversion rates for enterprise customers.',
    category: 'UX/UI',
    image: '/lovable-uploads/645e23f4-887a-4ecb-8564-a0d1b002b217.png',
    heroImages: [
      '/lovable-uploads/645e23f4-887a-4ecb-8564-a0d1b002b217.png',
      '/lovable-uploads/375ecce8-c782-4b61-a40f-a6fcd87cf4e7.png',
      '/lovable-uploads/c7103e46-5321-457f-b71d-7e63c4f3ae06.png',
      '/lovable-uploads/304f003e-df34-4217-85fd-3591e8869fa2.png',
      '/lovable-uploads/fc7651f1-c719-479c-b96c-dc96a4fb5cf9.png'
    ],
    link: '/projects/loyalty-webapp-b2b-saas',
    content: <LoyaltyAppContent />
  },
  {
    id: 4,
    title: 'Data Visualization',
    slug: 'data-visualization',
    description: 'Developed intuitive dashboards and data visualizations that increased stakeholder engagement by 20% and improved decision-making processes.',
    category: 'Product Design',
    image: '/lovable-uploads/b3fb73d0-b03b-495d-81d7-fb908ec0b8e6.png',
    heroImages: [
      '/lovable-uploads/b3fb73d0-b03b-495d-81d7-fb908ec0b8e6.png'
    ],
    link: '/projects/data-visualization',
    content: <DataVisualizationContent />
  },
  {
    id: 7,
    title: 'Cross-team Collaboration Framework',
    slug: 'cross-team-collaboration-framework',
    description: 'Created a structured DesignOps framework that improved collaboration between design, development, and product teams, reducing project delivery time by 35%.',
    category: 'DesignOps',
    image: '/lovable-uploads/a8a3c542-efbf-46c2-a78b-bcd8a2ddcb83.png',
    heroImages: [
      '/lovable-uploads/a8a3c542-efbf-46c2-a78b-bcd8a2ddcb83.png'
    ],
    link: '/projects/cross-team-collaboration-framework',
    content: <CrossTeamCollaborationContent />
  },
  {
    id: 8,
    title: 'ResumeCoach Landing Page',
    slug: 'resumecoach-landing-page',
    description: 'Designed a user-centric landing page for ResumeCoach with clear CTAs, professional aesthetics, and mobile-optimized experience that increased conversions by 42%.',
    category: 'UI Design',
    image: '/lovable-uploads/bf0527b8-71d8-4a05-bb27-3cf2102daa11.png',
    heroImages: [
      '/lovable-uploads/bf0527b8-71d8-4a05-bb27-3cf2102daa11.png'
    ],
    link: '/projects/resumecoach-landing-page',
    content: <ResumeCoachContent />
  },
  {
    id: 9,
    title: 'OnlineCV Landing Page',
    slug: 'onlinecv-landing-page',
    description: 'Designed a conversion-focused landing page for OnlineCV with an intuitive user flow, refined color palette, and mobile-first approach that enhanced user engagement.',
    category: 'UI Design',
    image: '/lovable-uploads/b45151f4-a928-4038-8b12-0ac67c4ed2a9.png',
    heroImages: [
      '/lovable-uploads/b45151f4-a928-4038-8b12-0ac67c4ed2a9.png'
    ],
    link: '/projects/onlinecv-landing-page',
    content: <OnlineCVContent />
  },
  {
    id: 6,
    title: 'VideoUp Landing Page',
    slug: 'videoup-landing-page',
    description: 'Designed a conversion-driven landing page for VideoUp, an AI-powered video editing app, with modern aesthetics and optimized user experience.',
    category: 'UI Design',
    image: '/lovable-uploads/5d3e945c-e1a2-425a-925e-7f2349820971.png',
    heroImages: [
      '/lovable-uploads/5d3e945c-e1a2-425a-925e-7f2349820971.png'
    ],
    link: '/projects/videoup-landing-page',
    content: <VideoUpLandingContent />
  },
  {
    id: 3,
    title: 'Wanup Webapp B2B SaaS',
    slug: 'wanup-webapp-b2b-saas',
    description: 'Designed and developed a comprehensive B2B SaaS platform for hotel bookings and loyalty program management, featuring an intuitive user interface and streamlined booking experience.',
    category: 'UX/UI',
    image: '/lovable-uploads/fdda8111-6522-4d6c-bc11-7be46ab54f7e.png',
    heroImages: [
      '/lovable-uploads/fdda8111-6522-4d6c-bc11-7be46ab54f7e.png',
      '/lovable-uploads/8e40ce72-3e8b-4985-afc8-8f92e34cfc66.png',
      '/lovable-uploads/5ea3a279-d974-4fe4-85f5-ccb57fffa6a2.png',
      '/lovable-uploads/d18bb0bd-850d-42b3-88bc-b035d36fb153.png',
      '/lovable-uploads/131a06a8-d704-4c76-966d-3237434734d8.png'
    ],
    link: '/projects/wanup-webapp-b2b-saas',
    content: <WanupWebappContent />
  }
];

const ProjectPage: React.FC = () => {
  const { id, slug } = useParams<{ id?: string, slug?: string }>();
  
  // Find project by ID or slug
  const project = id 
    ? projects.find(p => p.id.toString() === id)
    : projects.find(p => p.slug === slug);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('Project page mounted, id:', id, 'slug:', slug, 'project:', project);
  }, [id, slug, project]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <ProjectDetail project={project} />
      </main>
    </div>
  );
};

export default ProjectPage;

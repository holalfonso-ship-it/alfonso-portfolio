
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProjectDetail from '../components/ProjectDetail';
import { CrossTeamCollaborationContent } from '../components/project-contents/CrossTeamCollaborationContent';
import { LeadtechGroupContent } from '../components/project-contents/LeadtechGroupContent';
import { LoyaltyAppContent } from '../components/project-contents/LoyaltyAppContent';
import { DesignOpsWorkflowContent } from '../components/project-contents/DesignOpsWorkflowContent';
import { DataVisualizationContent } from '../components/project-contents/DataVisualizationContent';
import { MobileAppDesignContent } from '../components/project-contents/MobileAppDesignContent';

// This is our project data that should eventually be moved to a separate data file
const projects = [
  {
    id: 1,
    title: 'Design Systems',
    description: 'Created and maintained a comprehensive design system that increased development efficiency by 30% and ensured visual consistency across multiple products.',
    category: 'Design System',
    image: '/lovable-uploads/3dcf1c6d-4dde-437c-b626-bbe99631bf3f.png',
    heroImages: [
      '/lovable-uploads/3dcf1c6d-4dde-437c-b626-bbe99631bf3f.png'
    ],
    link: '/project/1',
    content: <LeadtechGroupContent />
  },
  {
    id: 2,
    title: 'DesignOps Workflow',
    description: 'Implemented and optimized DesignOps processes that enhanced team collaboration, reduced handoff time by 40%, and improved overall design efficiency.',
    category: 'DesignOps',
    image: '/lovable-uploads/ed4aab16-f8c3-46b1-be10-d44758f7d149.png',
    heroImages: [
      '/lovable-uploads/57eeac73-35bd-4bdd-bd6d-e697ef033612.png'
    ],
    link: '/project/2',
    content: <DesignOpsWorkflowContent />
  },
  {
    id: 3,
    title: 'Loyalty App',
    description: 'Redesigned the loyalty app experience resulting in a 25% increase in user engagement and a 15% improvement in conversion rates.',
    category: 'UX/UI',
    image: '/lovable-uploads/304f003e-df34-4217-85fd-3591e8869fa2.png',
    heroImages: [
      '/lovable-uploads/304f003e-df34-4217-85fd-3591e8869fa2.png'
    ],
    link: '/project/3',
    content: <LoyaltyAppContent />
  },
  {
    id: 4,
    title: 'Data Visualization',
    description: 'Developed intuitive dashboards and data visualizations that increased stakeholder engagement by 20% and improved decision-making processes.',
    category: 'Product Design',
    image: '/lovable-uploads/b3fb73d0-b03b-495d-81d7-fb908ec0b8e6.png',
    heroImages: [
      '/lovable-uploads/b3fb73d0-b03b-495d-81d7-fb908ec0b8e6.png'
    ],
    link: '/project/4',
    content: <DataVisualizationContent />
  },
  {
    id: 5,
    title: 'Mobile App Design',
    description: 'Designed cross-platform mobile applications for iOS and Android that increased user retention by 35% and improved app store ratings by 1.5 stars.',
    category: 'Mobile',
    image: '/lovable-uploads/5cb0453f-dc0d-4b19-852f-8c3131354284.png',
    heroImages: [
      '/lovable-uploads/5cb0453f-dc0d-4b19-852f-8c3131354284.png'
    ],
    link: '/project/5',
    content: <MobileAppDesignContent />
  },
  {
    id: 7,
    title: 'Cross-team Collaboration Framework',
    description: 'Created a structured DesignOps framework that improved collaboration between design, development, and product teams, reducing project delivery time by 35%.',
    category: 'DesignOps',
    image: '/lovable-uploads/a8a3c542-efbf-46c2-a78b-bcd8a2ddcb83.png',
    heroImages: [
      '/lovable-uploads/a8a3c542-efbf-46c2-a78b-bcd8a2ddcb83.png'
    ],
    link: '/project/7',
    content: <CrossTeamCollaborationContent />
  }
];

const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id.toString() === id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('Project page mounted, id:', id, 'project:', project);
  }, [id, project]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <ProjectDetail project={project} />
      </main>
    </div>
  );
};

export default ProjectPage;

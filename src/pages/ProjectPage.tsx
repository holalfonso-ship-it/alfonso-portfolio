
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectDetail from '../components/ProjectDetail';
import { CrossTeamCollaborationContent } from '../components/project-contents/CrossTeamCollaborationContent';
import { LeadtechGroupContent } from '../components/project-contents/LeadtechGroupContent';
import { LoyaltyAppContent } from '../components/project-contents/LoyaltyAppContent';
import { DesignOpsWorkflowContent } from '../components/project-contents/DesignOpsWorkflowContent';
import { DataVisualizationContent } from '../components/project-contents/DataVisualizationContent';

// This is our project data that should eventually be moved to a separate data file
const projects = [
  {
    id: 1,
    title: 'Leadtech Design System',
    description: 'Created and maintained a comprehensive design system that increased development efficiency by 30% and ensured visual consistency across multiple products.',
    category: 'Design System',
    image: '/lovable-uploads/3dcf1c6d-4dde-437c-b626-bbe99631bf3f.png',
    heroImages: [
      '/lovable-uploads/3dcf1c6d-4dde-437c-b626-bbe99631bf3f.png'
    ],
    link: '/project/leadtech-design-system',
    content: <LeadtechGroupContent />
  },
  {
    id: 2,
    title: 'DesignOps Workflow',
    description: 'Implemented and optimized DesignOps processes that enhanced team collaboration, reduced handoff time by 40%, and improved overall design efficiency.',
    category: 'DesignOps',
    image: '/lovable-uploads/8c59b616-51e1-4471-9126-d4759111deb2.png',
    heroImages: [
      '/lovable-uploads/8c59b616-51e1-4471-9126-d4759111deb2.png'
    ],
    link: '/project/designops-workflow',
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
    link: '/project/loyalty-app',
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
    link: '/project/data-visualization',
    content: <DataVisualizationContent />
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
    link: '/project/cross-team-collaboration',
    content: <CrossTeamCollaborationContent />
  }
];

const ProjectPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find(p => p.id.toString() === projectId);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectPage;

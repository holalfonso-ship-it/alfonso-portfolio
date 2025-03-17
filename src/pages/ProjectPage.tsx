
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectDetail from '../components/ProjectDetail';
import { CrossTeamCollaborationContent } from '../components/project-contents/CrossTeamCollaborationContent';
import { LeadtechGroupContent } from '../components/project-contents/LeadtechGroupContent';
import { LoyaltyAppContent } from '../components/project-contents/LoyaltyAppContent';
import { DesignOpsWorkflowContent } from '../components/project-contents/DesignOpsWorkflowContent';

// This is our project data that should eventually be moved to a separate data file
const projects = [
  {
    id: 1,
    title: 'Leadtech Design System',
    description: 'Created and maintained a comprehensive design system that increased development efficiency by 30% and ensured visual consistency across multiple products.',
    category: 'Design System',
    image: '/lovable-uploads/4fe6b813-f155-406e-9d47-cab1a5940040.png',
    heroImages: [
      '/lovable-uploads/4fe6b813-f155-406e-9d47-cab1a5940040.png'
    ],
    link: '/project/leadtech-design-system',
    content: <LeadtechGroupContent />
  },
  {
    id: 2,
    title: 'DesignOps Workflow',
    description: 'Implemented and optimized DesignOps processes that enhanced team collaboration, reduced handoff time by 40%, and improved overall design efficiency.',
    category: 'DesignOps',
    image: 'https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef0b2c3c8362baef07ebb_designops.jpg',
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
    image: 'https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef000e7b4a454c6019b93_data-viz.jpg',
    link: '/project/data-visualization'
  },
  {
    id: 5,
    title: 'Mobile Banking App',
    description: 'Designed a user-friendly mobile banking application with a focus on accessibility, resulting in a 35% increase in daily active users.',
    category: 'UX/UI',
    image: 'https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef019090b436b96af1e21_mobileapp.jpg',
    link: '/project/mobile-banking-app'
  },
  {
    id: 6,
    title: 'E-commerce Platform',
    description: 'Redesigned the e-commerce experience with a focus on user journey optimization, leading to a 28% increase in conversion rates and improved customer satisfaction.',
    category: 'Product Design',
    image: 'https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef02a090b436b96af1f7b_ecommerce.jpg',
    link: '/project/ecommerce-platform'
  },
  {
    id: 7,
    title: 'Cross-team Collaboration Framework',
    description: 'Created a structured DesignOps framework that improved collaboration between design, development, and product teams, reducing project delivery time by 35%.',
    category: 'DesignOps',
    image: 'https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef0b2c3c8362baef07ebb_designops.jpg',
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

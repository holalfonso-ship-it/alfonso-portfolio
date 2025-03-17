
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import TransitionEffect from './TransitionEffect';
import { Button } from './ui/button';

interface ProjectDetailProps {
  project?: {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    content?: React.ReactNode;
    link?: string;
  };
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const { id } = useParams();
  
  // If no project is provided directly, we'd typically fetch it based on ID
  // This is a placeholder for actual data fetching logic
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <Button asChild>
            <Link to="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <TransitionEffect />
      <div className="pt-24 pb-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <Link 
            to="/#projects" 
            className="inline-flex items-center text-sm text-primary mb-6 hover:underline transition-all"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">{project.title}</h1>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="text-xs font-medium bg-primary/20 text-primary px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>
          
          <div className="aspect-video w-full rounded-lg overflow-hidden mb-12">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {project.content || (
              <>
                <h2>Project Overview</h2>
                <p className="text-lg">{project.description}</p>
                <h2>Challenge</h2>
                <p>
                  The primary challenge in this project was to create a solution that balanced user needs with business goals. 
                  We needed to solve complex UX problems while maintaining brand consistency and technical feasibility.
                </p>
                <h2>Solution</h2>
                <p>
                  After extensive research and multiple iterations, we created a design system that enabled consistency across 
                  all touchpoints. The solution improved user engagement by 30% and reduced development time by 40%.
                </p>
                <h2>Result</h2>
                <p>
                  The implementation of this project led to significant improvements in user experience and business metrics:
                </p>
                <ul>
                  <li>30% increase in user engagement</li>
                  <li>40% reduction in development time</li>
                  <li>25% increase in conversion rates</li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;

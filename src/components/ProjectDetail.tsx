import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ImageIcon, Home } from 'lucide-react';
import TransitionEffect from './TransitionEffect';
import { Button } from './ui/button';
import ZoomableImage from './ui/zoomable-image';

interface ProjectDetailProps {
  project?: {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    heroImages?: string[];
    content?: React.ReactNode;
    link?: string;
  };
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (project) {
      setImageLoaded(false);
      setImageError(false);
    }
  }, [project]);

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>
      </div>;
  }

  const displayImage = project.heroImages && project.heroImages.length > 0 ? project.heroImages[0] : project.image;
  console.log("Project detail rendering:", project.title);
  console.log("Display image path:", displayImage);

  return <>
      <TransitionEffect />
      <div className="pt-32 pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="inline-flex items-center text-sm text-primary hover:underline transition-all">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
            
            {project.title === 'Loyalty WebApp B2B SaaS' && (
              <Link 
                to="/" 
                className="flex items-center gap-2 px-3 py-2 bg-background hover:bg-secondary/20 rounded-md transition-all"
              >
                <div className="w-40 h-12 overflow-hidden rounded-md">
                  <img 
                    src="/lovable-uploads/724b4ae0-8e3b-433c-9644-e252ff97a553.png" 
                    alt="Wanup website" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <Home size={16} className="text-primary" />
              </Link>
            )}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">{project.title}</h1>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <span className="text-xs font-medium bg-primary/20 text-primary px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>
          
          <div className="aspect-video w-full rounded-lg overflow-hidden mb-16 bg-muted/20">
            {!imageLoaded && !imageError && (
              <div className="w-full h-full flex items-center justify-center">
                <div className="animate-pulse text-muted">Loading image...</div>
              </div>
            )}
            
            {imageError && (
              <div className="w-full h-full flex items-center justify-center bg-muted/20 p-4">
                <img 
                  alt="DesignOps mission" 
                  src="/lovable-uploads/f0f6e294-6abf-4bc5-be7d-4804a64c9383.png" 
                  className="w-full h-full object-cover" 
                />
              </div>
            )}
            
            {!imageError && (
              <ZoomableImage
                src={displayImage}
                alt={project.title}
                className={`w-full h-full object-cover ${imageLoaded ? 'block' : 'hidden'}`}
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  console.error("Image failed to load:", displayImage);
                  setImageError(true);
                }}
              />
            )}
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            {project.content || <>
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
              </>}
          </div>
        </div>
      </div>
    </>;
};

export default ProjectDetail;

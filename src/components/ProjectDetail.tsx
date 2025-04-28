import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
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
  return <>
      <TransitionEffect />
      <article className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <header className="mb-16">
            <nav className="flex justify-between items-center mb-12">
              <Link to="/" className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
              </Link>
              
              {project.title === 'Loyalty WebApp B2B SaaS' && <Link to="/" className="flex items-center gap-2 px-3 py-2 bg-background/50 hover:bg-secondary/20 rounded-md transition-all">
                  <div className="w-40 h-12 overflow-hidden rounded-md">
                    <img src="/lovable-uploads/724b4ae0-8e3b-433c-9644-e252ff97a553.png" alt="Wanup website" className="w-full h-full object-cover" />
                  </div>
                  <Home size={16} className="text-primary" />
                </Link>}
            </nav>
            
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
                {project.title}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                {project.description}
              </p>
            </div>
          </header>
          
          <div className="space-y-16">
            <figure className="relative">
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted/20">
                {!imageLoaded && !imageError && <div className="w-full h-full flex items-center justify-center">
                    <div className="animate-pulse text-muted">Loading image...</div>
                  </div>}
                
                {imageError && <div className="w-full h-full flex items-center justify-center bg-muted/20 p-4">
                    <img alt="DesignOps mission" className="w-full h-full object-cover" src="/lovable-uploads/11bc8c00-3a54-4cd3-be4e-80e5a99cbf37.png" />
                  </div>}
                
                {!imageError && <ZoomableImage src={displayImage} alt={project.title} className={`w-full h-full object-cover ${imageLoaded ? 'block' : 'hidden'}`} onLoad={() => setImageLoaded(true)} onError={() => {
                console.error("Image failed to load:", displayImage);
                setImageError(true);
              }} />}
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                {project.title} - Project Overview
              </figcaption>
            </figure>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
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
      </article>
    </>;
};
export default ProjectDetail;
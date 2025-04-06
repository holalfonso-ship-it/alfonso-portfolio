
import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedText from '@/components/AnimatedText';
import TransitionEffect from '@/components/TransitionEffect';
import { Button } from '@/components/ui/button';
import PersonalProjectCard from '@/components/PersonalProjectCard';

const PersonalProjectsPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const personalProjects = [
    {
      id: 1,
      title: "Conexion Monitor",
      description: "A Figma plugin that helps designers monitor and manage connections between components in complex design systems. Visualizes dependencies and highlights potential issues.",
      type: "Figma Plugin",
      image: "/lovable-uploads/42b120a7-920f-4506-8581-6404228a811e.png",
      link: "https://www.figma.com/community/plugin/1471535543456488959/conexion-monitor",
      tags: ["Design Systems", "Figma Plugin", "Developer Tool"]
    },
    {
      id: 2,
      title: "DesignOps Dashboard",
      description: "A custom dashboard built to visualize design team metrics and streamline DesignOps workflows. Provides insights on team productivity and project status.",
      type: "Internal Tool",
      image: "/lovable-uploads/a8a3c542-efbf-46c2-a78b-bcd8a2ddcb83.png", 
      link: "#",
      tags: ["DesignOps", "Dashboard", "Analytics"]
    },
    {
      id: 3,
      title: "Style Guide Generator",
      description: "A tool that automatically generates comprehensive style guides from design files, saving hours of documentation work for design teams.",
      type: "Web Application",
      image: "/lovable-uploads/3dcf1c6d-4dde-437c-b626-bbe99631bf3f.png",
      link: "#",
      tags: ["Style Guide", "Design Systems", "Automation"]
    },
    {
      id: 4,
      title: "Accessibility Checker",
      description: "A design plugin that analyzes designs for accessibility issues and provides suggestions for improvements, helping create more inclusive products.",
      type: "Design Tool",
      image: "/lovable-uploads/304f003e-df34-4217-85fd-3591e8869fa2.png",
      link: "#",
      tags: ["Accessibility", "Design Tool", "UI/UX"]
    }
  ];

  return (
    <div className="min-h-screen py-32 px-6 md:px-12">
      <TransitionEffect />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center mb-6 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to home
          </Link>
          
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-display font-bold tracking-tight mb-4">
            <AnimatedText text="Personal Design Projects" className="inline-block" once />
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6">
            Explore my personal design projects and experiments that showcase my passion for creating innovative design solutions and tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {personalProjects.map((project) => (
            <PersonalProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              type={project.type}
              image={project.image}
              link={project.link}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalProjectsPage;

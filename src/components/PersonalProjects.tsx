
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedText from './AnimatedText';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const PersonalProjects: React.FC = () => {
  // Highlight a few selected personal projects for the home page
  const featuredProjects = [
    {
      id: 1,
      title: "Conexion Monitor",
      description: "A Figma plugin that helps designers monitor and manage connections between components in complex design systems.",
      type: "Figma Plugin",
      image: "/lovable-uploads/52d9cc5b-87a4-458c-a97b-1d77acf95ad4.png",
    },
    {
      id: 2,
      title: "DesignOps Dashboard",
      description: "A custom dashboard built to visualize design team metrics and streamline DesignOps workflows.",
      type: "Internal Tool",
      image: "/lovable-uploads/86277ae4-f579-48fb-941c-775548ddac82.png",
    }
  ];
  
  return (
    <section id="personal-projects" className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <span className="inline-block text-sm md:text-base font-medium tracking-wider mb-4 py-1 px-4 rounded-full bg-primary/20 text-primary">
            Personal Projects
          </span>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 md:mb-0 tracking-tight">
              <AnimatedText text="Design Experiments & Tools" className="inline-block" once />
            </h2>
            
            <Link to="/personal-projects">
              <Button variant="ghost" className="group">
                View all projects
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mt-4">
            Explore my side projects and experiments where I develop design tools and solutions for everyday design challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <Link to="/personal-projects" key={project.id}>
              <Card className="overflow-hidden border border-muted/20 transition-all duration-300 hover:border-primary/50 hover:shadow-lg group h-full">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-muted/30">
                      {project.type}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold tracking-tight mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;

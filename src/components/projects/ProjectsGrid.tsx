
import React from 'react';
import { cn } from "@/lib/utils";
import ProjectCard from '../ProjectCard';
import { ProjectType } from '@/types/project';
import { AspectRatio } from '../ui/aspect-ratio';

interface ProjectsGridProps {
  projects: ProjectType[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  // Ensure mobile app project is always first
  const mobileAppProject = projects.find(p => p.slug === 'mobile-app-design');
  const otherProjects = projects.filter(p => p.slug !== 'mobile-app-design');
  
  // Arrange projects with mobile app first, then others
  const sortedProjects = [
    ...(mobileAppProject ? [mobileAppProject] : []),
    ...otherProjects
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {sortedProjects.map((project, index) => {
        const isFeatured = index === 0;
        
        return (
          <div 
            key={project.id} 
            className={cn(
              "w-full",
              isFeatured && "md:col-span-2"
            )}
          >
            <AspectRatio ratio={16/9}>
              <ProjectCard
                title={project.title}
                description={project.description}
                category={project.category}
                image={project.image}
                link={project.link}
                index={index}
                featured={isFeatured}
              />
            </AspectRatio>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsGrid;

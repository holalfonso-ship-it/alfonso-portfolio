
import React from 'react';
import { cn } from "@/lib/utils";
import ProjectCard from '../ProjectCard';
import { ProjectType } from '@/types/project';

interface ProjectsGridProps {
  projects: ProjectType[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  const mobileAppProject = projects.find(p => p.slug === 'mobile-app-design');
  const wanupProject = projects.find(p => p.slug === 'wanup-webapp-b2b-saas');
  const otherProjects = projects.filter(p => 
    p.slug !== 'mobile-app-design' && p.slug !== 'wanup-webapp-b2b-saas'
  );
  
  const sortedProjects = [
    ...(mobileAppProject ? [mobileAppProject] : []),
    ...(wanupProject ? [wanupProject] : []),
    ...otherProjects
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
      {sortedProjects.map((project, index) => {
        const isFirstProject = index === 0;
        const isSecondProject = index === 1;
        
        return (
          <div 
            key={project.id} 
            className={cn(
              "w-full",
              isFirstProject && "md:col-span-2 aspect-[21/9]",
              !isFirstProject && "aspect-[4/3]",
              isSecondProject && "md:aspect-[3/2]"
            )}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              category={project.category}
              image={project.image}
              link={project.link}
              index={index}
              featured={isFirstProject}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsGrid;

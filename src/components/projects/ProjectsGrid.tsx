
import React from 'react';
import { cn } from "@/lib/utils";
import ProjectCard from '../ProjectCard';
import { ProjectType } from '@/types/project';

interface ProjectsGridProps {
  projects: ProjectType[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  // Find featured projects to ensure they're always first
  const mobileAppProject = projects.find(p => p.slug === 'mobile-app-design');
  const wanupProject = projects.find(p => p.slug === 'wanup-webapp-b2b-saas');
  const otherProjects = projects.filter(p => 
    p.slug !== 'mobile-app-design' && p.slug !== 'wanup-webapp-b2b-saas'
  );
  
  // Arrange projects with mobile app first, then Wanup, then others
  const sortedProjects = [
    ...(mobileAppProject ? [mobileAppProject] : []),
    ...(wanupProject ? [wanupProject] : []),
    ...otherProjects
  ];

  return (
    <div className="grid grid-cols-1 gap-12 md:gap-24">
      {sortedProjects.map((project, index) => {
        const isFirstProject = index === 0;
        
        return (
          <div key={project.id} className={cn(
            "w-full",
            isFirstProject ? "aspect-[21/9]" : "aspect-video"
          )}>
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

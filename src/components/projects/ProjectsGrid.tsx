
import React from 'react';
import { cn } from "@/lib/utils";
import ProjectCard from '../ProjectCard';
import { ProjectType } from '@/types/project';

interface ProjectsGridProps {
  projects: ProjectType[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  // Find featured projects to ensure they're always first
  const wanupProject = projects.find(p => p.slug === 'wanup-webapp-b2b-saas');
  const mobileAppProject = projects.find(p => p.slug === 'mobile-app-design');
  const otherProjects = projects.filter(p => 
    p.slug !== 'wanup-webapp-b2b-saas' && p.slug !== 'mobile-app-design'
  );
  
  // Arrange projects with featured ones first
  const sortedProjects = [
    ...(wanupProject ? [wanupProject] : []),
    ...(mobileAppProject ? [mobileAppProject] : []),
    ...otherProjects
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
      {sortedProjects.map((project, index) => {
        const isFeatured = index < 2; // First two projects are featured
        
        return (
          <div key={project.id} className={cn(
            "col-span-1",
            isFeatured ? "md:col-span-12" : "md:col-span-6",
            isFeatured ? "aspect-[21/9]" : "aspect-[16/9]"
          )}>
            <ProjectCard
              title={project.title}
              description={project.description}
              category={project.category}
              image={project.image}
              link={project.link}
              index={index}
              featured={isFeatured}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsGrid;

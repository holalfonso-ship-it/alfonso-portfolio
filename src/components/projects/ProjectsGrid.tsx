
import React from 'react';
import { cn } from "@/lib/utils";
import ProjectCard from '../ProjectCard';
import { ProjectType } from '@/types/project';

interface ProjectsGridProps {
  projects: ProjectType[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  // Find Wanup project to ensure it's always first
  const wanupProject = projects.find(p => p.slug === 'wanup-webapp-b2b-saas');
  const otherProjects = projects.filter(p => p.slug !== 'wanup-webapp-b2b-saas');
  
  const sortedProjects = wanupProject 
    ? [wanupProject, ...otherProjects]
    : projects;

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
      {sortedProjects.map((project, index) => (
        <div key={project.id} className={cn(
          "col-span-1",
          index === 0 ? "md:col-span-12" : "md:col-span-6",
          index === 0 ? "aspect-[21/9]" : "aspect-[16/9]"
        )}>
          <ProjectCard
            title={project.title}
            description={project.description}
            category={project.category}
            image={project.image}
            link={project.link}
            index={index}
            featured={index === 0}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;

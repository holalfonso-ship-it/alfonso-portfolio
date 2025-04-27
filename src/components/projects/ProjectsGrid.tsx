
import React from 'react';
import { cn } from "@/lib/utils";
import ProjectCard from '../ProjectCard';
import { ProjectType } from '@/types/project';

interface ProjectsGridProps {
  projects: ProjectType[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
      {projects.map((project, index) => (
        <div key={project.id} className={cn(
          "col-span-1",
          index === 0 || index === 3 ? "md:col-span-12" : "md:col-span-6",
        )}>
          <ProjectCard
            title={project.title}
            description={project.description}
            category={project.category}
            image={project.image}
            link={project.link}
            index={index}
            featured={index === 0 || index === 3}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;

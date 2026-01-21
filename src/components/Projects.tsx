
import React, { useState } from 'react';
import ProjectsHeader from './projects/ProjectsHeader';
import ProjectCategories from './projects/ProjectCategories';
import ProjectsGrid from './projects/ProjectsGrid';
import { projectCategories, projects } from '@/data/projectsData';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-32 md:py-40 px-6 md:px-12 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <ProjectsHeader />
          <ProjectCategories 
            categories={projectCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        <ProjectsGrid projects={filteredProjects} />
      </div>
    </section>
  );
};

export default Projects;

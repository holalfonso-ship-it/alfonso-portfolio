import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';

const projects = [
  { id: 1, title: 'Design Systems', category: 'Design System' },
  { id: 2, title: 'DesignOps Workflow', category: 'DesignOps' },
  { id: 3, title: 'Loyalty App', category: 'UX/UI' },
  { id: 4, title: 'Data Visualization', category: 'Product Design' },
  { id: 7, title: 'Cross-team Collaboration', category: 'DesignOps' },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="My Work"
          title="Featured Projects"
          subtitle="A selection of my recent work showcasing my expertise in DesignOps, Product Design, and UI/UX."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link to={`/project/${project.id}`} key={project.id}>
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


import React from 'react';

const ProjectOverview: React.FC = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Project Overview</h2>
      <p>
        As the Senior Product Designer at Leadtech Group, I led the initiative to create and maintain a comprehensive design system 
        that significantly improved development efficiency and ensured visual consistency across our multiple products and brands.
      </p>
      <p>
        This project involved extensive collaboration with developers and stakeholders to establish a framework that would serve 
        as the foundation for all our digital products, enabling faster development cycles and a more cohesive user experience.
      </p>
      <div className="py-6">
        <img 
          src="/lovable-uploads/3dcf1c6d-4dde-437c-b626-bbe99631bf3f.png" 
          alt="Leadtech Design System Overview"
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-sm text-muted-foreground italic mt-2 text-center">
          Overview of the Leadtech Design System components and documentation
        </p>
      </div>
    </section>
  );
};

export default ProjectOverview;

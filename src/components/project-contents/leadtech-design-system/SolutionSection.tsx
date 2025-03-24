
import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Solution</h2>
      <p>
        After extensive research into design systems across the industry and evaluation of our specific needs, 
        I developed a comprehensive design system that included:
      </p>
      
      <div className="py-6">
        <img 
          src="/lovable-uploads/1b158ca3-ed08-40fa-bc55-7d519486e8c0.png" 
          alt="Design System Components"
          className="w-full rounded-lg shadow-lg"
        />
        <p className="text-sm text-muted-foreground italic mt-2 text-center">
          Visual representation of the design system components and structure
        </p>
      </div>
      
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Component Library:</strong> A structured collection of UI components with clear usage guidelines, 
          properties, and behaviors. Each component was designed to be flexible, accessible, and reusable.
        </li>
        <li>
          <strong>Design Tokens:</strong> Fundamental design atoms like colors, typography, spacing, and shadows 
          that ensure consistency across all platforms and products.
        </li>
        <li>
          <strong>Documentation:</strong> Comprehensive guidelines for designers and developers to understand how 
          and when to use each component, including code snippets and design best practices.
        </li>
        <li>
          <strong>Governance Process:</strong> A clear workflow for requesting, creating, and modifying components 
          to maintain the integrity of the design system as it evolved.
        </li>
      </ul>
      
      <p>
        The system was implemented in Figma for designers and as a React component library for developers, 
        ensuring a seamless handoff process and maintaining design consistency through all stages of development.
      </p>
    </section>
  );
};

export default SolutionSection;

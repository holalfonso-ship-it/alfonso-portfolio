
import React from 'react';

export const ProcessSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Design Process</h2>
      
      <div className="space-y-12">
        <div className="relative pl-8 border-l-2 border-primary/30">
          <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary"></div>
          <h3 className="text-xl font-semibold mb-3">Discovery & Research</h3>
          <p className="mb-4">
            Conducted extensive user research with hotel partners and loyalty program members to understand their needs, 
            pain points, and expectations. This included:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Stakeholder interviews with hotel managers</li>
            <li>User surveys with loyalty program members</li>
            <li>Competitive analysis of existing solutions</li>
            <li>Technical feasibility studies</li>
          </ul>
        </div>
        
        <div className="relative pl-8 border-l-2 border-primary/30">
          <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary"></div>
          <h3 className="text-xl font-semibold mb-3">UX Design & Information Architecture</h3>
          <p className="mb-4">
            Created a comprehensive information architecture and user flows that addressed the needs of both B2B and B2C users:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>User flow diagrams for key journeys</li>
            <li>Wireframes for critical interfaces</li>
            <li>Interactive prototypes for user testing</li>
          </ul>
        </div>
        
        <div className="relative pl-8">
          <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary"></div>
          <h3 className="text-xl font-semibold mb-3">Visual Design & Implementation</h3>
          <p className="mb-4">
            Developed a clean, professional visual design system that balanced functionality with brand identity:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Created responsive UI components</li>
            <li>Developed interactive prototypes</li>
            <li>Conducted usability testing</li>
            <li>Prepared detailed documentation for development</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

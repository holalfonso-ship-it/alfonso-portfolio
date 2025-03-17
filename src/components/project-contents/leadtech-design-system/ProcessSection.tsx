
import React from 'react';

export const ProcessSection: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Process</h2>
      <div className="relative pl-8 border-l border-primary/30 space-y-8 mb-12">
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">1</div>
          </div>
          <h3 className="text-xl font-bold mb-2">Research & Audit</h3>
          <p className="mb-2">
            Conducted a thorough audit of existing Leadtech products to identify inconsistencies and areas for improvement.
            Researched industry best practices and emerging design trends.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">2</div>
          </div>
          <h3 className="text-xl font-bold mb-2">Design & Development</h3>
          <p className="mb-2">
            Designed and developed a comprehensive set of UI components and design tokens. 
            Ensured that all components were accessible, responsive, and easy to use.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">3</div>
          </div>
          <h3 className="text-xl font-bold mb-2">Implementation & Training</h3>
          <p className="mb-2">
            Worked closely with development teams to implement the design system across all Leadtech products.
            Provided training and support to ensure that designers and developers were able to use the design system effectively.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">4</div>
          </div>
          <h3 className="text-xl font-bold mb-2">Maintenance & Iteration</h3>
          <p>
            Continuously monitored the usage of the design system and gathered feedback from users.
            Made regular updates and improvements to ensure that the design system remained relevant and effective.
          </p>
        </div>
      </div>
    </>
  );
};

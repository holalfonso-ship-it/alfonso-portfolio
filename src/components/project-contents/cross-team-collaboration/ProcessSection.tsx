
import React from 'react';

const ProcessSection: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Process</h2>
      <div className="relative pl-8 border-l border-primary/30 space-y-8 mb-12">
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">1</div>
          </div>
          <h3 className="text-xl font-bold mb-2">Research & Assessment</h3>
          <p className="mb-2">
            Conducted interviews and surveys with team members to identify pain points in the existing collaboration process.
            Analyzed workflow inefficiencies and bottlenecks.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">2</div>
          </div>
          <h3 className="text-xl font-bold mb-2">Framework Design</h3>
          <p className="mb-2">
            Created a structured framework that addressed the identified challenges. Developed workflow templates,
            communication guidelines, and resource repositories.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">3</div>
          </div>
          <h3 className="text-xl font-bold mb-2">Implementation & Training</h3>
          <p className="mb-2">
            Rolled out the framework through workshops and training sessions. Created documentation and guidelines
            to support adoption.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">4</div>
          </div>
          <h3 className="text-xl font-bold mb-2">Measurement & Iteration</h3>
          <p>
            Established metrics to track the framework's effectiveness. Continuously gathered feedback and made
            adjustments to improve the process.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProcessSection;

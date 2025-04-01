
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
          <h3 className="text-xl font-bold mb-2">B2B Research & Discovery</h3>
          <p className="mb-2">
            Conducted stakeholder interviews with enterprise clients, analyzed platform analytics, and reviewed competitor 
            B2B offerings to identify enterprise pain points and opportunities for improvement.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">2</div>
          </div>
          <h3 className="text-xl font-bold mb-2">SaaS Ideation & Prototyping</h3>
          <p className="mb-2">
            Created wireframes and interactive prototypes to test key enterprise workflows and 
            validate assumptions before moving into high-fidelity design of the SaaS platform.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">3</div>
          </div>
          <h3 className="text-xl font-bold mb-2">Enterprise UX Design & Testing</h3>
          <p className="mb-2">
            Developed high-fidelity mockups and conducted usability testing with corporate clients to refine the design 
            and ensure it met both B2B user needs and business objectives.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">4</div>
          </div>
          <h3 className="text-xl font-bold mb-2">SaaS Implementation & Launch</h3>
          <p>
            Collaborated with the development team to ensure accurate implementation of the B2B platform design. 
            Conducted post-launch analysis to measure success against key enterprise performance indicators.
          </p>
        </div>
      </div>
    </>
  );
};

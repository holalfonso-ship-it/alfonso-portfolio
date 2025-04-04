
import React from 'react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">My Process</h2>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          I approached the OnlineCV landing page design with a systematic process focused on understanding user needs and optimizing for conversions:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div className="bg-muted/10 p-6 rounded-lg border border-muted/20">
            <h3 className="text-xl font-semibold mb-4">Research & Analysis</h3>
            <ul className="space-y-2">
              <li>Conducted competitive analysis of leading resume platforms</li>
              <li>Reviewed existing user feedback and behavior patterns</li>
              <li>Identified key user pain points and expectations</li>
              <li>Analyzed successful landing page conversion tactics</li>
            </ul>
          </div>
          
          <div className="bg-muted/10 p-6 rounded-lg border border-muted/20">
            <h3 className="text-xl font-semibold mb-4">Strategy & Planning</h3>
            <ul className="space-y-2">
              <li>Defined key messaging hierarchy and value propositions</li>
              <li>Mapped optimal user flows and conversion touchpoints</li>
              <li>Established visual identity guidelines and constraints</li>
              <li>Created content strategy aligned with user needs</li>
            </ul>
          </div>
          
          <div className="bg-muted/10 p-6 rounded-lg border border-muted/20">
            <h3 className="text-xl font-semibold mb-4">Design & Iteration</h3>
            <ul className="space-y-2">
              <li>Developed wireframes and information architecture</li>
              <li>Created visual design concepts and UI components</li>
              <li>Designed responsive layouts for all device sizes</li>
              <li>Refined design based on stakeholder feedback</li>
            </ul>
          </div>
          
          <div className="bg-muted/10 p-6 rounded-lg border border-muted/20">
            <h3 className="text-xl font-semibold mb-4">Testing & Validation</h3>
            <ul className="space-y-2">
              <li>Conducted usability testing with target audience</li>
              <li>Gathered feedback on design clarity and visual appeal</li>
              <li>Identified and resolved potential friction points</li>
              <li>Validated design effectiveness against goals</li>
            </ul>
          </div>
        </div>
        
        {/* Process Design Exploration - Added image */}
        <div className="mt-12 mb-6">
          <h3 className="text-xl font-semibold mb-4">Design Exploration & Concepts</h3>
          <div className="border border-muted/20 rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/d276fa41-1389-4da6-b492-bab97db74487.png" 
              alt="OnlineCV Design Concepts showing different color variations and layout designs" 
              className="w-full object-cover"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Different color schemes and layout variations explored during the design process
          </p>
        </div>
      </div>
    </section>
  );
};

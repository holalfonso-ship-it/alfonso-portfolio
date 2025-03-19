
import React from 'react';
import ProjectOverview from './mobile-app-design/ProjectOverview';
import ChallengeSection from './mobile-app-design/ChallengeSection';
import SolutionSection from './mobile-app-design/SolutionSection';
import ProcessSection from './mobile-app-design/ProcessSection';
import ResultsSection from './mobile-app-design/ResultsSection';
import LearningsSection from './mobile-app-design/LearningsSection';

export const MobileAppDesignContent: React.FC = () => {
  return (
    <div className="space-y-16">
      <ProjectOverview />
      
      <div className="mb-16">
        <div className="rounded-lg overflow-hidden border border-border/50 shadow-sm">
          <img 
            src="/lovable-uploads/d02ab1a8-a48e-410d-aa65-bb5d4df1b25b.png" 
            alt="Mobile App Design Showcase" 
            className="w-full h-auto"
          />
          <div className="p-4 bg-muted/30">
            <p className="text-sm text-muted-foreground">
              The mobile app design showcases a user-friendly interface optimized for both iOS and Android platforms,
              ensuring a consistent experience while respecting platform-specific design guidelines.
            </p>
          </div>
        </div>
      </div>
      
      <ChallengeSection />
      <SolutionSection />
      <ProcessSection />
      <ResultsSection />
      <LearningsSection />
    </div>
  );
};

export default MobileAppDesignContent;

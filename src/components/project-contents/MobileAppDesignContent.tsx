import React from 'react';
import ProjectOverview from './mobile-app-design/ProjectOverview';
import ChallengeSection from './mobile-app-design/ChallengeSection';
import SolutionSection from './mobile-app-design/SolutionSection';
import ProcessSection from './mobile-app-design/ProcessSection';
import ResultsSection from './mobile-app-design/ResultsSection';
import LearningsSection from './mobile-app-design/LearningsSection';
export const MobileAppDesignContent: React.FC = () => {
  return <div className="space-y-16">
      <ProjectOverview />
      
      <div className="mb-16">
        <div className="rounded-lg overflow-hidden border border-border/50 shadow-sm">
          <img alt="Mobile App Design Showcase" className="w-full h-auto" src="/lovable-uploads/5d3e945c-e1a2-425a-925e-7f2349820971.png" />
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
    </div>;
};
export default MobileAppDesignContent;
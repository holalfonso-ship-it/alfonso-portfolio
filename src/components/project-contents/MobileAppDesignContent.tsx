
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
          <img alt="AI Cleaner Mobile App Design" className="w-full h-auto" src="/lovable-uploads/5cb0453f-dc0d-4b19-852f-8c3131354284.png" />
          <div className="p-4 bg-muted/30">
            <p className="text-sm text-muted-foreground">
              The AI Cleaner app design showcases a modern interface for optimizing phone storage and enhancing performance,
              with features for smart cleaning and detailed analysis of media files.
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

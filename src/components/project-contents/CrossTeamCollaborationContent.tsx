
import React from 'react';
import ProjectOverview from './cross-team-collaboration/ProjectOverview';
import ChallengeSection from './cross-team-collaboration/ChallengeSection';
import SolutionSection from './cross-team-collaboration/SolutionSection';
import ProcessSection from './cross-team-collaboration/ProcessSection';
import ResultsSection from './cross-team-collaboration/ResultsSection';
import LearningsSection from './cross-team-collaboration/LearningsSection';

export const CrossTeamCollaborationContent: React.FC = () => {
  return (
    <div className="space-y-16">
      <ProjectOverview />
      
      <div className="mb-16">
        <div className="rounded-lg overflow-hidden border border-border/50 shadow-sm">
          <img 
            src="/lovable-uploads/a8a3c542-efbf-46c2-a78b-bcd8a2ddcb83.png" 
            alt="Cross-team Collaboration Radar Chart" 
            className="w-full h-auto"
          />
          <div className="p-4 bg-muted/30">
            <p className="text-sm text-muted-foreground">
              The Collaboration Framework Radar Chart visualizes the key competencies needed for effective cross-team collaboration.
              Each axis represents a critical skill area, with the colored overlays showing different team profiles.
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

export default CrossTeamCollaborationContent;

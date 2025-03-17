
import React from 'react';
import { ProjectOverview } from './loyalty-app/ProjectOverview';
import { SolutionSection } from './loyalty-app/SolutionSection';
import { ProcessSection } from './loyalty-app/ProcessSection';
import { ResultsSection } from './loyalty-app/ResultsSection';
import { LearningsSection } from './loyalty-app/LearningsSection';

export const LoyaltyAppContent: React.FC = () => {
  return (
    <div className="space-y-16">
      <ProjectOverview />
      <SolutionSection />
      <ProcessSection />
      <ResultsSection />
      <LearningsSection />
    </div>
  );
};

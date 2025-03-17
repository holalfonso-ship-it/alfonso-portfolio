
import React from 'react';
import { ProjectOverview } from './leadtech-design-system/ProjectOverview';
import { ChallengeSection } from './leadtech-design-system/ChallengeSection';
import { SolutionSection } from './leadtech-design-system/SolutionSection';
import { ProcessSection } from './leadtech-design-system/ProcessSection';
import { ComponentExamplesSection } from './leadtech-design-system/ComponentExamplesSection';
import { ResultsSection } from './leadtech-design-system/ResultsSection';
import { LearningsSection } from './leadtech-design-system/LearningsSection';

export const LeadtechGroupContent: React.FC = () => {
  return (
    <>
      <ProjectOverview />
      <ChallengeSection />
      <SolutionSection />
      <ProcessSection />
      <ComponentExamplesSection />
      <ResultsSection />
      <LearningsSection />
    </>
  );
};

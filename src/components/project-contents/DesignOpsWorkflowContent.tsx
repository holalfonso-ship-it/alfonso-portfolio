
import React from 'react';
import ProjectOverview from './designops-workflow/ProjectOverview';
import ChallengeSection from './designops-workflow/ChallengeSection';
import SolutionSection from './designops-workflow/SolutionSection';
import ProcessSection from './designops-workflow/ProcessSection';
import ResultsSection from './designops-workflow/ResultsSection';
import LearningsSection from './designops-workflow/LearningsSection';

export const DesignOpsWorkflowContent: React.FC = () => {
  return (
    <div className="space-y-12">
      <ProjectOverview />
      <ChallengeSection />
      <SolutionSection />
      <ProcessSection />
      <ResultsSection />
      <LearningsSection />
    </div>
  );
};

export default DesignOpsWorkflowContent;

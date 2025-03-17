
import React from 'react';
import ProjectOverview from './cross-team-collaboration/ProjectOverview';
import ChallengeSection from './cross-team-collaboration/ChallengeSection';
import SolutionSection from './cross-team-collaboration/SolutionSection';
import ProcessSection from './cross-team-collaboration/ProcessSection';
import ResultsSection from './cross-team-collaboration/ResultsSection';
import LearningsSection from './cross-team-collaboration/LearningsSection';

export const CrossTeamCollaborationContent: React.FC = () => {
  return (
    <>
      <ProjectOverview />
      <ChallengeSection />
      <SolutionSection />
      <ProcessSection />
      <ResultsSection />
      <LearningsSection />
    </>
  );
};

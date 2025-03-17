
import React from 'react';
import ProjectOverview from './data-visualization/ProjectOverview';
import ChallengeSection from './data-visualization/ChallengeSection';
import SolutionSection from './data-visualization/SolutionSection';
import ProcessSection from './data-visualization/ProcessSection';
import ResultsSection from './data-visualization/ResultsSection';
import LearningsSection from './data-visualization/LearningsSection';

export const DataVisualizationContent: React.FC = () => {
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

export default DataVisualizationContent;

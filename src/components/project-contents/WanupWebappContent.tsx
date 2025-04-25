
import React from 'react';
import { ProjectOverview } from './wanup-webapp/ProjectOverview';
import { ChallengeSection } from './wanup-webapp/ChallengeSection';
import { ProcessSection } from './wanup-webapp/ProcessSection';
import { SolutionSection } from './wanup-webapp/SolutionSection';
import { ResultsSection } from './wanup-webapp/ResultsSection';
import { LearningsSection } from './wanup-webapp/LearningsSection';
import { Separator } from '../ui/separator';

const WanupWebappContent: React.FC = () => {
  return (
    <div className="space-y-16">
      <ProjectOverview />
      <Separator className="bg-muted/50" />
      
      <ChallengeSection />
      <Separator className="bg-muted/50" />
      
      <ProcessSection />
      <Separator className="bg-muted/50" />
      
      <SolutionSection />
      <Separator className="bg-muted/50" />
      
      <ResultsSection />
      <Separator className="bg-muted/50" />
      
      <LearningsSection />
    </div>
  );
};

export default WanupWebappContent;

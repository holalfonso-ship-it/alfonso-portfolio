
import React from 'react';
import { Separator } from '../ui/separator';
import { ProjectOverview } from './resume-coach/ProjectOverview';
import { ChallengeSection } from './resume-coach/ChallengeSection';
import { ProcessSection } from './resume-coach/ProcessSection';
import { SolutionSection } from './resume-coach/SolutionSection';
import { ResultsSection } from './resume-coach/ResultsSection';
import { LearningsSection } from './resume-coach/LearningsSection';

export const ResumeCoachContent: React.FC = () => {
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

export default ResumeCoachContent;

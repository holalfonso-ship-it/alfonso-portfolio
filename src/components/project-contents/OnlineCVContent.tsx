
import React from 'react';
import { Separator } from '../ui/separator';
import { OnlineCVOverview } from './onlinecv/ProjectOverview';
import { ChallengeSection } from './onlinecv/ChallengeSection';
import { ProcessSection } from './onlinecv/ProcessSection';
import { SolutionSection } from './onlinecv/SolutionSection';
import { ResultsSection } from './onlinecv/ResultsSection';
import { LearningsSection } from './onlinecv/LearningsSection';

export const OnlineCVContent: React.FC = () => {
  return (
    <div className="space-y-16">
      <OnlineCVOverview />
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

export default OnlineCVContent;

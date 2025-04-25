
import React from 'react';
import { Separator } from '../../../components/ui/separator';
import { OnlineCVOverview } from './ProjectOverview';
import { ChallengeSection } from './ChallengeSection';
import { ProcessSection } from './ProcessSection';
import { SolutionSection } from './SolutionSection';
import { ResultsSection } from './ResultsSection';
import { LearningsSection } from './LearningsSection';

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

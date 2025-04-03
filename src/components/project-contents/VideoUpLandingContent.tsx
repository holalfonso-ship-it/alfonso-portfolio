
import React from 'react';
import ProjectOverview from './videoup-landing/ProjectOverview';
import ChallengeSection from './videoup-landing/ChallengeSection';
import SolutionSection from './videoup-landing/SolutionSection';
import ProcessSection from './videoup-landing/ProcessSection';
import ResultsSection from './videoup-landing/ResultsSection';
import LearningsSection from './videoup-landing/LearningsSection';

export const VideoUpLandingContent: React.FC = () => {
  return (
    <div className="space-y-16">
      <ProjectOverview />
      
      <div className="mb-16">
        <div className="rounded-lg overflow-hidden border border-border/50 shadow-sm">
          <img 
            src="/lovable-uploads/5d3e945c-e1a2-425a-925e-7f2349820971.png" 
            alt="VideoUp Landing Page Design" 
            className="w-full h-auto"
          />
          <div className="p-4 bg-muted/30">
            <p className="text-sm text-muted-foreground">
              The VideoUp landing page showcases a modern UI design with vibrant gradients, bold typography,
              and clear visual hierarchy that highlights the app's AI-powered video editing capabilities.
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

export default VideoUpLandingContent;

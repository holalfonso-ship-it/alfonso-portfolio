
import React from 'react';
import { AspectRatio } from '../../ui/aspect-ratio';

const ChallengeSection: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Challenge</h2>
      <p className="mb-4">
        Leadtech Group faced significant challenges in coordinating work across design, development, and product teams:
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Communication silos between different teams</li>
        <li>Inconsistent handoff processes causing delays</li>
        <li>Lack of standardized workflows across projects</li>
        <li>Limited visibility into project progress for stakeholders</li>
        <li>Frequent revisions due to misaligned expectations</li>
      </ul>

      <div className="mb-12">
        <AspectRatio ratio={16/9} className="bg-muted rounded-lg overflow-hidden">
          <img 
            src="https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef0b2c3c8362baef07ebb_designops.jpg" 
            alt="Team collaboration session" 
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        <p className="text-sm text-muted-foreground mt-2 text-center">
          Cross-functional team workshop to identify collaboration pain points
        </p>
      </div>
    </>
  );
};

export default ChallengeSection;

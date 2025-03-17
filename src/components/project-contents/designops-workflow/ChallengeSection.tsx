
import React from 'react';

const ChallengeSection: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Challenge</h2>
      <p className="mb-4">
        The organization faced several challenges that impacted design efficiency and product development:
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Lengthy design-to-development handoff processes, with significant back-and-forth</li>
        <li>Inconsistent design practices across different product teams</li>
        <li>Limited visibility into design progress for stakeholders</li>
        <li>Difficulty scaling design operations as the company grew</li>
        <li>Challenges in maintaining design quality while increasing velocity</li>
      </ul>
      <p>
        Our goal was to reduce handoff time by at least 30% and create a more collaborative environment between 
        design and development teams while maintaining our high standards for quality.
      </p>
    </>
  );
};

export default ChallengeSection;

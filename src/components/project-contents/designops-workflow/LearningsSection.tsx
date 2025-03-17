
import React from 'react';

const LearningsSection: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Learnings & Next Steps</h2>
      <p className="mb-4">
        This project provided valuable insights into optimizing design operations:
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>The importance of balancing standardization with creative flexibility</li>
        <li>How tooling choices significantly impact workflow efficiency</li>
        <li>The value of incremental implementation over dramatic overhauls</li>
        <li>The need for continuous refinement based on team feedback</li>
      </ul>
      <p className="mb-4">
        Moving forward, we plan to:
      </p>
      <ol className="list-decimal pl-6 mb-4 space-y-2">
        <li>Further automate repetitive design tasks through scripts and plugins</li>
        <li>Expand our design system to include more advanced component patterns</li>
        <li>Develop specialized training programs for new team members</li>
        <li>Implement more granular metrics to identify additional optimization opportunities</li>
      </ol>
      <p>
        The DesignOps framework continues to evolve as we gather more data and feedback, ensuring 
        our design operations remain efficient and effective as the organization grows.
      </p>
    </>
  );
};

export default LearningsSection;

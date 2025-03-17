
import React from 'react';

export const LearningsSection: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Learnings & Next Steps</h2>
      <p className="mb-4">
        The development and implementation of the Leadtech Design System provided valuable insights into creating and 
        maintaining a successful design system:
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Strong leadership support is essential for driving adoption</li>
        <li>Continuous communication and collaboration are key to success</li>
        <li>Regular audits and updates are necessary to maintain relevance</li>
        <li>A well-defined governance model ensures consistency and quality</li>
      </ul>
      <p>
        Moving forward, we plan to expand the design system to include more advanced components and design patterns. 
        We're also developing a comprehensive training program to help new team members quickly adapt to our design system.
      </p>
    </>
  );
};

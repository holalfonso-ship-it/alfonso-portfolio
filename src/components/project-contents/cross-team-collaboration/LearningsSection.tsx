
import React from 'react';

const LearningsSection: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Learnings & Next Steps</h2>
      <p className="mb-4">
        The implementation of this framework provided valuable insights into effective cross-team collaboration:
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Clear communication protocols are essential for successful collaboration</li>
        <li>Regular feedback loops help maintain alignment and prevent drift</li>
        <li>Balancing structure with flexibility is key to maintaining agility</li>
        <li>Training and continuous support are critical for successful adoption</li>
      </ul>
      <p>
        Moving forward, we plan to expand this framework to additional teams and refine our metrics tracking to 
        capture more granular data on collaboration effectiveness. We're also developing advanced training modules 
        to help new team members quickly adapt to our collaborative workflow.
      </p>
    </>
  );
};

export default LearningsSection;

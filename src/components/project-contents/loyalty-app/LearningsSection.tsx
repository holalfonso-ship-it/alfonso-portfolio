
import React from 'react';

export const LearningsSection: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Learnings & Next Steps</h2>
      <p className="mb-4">
        This project provided valuable insights into creating effective loyalty experiences:
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Simplified user journeys significantly impact conversion rates</li>
        <li>Personalization features drive higher engagement and retention</li>
        <li>Clear visualization of rewards increases perceived value of the loyalty program</li>
        <li>Consistent experience across platforms strengthens brand identity</li>
      </ul>
      <p>
        Moving forward, we planned to enhance the app with additional features such as 
        social sharing capabilities, augmented reality experiences for hotel previews, and 
        deeper integration with partner services to create a more comprehensive travel ecosystem.
      </p>
    </>
  );
};

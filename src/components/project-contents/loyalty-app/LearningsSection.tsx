
import React from 'react';

export const LearningsSection: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Learnings & Next Steps</h2>
      <p className="mb-4">
        This project provided valuable insights into creating effective B2B SaaS loyalty experiences:
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Simplified administrative journeys significantly impact B2B conversion rates</li>
        <li>Enterprise-level customization features drive higher client engagement and retention</li>
        <li>Clear visualization of rewards increases perceived value of the corporate loyalty program</li>
        <li>Consistent experience across platform strengthens B2B brand identity</li>
      </ul>
      <p>
        Moving forward, we planned to enhance the SaaS platform with additional features such as 
        advanced analytics dashboards, multi-tier administration capabilities, and 
        deeper integration with enterprise client systems to create a more comprehensive B2B loyalty ecosystem.
      </p>
    </>
  );
};

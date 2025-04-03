
import React from 'react';

export const ChallengeSection: React.FC = () => {
  return (
    <section id="challenge">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">The Challenge</h2>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          ResumeCoach faced several challenges in the competitive resume-building market:
        </p>
        
        <ul className="space-y-4 mt-4">
          <li>
            <strong>High Competition:</strong> The resume-building market is saturated with numerous competitors offering similar services.
          </li>
          <li>
            <strong>User Skepticism:</strong> Users often doubt the effectiveness of automated resume tools in helping them land interviews.
          </li>
          <li>
            <strong>Conversion Optimization:</strong> Balancing persuasive marketing content with an intuitive user experience to maximize conversion rates.
          </li>
          <li>
            <strong>Accessibility Needs:</strong> Ensuring the landing page was accessible to all users, including those with disabilities.
          </li>
          <li>
            <strong>Cross-Device Consistency:</strong> Maintaining a consistent, high-quality experience across desktop, tablet, and mobile devices.
          </li>
        </ul>
      </div>
    </section>
  );
};

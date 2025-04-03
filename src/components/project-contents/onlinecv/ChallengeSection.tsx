
import React from 'react';

export const ChallengeSection: React.FC = () => {
  return (
    <section id="challenge">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">The Challenge</h2>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          OnlineCV faced several challenges in the competitive resume-building market:
        </p>
        
        <ul className="space-y-4 mt-4">
          <li>
            <strong>Market Differentiation:</strong> The resume-building market is highly competitive, requiring a distinct value proposition and visual identity.
          </li>
          <li>
            <strong>Balancing Professional and Approachable:</strong> Creating a design that conveyed professionalism while remaining approachable and user-friendly.
          </li>
          <li>
            <strong>Conversion Optimization:</strong> Crafting a user journey that effectively showcases features while guiding users toward the signup/conversion point.
          </li>
          <li>
            <strong>Multi-device Experience:</strong> Ensuring a seamless and engaging experience across desktop, tablet, and mobile devices.
          </li>
          <li>
            <strong>Visual Demonstration:</strong> Effectively showcasing the platform's templates and AI capabilities without overwhelming the user.
          </li>
        </ul>
      </div>
    </section>
  );
};

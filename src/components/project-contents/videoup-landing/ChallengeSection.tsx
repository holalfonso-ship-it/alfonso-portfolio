
import React from 'react';

const ChallengeSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
      
      <p className="mb-6">
        VideoUp needed a landing page that would effectively communicate the sophisticated AI capabilities of their 
        video editing app while maintaining a user-friendly appeal. The main challenge was balancing technical 
        information with engaging visuals to drive conversions in a competitive market.
      </p>
      
      <div className="bg-muted/20 p-6 rounded-lg border border-border/50 mb-6">
        <h3 className="text-xl font-semibold mb-3">Key Challenges</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Creating a design that effectively communicates complex AI technology in an accessible, 
            non-intimidating way to both professional and casual users
          </li>
          <li>
            Developing a visual language that would differentiate VideoUp from competitors while still 
            appearing trustworthy and professional
          </li>
          <li>
            Designing for multiple user personas with varying technical knowledge and video editing needs
          </li>
          <li>
            Optimizing the conversion funnel to maximize sign-ups and trial activations
          </li>
          <li>
            Ensuring the landing page was fully responsive with a mobile-first approach while maintaining 
            visual impact across all devices
          </li>
        </ul>
      </div>
      
      <p>
        The landing page needed to showcase VideoUp's innovative features while making the technology accessible 
        to a broad audience. It required a careful balance of technical information and user benefits, wrapped in 
        an interface that felt both cutting-edge and approachable.
      </p>
    </div>
  );
};

export default ChallengeSection;

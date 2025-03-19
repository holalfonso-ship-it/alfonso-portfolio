
import React from 'react';

const ChallengeSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
      
      <p className="mb-6">
        The primary challenge was to create a mobile shopping experience that felt native to both iOS and Android 
        platforms while maintaining a consistent brand identity. This required balancing platform-specific design 
        patterns with a cohesive cross-platform user experience.
      </p>
      
      <div className="bg-muted/20 p-6 rounded-lg border border-border/50 mb-6">
        <h3 className="text-xl font-semibold mb-3">Key Challenges</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Creating a design system that could adapt to both Material Design (Android) and Human Interface 
            Guidelines (iOS) while maintaining brand consistency
          </li>
          <li>
            Optimizing the experience for different screen sizes and resolutions across the fragmented 
            Android device ecosystem
          </li>
          <li>
            Designing features that leveraged platform-specific capabilities (3D Touch on iOS, widgets on Android) 
            without creating disparity in core functionality
          </li>
          <li>
            Ensuring the shopping flow remained intuitive and efficient regardless of platform navigation patterns
          </li>
          <li>
            Creating a design handoff process that served both iOS and Android development teams effectively
          </li>
        </ul>
      </div>
      
      <p>
        This project required deep knowledge of both platforms' design guidelines, technical capabilities, and user 
        expectations to create an experience that would feel native to each platform while delivering a cohesive 
        brand experience.
      </p>
    </div>
  );
};

export default ChallengeSection;

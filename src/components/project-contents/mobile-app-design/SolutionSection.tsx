
import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">The Solution</h2>
      
      <p className="mb-6">
        I developed a comprehensive cross-platform design strategy that balanced platform-specific patterns 
        with a consistent brand experience, resulting in apps that felt native to each platform while maintaining 
        a unified brand identity.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-3">Platform-Adaptive Design System</h3>
          <p>
            Created a flexible design system with shared brand elements (colors, typography, spacing) but 
            platform-specific components that respected each OS's interaction patterns and visual style. This 
            enabled us to maintain brand consistency while providing an authentic native feel on each platform.
          </p>
        </div>
        
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-3">Unified Experience Architecture</h3>
          <p>
            Designed a consistent information architecture and user flow across both platforms, ensuring that 
            regardless of which platform users chose, the core experience and navigation logic remained familiar 
            and intuitive, reducing learning curve for cross-platform users.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-3">Platform-Specific Feature Enhancements</h3>
          <p>
            Implemented platform-specific features that leveraged unique capabilities: widgets and notification 
            actions for Android, 3D Touch quick actions and Apple Pay for iOS, enhancing the experience for users 
            of each platform without compromising core functionality.
          </p>
        </div>
        
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-3">Optimized Development Handoff</h3>
          <p>
            Created a streamlined handoff process with platform-specific component libraries and documentation 
            that helped development teams implement designs accurately while respecting platform conventions, 
            reducing implementation questions by 40%.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;

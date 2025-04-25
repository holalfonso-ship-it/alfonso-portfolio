
import React from 'react';

export const ChallengeSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
      
      <p className="mb-6">
        Wanup faced several complex challenges in creating a B2B SaaS platform for hotel loyalty programs:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-3">Technical Complexity</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Integration with multiple hotel booking systems</li>
            <li>Real-time availability and pricing updates</li>
            <li>Complex loyalty point calculation systems</li>
            <li>Multi-currency and multi-language support</li>
          </ul>
        </div>
        
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-3">User Experience</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Balancing features for both B2B and B2C users</li>
            <li>Simplifying complex booking workflows</li>
            <li>Creating intuitive loyalty program management</li>
            <li>Ensuring mobile responsiveness</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

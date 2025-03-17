
import React from 'react';

const ChallengeSection: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
      
      <div className="p-6 rounded-lg bg-red-500/10 border border-red-500/20 mb-8">
        <p className="text-lg">
          The company had access to vast amounts of data, but stakeholders were struggling to extract 
          actionable insights due to complex, fragmented, and often overwhelming data presentations. 
          Legacy reporting tools were difficult to use and lacked visual clarity, resulting in low 
          adoption rates and decision-making based on incomplete information.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Key Challenges</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Data was scattered across multiple platforms with inconsistent formatting</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Stakeholders spent excessive time trying to interpret complex data</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Existing dashboards had poor information hierarchy and visual overwhelm</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Low adoption rate of data tools due to poor user experience</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Project Goals</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Create intuitive dashboards that reveal insights at a glance</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Design a unified data experience across departments</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Increase stakeholder engagement with data by 20%</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Reduce time spent interpreting data by at least 30%</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ChallengeSection;


import React from 'react';

export const LearningsSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Key Learnings</h2>
      
      <div className="space-y-8">
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-4">Project Insights</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <span className="font-medium">Balance is crucial</span> - Meeting both B2B and B2C needs requires careful 
              consideration of different user perspectives
            </li>
            <li>
              <span className="font-medium">Iterative development works</span> - Regular feedback and incremental 
              improvements led to better outcomes
            </li>
            <li>
              <span className="font-medium">Technical limitations matter</span> - Understanding system constraints early 
              helps in designing more realistic solutions
            </li>
          </ul>
        </div>
        
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-4">Future Considerations</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>Expand integration capabilities with more booking systems</li>
            <li>Implement advanced analytics for better insights</li>
            <li>Develop more automated features for routine tasks</li>
            <li>Enhanced mobile app experience</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

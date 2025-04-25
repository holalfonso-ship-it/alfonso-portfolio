
import React from 'react';

export const ResultsSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-4">Business Impact</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <span className="font-medium">30% increase in hotel partner adoption</span> within the first six months
            </li>
            <li>
              <span className="font-medium">45% improvement in booking completion rates</span> after UX optimizations
            </li>
            <li>
              <span className="font-medium">25% reduction in customer support tickets</span> related to platform usage
            </li>
          </ul>
        </div>
        
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-4">User Satisfaction</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <span className="font-medium">92% satisfaction rate</span> among hotel partners
            </li>
            <li>
              <span className="font-medium">85% increase in loyalty program engagement</span> from end users
            </li>
            <li>
              <span className="font-medium">4.5/5 average rating</span> from user feedback surveys
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

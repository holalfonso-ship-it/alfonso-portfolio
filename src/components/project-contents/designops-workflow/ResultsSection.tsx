
import React from 'react';

const ResultsSection: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Results</h2>
      <p className="mb-6">
        The implementation of our DesignOps framework led to significant improvements across several key metrics:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-primary/10 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-primary mb-2">40%</h3>
          <p>Reduction in design-to-development handoff time</p>
        </div>
        
        <div className="bg-primary/10 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-primary mb-2">35%</h3>
          <p>Increase in design team productivity</p>
        </div>
        
        <div className="bg-primary/10 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-primary mb-2">60%</h3>
          <p>Reduction in design inconsistencies across products</p>
        </div>
        
        <div className="bg-primary/10 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-primary mb-2">30%</h3>
          <p>Decrease in design-related development revisions</p>
        </div>
      </div>
      
      <p>
        Beyond the quantitative results, we observed improved collaboration between design and development teams, 
        increased stakeholder visibility into the design process, and higher overall team satisfaction. The framework 
        also enabled us to scale our design operations more effectively as the company grew.
      </p>
    </>
  );
};

export default ResultsSection;

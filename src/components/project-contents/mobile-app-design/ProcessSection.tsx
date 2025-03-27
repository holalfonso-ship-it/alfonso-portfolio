
import React from 'react';
import ProcessStepsList from './process/ProcessStepsList';

const ProcessSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Design Process</h2>
      <ProcessStepsList />
    </div>
  );
};

export default ProcessSection;

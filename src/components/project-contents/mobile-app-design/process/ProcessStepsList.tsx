
import React from 'react';
import ProcessStep from './ProcessStep';
import { processStepsData } from './processStepsData';

const ProcessStepsList: React.FC = () => {
  return (
    <div className="space-y-12">
      {processStepsData.map((step) => (
        <ProcessStep
          key={step.id}
          title={step.title}
          points={step.points}
          imageSrc={step.imageSrc}
          imageAlt={step.imageAlt}
          imageCaption={step.imageCaption}
        />
      ))}
    </div>
  );
};

export default ProcessStepsList;

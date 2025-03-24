
import React from 'react';
import { educationData } from './AboutData';

export const EducationDisplay: React.FC = () => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div key={index} className="border-l-2 border-primary pl-6 relative">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-2"></div>
            <h3 className="text-xl font-bold">{edu.course}</h3>
            <p className="font-medium">{edu.institution}</p>
            <p className="text-muted-foreground">{edu.period}, {edu.location}</p>
            {edu.subjects && <p className="mt-1">{edu.subjects}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationDisplay;

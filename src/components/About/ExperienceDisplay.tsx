
import React from 'react';
import { experienceData } from './AboutData';

export const ExperienceDisplay: React.FC = () => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      
      <div className="space-y-8">
        {experienceData.map((job, index) => (
          <div key={index} className="border-l-2 border-primary pl-6 relative">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-2"></div>
            <h3 className="text-xl font-bold">{job.company}</h3>
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <p className="font-medium text-primary">{job.position}</p>
              <p className="text-muted-foreground">{job.period}, {job.location}{job.duration ? ` - ${job.duration}` : ''}</p>
            </div>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              {job.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceDisplay;

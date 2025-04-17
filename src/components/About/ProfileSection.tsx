
import React from 'react';
import { professionalProfile } from './AboutData';

export const ProfileSection: React.FC = () => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Professional Profile</h2>
      <p className="mb-6 whitespace-pre-line">{professionalProfile.summary}</p>
      
      <h3 className="text-xl font-semibold mb-4">Key skills:</h3>
      <ul className="list-disc pl-6 space-y-2">
        {professionalProfile.keySkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileSection;

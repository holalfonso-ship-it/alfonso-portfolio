
import React from 'react';
import { ProfileSection } from '../about/ProfileSection';
import { ExperienceSection } from '../about/ExperienceSection';
import { EducationSection } from '../about/EducationSection';
import { LanguagesSection } from '../about/LanguagesSection';
import { AwardsSection } from '../about/AwardsSection';

export const AboutContent: React.FC = () => {
  return (
    <div className="space-y-16">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      
      <ProfileSection />
      
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <ExperienceSection />
      
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <EducationSection />
      
      <h2 className="text-3xl font-bold mb-6">Languages</h2>
      <LanguagesSection />
      
      <h2 className="text-3xl font-bold mb-6">Awards</h2>
      <AwardsSection />
    </div>
  );
};

export default AboutContent;

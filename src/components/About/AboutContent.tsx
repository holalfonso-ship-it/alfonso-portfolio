
import React from 'react';
import ProfileSection from '../About/ProfileSection';
import ExperienceDisplay from './ExperienceDisplay';
import EducationDisplay from './EducationDisplay';
import TechnicalSkillsDisplay from './TechnicalSkillsDisplay';
import LanguagesAndAwards from './LanguagesAndAwards';

export const AboutContent: React.FC = () => {
  return (
    <div className="space-y-16">
      <ProfileSection />
      <ExperienceDisplay />
      <EducationDisplay />
      <TechnicalSkillsDisplay />
      <LanguagesAndAwards />
    </div>
  );
};

export default AboutContent;


import React from 'react';
import { Separator } from '../ui/separator';
import { ProfileSection } from '../About/ProfileSection';
import { ExperienceDisplay } from '../About/ExperienceDisplay';
import { EducationDisplay } from '../About/EducationDisplay';
import { TechnicalSkillsDisplay } from '../About/TechnicalSkillsDisplay';
import { LanguagesAndAwards } from '../About/LanguagesAndAwards';

export const AboutContent: React.FC = () => {
  return (
    <div className="space-y-16">
      <ProfileSection />
      <Separator className="bg-muted/50" />
      
      <ExperienceDisplay />
      <Separator className="bg-muted/50" />
      
      <EducationDisplay />
      <Separator className="bg-muted/50" />
      
      <TechnicalSkillsDisplay />
      <Separator className="bg-muted/50" />
      
      <LanguagesAndAwards />
    </div>
  );
};

export default AboutContent;

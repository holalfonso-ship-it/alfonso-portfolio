
import React from 'react';
import { cn } from "@/lib/utils";
import ProfileSection from './About/ProfileSection';
import ExperienceDisplay from './About/ExperienceDisplay';
import EducationDisplay from './About/EducationDisplay';
import TechnicalSkillsDisplay from './About/TechnicalSkillsDisplay';
import LanguagesAndAwards from './About/LanguagesAndAwards';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-16 text-center">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Profile Image and Introduction */}
          <div className="lg:col-span-1">
            <ProfileSection />
          </div>
          
          {/* Professional Experience and Education */}
          <div className="lg:col-span-2 space-y-12">
            <ExperienceDisplay />
            <EducationDisplay />
            <TechnicalSkillsDisplay />
            <LanguagesAndAwards />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import React from 'react';
import { ProfileSection } from './about/ProfileSection';
import { ExperienceSection } from './about/ExperienceSection';
import { EducationSection } from './about/EducationSection';
import { LanguagesSection } from './about/LanguagesSection';
import { AwardsSection } from './about/AwardsSection';
import AnimatedText from './AnimatedText';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20">
          <span className="inline-block text-sm md:text-base font-medium tracking-wider mb-4 py-1 px-4 rounded-full bg-primary/20 text-primary">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">
            <AnimatedText text="Professional Profile" className="inline-block" once />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-16">
          <div className="lg:col-span-8 space-y-16">
            <ProfileSection />
            <ExperienceSection />
          </div>
          
          <div className="lg:col-span-4 space-y-16">
            <EducationSection />
            <LanguagesSection />
            <AwardsSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

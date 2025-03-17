
import React from 'react';
import AnimatedText from './AnimatedText';
import ProfileSection from './about/ProfileSection';
import ExperienceSection from './about/ExperienceSection';
import EducationSection from './about/EducationSection';
import LanguagesSection from './about/LanguagesSection';
import AwardsSection from './about/AwardsSection';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <span className="inline-block text-sm md:text-base font-medium tracking-wider mb-4 py-1 px-4 rounded-full bg-primary/20 text-primary">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            <AnimatedText text="Professional Background" className="inline-block" once />
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Profile Column */}
          <div className="lg:col-span-1">
            <ProfileSection />
          </div>
          
          {/* Experience Column */}
          <div className="lg:col-span-2 space-y-8">
            <ExperienceSection />
            
            {/* Education and Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <EducationSection />
              
              <div className="space-y-8">
                <LanguagesSection />
                <AwardsSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

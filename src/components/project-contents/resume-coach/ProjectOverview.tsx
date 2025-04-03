
import React from 'react';

export const ProjectOverview: React.FC = () => {
  return (
    <section id="overview">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Project Overview</h2>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          ResumeCoach is a platform designed to help job seekers create professional resumes quickly and efficiently. 
          I was tasked with designing a landing page that would effectively communicate the platform's value proposition 
          and drive conversions, while providing an intuitive and engaging user experience.
        </p>
        
        <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-primary/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">User-Centric Design</h3>
            <p className="text-sm">A structured layout with clear CTAs, persuasive copy sections, and an intuitive flow to guide users seamlessly through the conversion funnel.</p>
          </div>
          
          <div className="bg-primary/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Visual UI & Branding</h3>
            <p className="text-sm">A professional yet modern aesthetic, using soft gradients, clean typography, and strategic use of white space for optimal readability and brand alignment.</p>
          </div>
          
          <div className="bg-primary/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Mobile-First & Accessibility</h3>
            <p className="text-sm">Optimized for mobile devices with smooth animations and accessible design elements for an inclusive user experience across all devices.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

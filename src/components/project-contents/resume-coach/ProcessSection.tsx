
import React from 'react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">The Process</h2>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          My design process followed a user-centered approach, with several key phases:
        </p>
        
        <div className="mt-8 space-y-12">
          <div className="relative pl-8 border-l-2 border-primary/30">
            <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary"></div>
            <h3 className="text-xl font-semibold mb-3">Research & Discovery</h3>
            <p>
              I began with comprehensive competitor analysis to identify market gaps and opportunities for differentiation. 
              This included user interviews with job seekers to understand their pain points and expectations from resume-building tools. 
              I also analyzed user behavior data to identify key conversion points and drop-off areas.
            </p>
          </div>
          
          <div className="relative pl-8 border-l-2 border-primary/30">
            <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary"></div>
            <h3 className="text-xl font-semibold mb-3">Information Architecture</h3>
            <p>
              Based on research insights, I created a content hierarchy that prioritized key value propositions and CTAs. 
              I developed user flows to ensure a logical progression from initial interest to conversion, with clear paths for different user segments.
            </p>
          </div>
          
          <div className="relative pl-8 border-l-2 border-primary/30">
            <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary"></div>
            <h3 className="text-xl font-semibold mb-3">Wireframing & Prototyping</h3>
            <p>
              I created low-fidelity wireframes to establish layout and content structure, followed by interactive prototypes to test user flows and interactions. 
              These prototypes were refined through multiple iterations based on stakeholder feedback and initial user testing.
            </p>
          </div>
          
          <div className="relative pl-8 border-l-2 border-primary/30">
            <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary"></div>
            <h3 className="text-xl font-semibold mb-3">Visual Design</h3>
            <p>
              I developed a clean, professional visual identity that aligned with the ResumeCoach brand while conveying trust and expertise. 
              The design featured a balanced color palette, accessible typography, and strategic use of white space to enhance readability and focus.
            </p>
          </div>
          
          <div className="relative pl-8">
            <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary"></div>
            <h3 className="text-xl font-semibold mb-3">Testing & Optimization</h3>
            <p>
              I conducted usability testing with target users to identify friction points and opportunities for improvement. 
              Following implementation, I analyzed performance metrics and made iterative improvements based on user behavior data and A/B testing results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

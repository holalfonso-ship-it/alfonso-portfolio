
import React from 'react';

export const OnlineCVOverview: React.FC = () => {
  return (
    <section id="overview">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Project Overview</h2>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          OnlineCV is a platform that simplifies resume creation with professional templates and AI-powered suggestions. 
          I was tasked with designing a landing page that would effectively communicate the platform's value proposition 
          and drive conversions, while maintaining a modern, professional aesthetic.
        </p>
        
        <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-primary/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Conversion-focused Design</h3>
            <p className="text-sm">A structured layout with persuasive CTAs, clear content sections, and an intuitive user flow that guides visitors toward conversion.</p>
          </div>
          
          <div className="bg-primary/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Visual UI & Branding</h3>
            <p className="text-sm">A balance between professionalism and approachability, using a refined color palette, elegant typography, and engaging visuals.</p>
          </div>
          
          <div className="bg-primary/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Mobile-first & Smooth Interactions</h3>
            <p className="text-sm">Optimized for mobile devices with seamless animations and an intuitive navigation experience that works across all device sizes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

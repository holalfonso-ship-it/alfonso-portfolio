
import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">The Solution</h2>
      
      <p className="mb-6">
        I created a conversion-driven landing page design with a clear visual hierarchy, engaging microinteractions, 
        and a structure that effectively communicated VideoUp's unique value proposition across all devices.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-3">Conversion-Driven Design</h3>
          <p>
            Implemented a strategic layout with clear visual hierarchy and sectioning that guided visitors through 
            the app's benefits, features, and pricing options, culminating in prominent call-to-action buttons at 
            key decision points throughout the page.
          </p>
        </div>
        
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-3">Visual UI & Branding</h3>
          <p>
            Developed a bold visual identity using vibrant gradients, dynamic typography, and a tech-friendly 
            aesthetic that conveyed innovation while remaining accessible. The design used visual metaphors to 
            simplify complex AI concepts and showcase the app's capabilities.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-3">Mobile-First & Animations</h3>
          <p>
            Designed the entire experience with mobile devices as the primary consideration, ensuring all interface 
            elements and content were optimized for smaller screens first, then expanded for desktop. Incorporated 
            subtle animations and transitions that enhanced navigation and highlighted key features.
          </p>
        </div>
        
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-3">Social Proof Integration</h3>
          <p>
            Strategically placed testimonials, user statistics, and partner logos throughout the page to build 
            trust and credibility. Integrated video testimonials and before/after examples that demonstrated 
            real results achieved with the app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;

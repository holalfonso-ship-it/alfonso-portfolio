
import React from 'react';

export const SolutionSection: React.FC = () => {
  return (
    <section id="solution">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">The Solution</h2>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          The final design solution delivered a compelling, user-focused landing page that effectively communicated ResumeCoach's value proposition:
        </p>
        
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Hero Section</h3>
            <p>
              A bold, attention-grabbing hero section with a clear value proposition, supporting benefit statements, and a prominent CTA. 
              The design included a visual representation of the platform in action to immediately communicate functionality.
            </p>
            
            <h3 className="text-xl font-semibold">Social Proof</h3>
            <p>
              Strategic placement of trust indicators, including user testimonials, success statistics, and partner logos to build credibility and reduce skepticism.
            </p>
            
            <h3 className="text-xl font-semibold">Feature Showcase</h3>
            <p>
              A visually engaging presentation of key features, with each feature tied to a specific user benefit rather than just technical capabilities.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Pricing Section</h3>
            <p>
              A transparent, easy-to-understand pricing section with clear value comparisons between different plans and strategic use of visual hierarchy to highlight recommended options.
            </p>
            
            <h3 className="text-xl font-semibold">FAQ Section</h3>
            <p>
              A comprehensive FAQ section addressing common user concerns and objections, designed to reduce friction in the conversion process.
            </p>
            
            <h3 className="text-xl font-semibold">Mobile Optimization</h3>
            <p>
              A fully responsive design with special attention to mobile interaction patterns, touch targets, and content prioritization for smaller screens.
            </p>
          </div>
        </div>
        
        <div className="my-8 bg-muted/20 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Design Elements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-medium mb-2">Typography</h4>
              <p className="text-sm">Clean, accessible sans-serif fonts with careful attention to hierarchy, spacing, and readability across device sizes.</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">Color Palette</h4>
              <p className="text-sm">Professional blue tones balanced with warm accent colors to create trust while maintaining visual interest and energy.</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">Visual Assets</h4>
              <p className="text-sm">High-quality illustrations and UI screenshots that clearly communicate the product's functionality and benefits.</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">Micro-interactions</h4>
              <p className="text-sm">Subtle animations and transitions to enhance engagement without distracting from core content.</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">White Space</h4>
              <p className="text-sm">Strategic use of negative space to improve readability, focus attention, and create a premium feel.</p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">CTAs</h4>
              <p className="text-sm">High-contrast, clearly defined call-to-action buttons with action-oriented copy placed at strategic conversion points.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


import React from 'react';

export const SolutionSection: React.FC = () => {
  return (
    <section id="solution">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">The Solution</h2>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          The final OnlineCV landing page design incorporated several key elements that addressed the identified challenges while creating an engaging and conversion-focused experience:
        </p>
        
        <div className="space-y-8 my-8">
          <div className="rounded-lg overflow-hidden border border-muted/20">
            <div className="bg-primary/10 p-6">
              <h3 className="text-xl font-semibold">Hero Section</h3>
            </div>
            <div className="p-6">
              <p>Crafted a compelling hero section with a clear value proposition, engaging visuals of resume templates, and a prominent CTA. The design immediately communicates the platform's purpose and main benefit while directing user attention to the desired action.</p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden border border-muted/20">
            <div className="bg-primary/10 p-6">
              <h3 className="text-xl font-semibold">Feature Showcase</h3>
            </div>
            <div className="p-6">
              <p>Designed a visually appealing feature showcase that highlights OnlineCV's key differentiators: AI-powered suggestions, professional templates, and ease of use. Each feature is presented with relevant imagery and concise copy that emphasizes user benefits rather than technical details.</p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden border border-muted/20">
            <div className="bg-primary/10 p-6">
              <h3 className="text-xl font-semibold">Testimonials & Social Proof</h3>
            </div>
            <div className="p-6">
              <p>Integrated authentic user testimonials and credibility markers throughout the page to build trust. The testimonials focus on real outcomes and benefits experienced by users, reinforcing the platform's value proposition.</p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden border border-muted/20">
            <div className="bg-primary/10 p-6">
              <h3 className="text-xl font-semibold">Visual Design System</h3>
            </div>
            <div className="p-6">
              <p>Created a refined color palette and typography system that balances professionalism with approachability. The design uses subtle gradients, clean lines, and strategic white space to create a modern yet credible aesthetic that appeals to job seekers across industries.</p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden border border-muted/20">
            <div className="bg-primary/10 p-6">
              <h3 className="text-xl font-semibold">Responsive Implementation</h3>
            </div>
            <div className="p-6">
              <p>Ensured an optimal experience across all devices with a mobile-first approach. The design maintains visual hierarchy and clear CTAs at all breakpoints, with special attention to touch interactions on mobile devices and streamlined content presentation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

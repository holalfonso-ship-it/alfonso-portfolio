
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
          
          {/* Hero Section Image - Added as requested */}
          <div className="mt-4 mb-8">
            <div className="border border-muted/20 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/aff82d83-f09c-466e-aac2-29946e8f7b30.png" 
                alt="OnlineCV hero section showing the website interface with resume templates" 
                className="w-full object-cover"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              The OnlineCV hero section featuring a clean interface, resume template preview, and clear call-to-action
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden border border-muted/20">
            <div className="bg-primary/10 p-6">
              <h3 className="text-xl font-semibold">Feature Showcase</h3>
            </div>
            <div className="p-6">
              <p>Designed a visually appealing feature showcase that highlights OnlineCV's key differentiators: AI-powered suggestions, professional templates, and ease of use. Each feature is presented with relevant imagery and concise copy that emphasizes user benefits rather than technical details.</p>
            </div>
          </div>
          
          {/* Feature Showcase Image - Adding as requested */}
          <div className="mt-4 mb-8">
            <div className="border border-muted/20 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/b644f2ad-1249-484d-aafe-dd0118c62098.png" 
                alt="OnlineCV feature showcase highlighting the advantages of using their resume builder" 
                className="w-full object-cover"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              The advantages section highlighting six key benefits of using OnlineCV for resume creation
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden border border-muted/20">
            <div className="bg-primary/10 p-6">
              <h3 className="text-xl font-semibold">Testimonials & Social Proof</h3>
            </div>
            <div className="p-6">
              <p>Integrated authentic user testimonials and credibility markers throughout the page to build trust. The testimonials focus on real outcomes and benefits experienced by users, reinforcing the platform's value proposition.</p>
            </div>
          </div>
          
          {/* Trustpilot Testimonials Image - Adding as requested */}
          <div className="mt-4 mb-8">
            <div className="border border-muted/20 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/c4fc6dda-043a-46ec-8f71-c69171ade850.png" 
                alt="Trustpilot testimonials showing positive reviews from OnlineCV users" 
                className="w-full object-cover"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Trustpilot reviews showcasing positive user experiences with OnlineCV's resume building platform
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden border border-muted/20">
            <div className="bg-primary/10 p-6">
              <h3 className="text-xl font-semibold">Visual Design System</h3>
            </div>
            <div className="p-6">
              <p>Created a refined color palette and typography system that balances professionalism with approachability. The design uses subtle gradients, clean lines, and strategic white space to create a modern yet credible aesthetic that appeals to job seekers across industries.</p>
            </div>
          </div>
          
          {/* Visual Design System Image - Adding as requested */}
          <div className="mt-4 mb-8">
            <div className="border border-muted/20 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/842125b7-1cc0-4fd3-9178-315057bfc996.png" 
                alt="OnlineCV visual design system showing color and UI variations" 
                className="w-full object-cover"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Color palette and navigation design variations for the OnlineCV platform, showcasing consistent branding across different visual themes
            </p>
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

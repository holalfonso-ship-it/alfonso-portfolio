
import React from 'react';

const ProcessSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Design Process</h2>
      
      <div className="space-y-12">
        <div className="bg-muted/10 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-4">1. Research & Discovery</h3>
          <p className="mb-4">
            I began with comprehensive research on competitors, market trends, and target audience needs. 
            This included analyzing successful SaaS landing pages, identifying key conversion elements, and 
            gathering insights on 2025 design trends relevant to tech products.
          </p>
          <p>
            Key activities included user interviews with potential customers, competitive analysis of 15+ video 
            editing tools, and heatmap studies of similar landing pages to identify engagement patterns.
          </p>
        </div>
        
        <div className="bg-muted/10 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-4">2. Information Architecture & Wireframing</h3>
          <p className="mb-4">
            Based on research findings, I created the information architecture that prioritized VideoUp's key 
            selling points and addressed common user questions. I developed low to mid-fidelity wireframes for 
            mobile and desktop versions, focusing on conversion optimization.
          </p>
          <p>
            The wireframes were tested with potential users to validate the structure and flow before moving 
            to visual design, allowing us to identify and address navigation issues early.
          </p>
        </div>
        
        <div className="bg-muted/10 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-4">3. Visual Design & Branding</h3>
          <p className="mb-4">
            I developed a bold, tech-forward visual identity that aligned with VideoUp's brand positioning as an 
            innovative AI tool. This included creating custom illustrations, selecting typography that balanced 
            readability with personality, and developing a color palette with vibrant gradients that conveyed energy 
            and innovation.
          </p>
          <p>
            Multiple design concepts were presented to stakeholders, with the final direction chosen based on 
            alignment with brand values and feedback from potential users.
          </p>
        </div>
        
        <div className="bg-muted/10 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-4">4. Prototype & Iteration</h3>
          <p className="mb-4">
            I created interactive prototypes with animations and microinteractions to test the complete user 
            experience. These prototypes were tested with target users to gather feedback on usability, visual appeal, 
            and clarity of messaging.
          </p>
          <p>
            Based on testing results, I made several iterations to refine the design, focusing particularly on 
            call-to-action visibility, feature explanation clarity, and mobile responsiveness.
          </p>
        </div>
        
        <div className="bg-muted/10 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-4">5. Handoff & Implementation</h3>
          <p className="mb-4">
            I prepared comprehensive design specifications and assets for the development team, including responsive 
            breakpoints, animation details, and interaction specifications. I collaborated closely with developers 
            during implementation to ensure the design vision was faithfully executed.
          </p>
          <p>
            Post-launch, I continued to work with the marketing team to analyze user data and make data-driven 
            refinements to optimize conversion rates further.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;

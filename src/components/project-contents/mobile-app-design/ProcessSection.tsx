
import React from 'react';

const ProcessSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Design Process</h2>
      
      <div className="space-y-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">1. Research & Analysis</h3>
          <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Conducted competitive analysis of top e-commerce apps on both platforms to identify patterns and best practices
              </li>
              <li>
                Performed user interviews with existing customers who used iOS and Android devices
              </li>
              <li>
                Analyzed platform-specific guidelines (Material Design 3 and iOS Human Interface Guidelines)
              </li>
              <li>
                Created user personas that represented both platform user types and their unique expectations
              </li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">2. Strategy & Information Architecture</h3>
          <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Developed a unified information architecture and user flow that would work across platforms
              </li>
              <li>
                Created a feature parity matrix to ensure core functionality remained consistent
              </li>
              <li>
                Identified platform-specific enhancement opportunities to leverage unique capabilities
              </li>
              <li>
                Established design principles to guide decision-making throughout the process
              </li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">3. Wireframing & Prototyping</h3>
          <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Created low-fidelity wireframes for critical user journeys (browsing, search, checkout)
              </li>
              <li>
                Developed platform-specific wireframes addressing navigation patterns for each OS
              </li>
              <li>
                Built interactive prototypes for user testing on both iOS and Android devices
              </li>
              <li>
                Conducted usability testing with users of both platforms to validate concepts
              </li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">4. Design System Development</h3>
          <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Created a unified color palette, typography system, and spacing scale for brand consistency
              </li>
              <li>
                Designed platform-specific component libraries (buttons, form elements, cards, etc.)
              </li>
              <li>
                Established naming conventions and organization that would work for both development teams
              </li>
              <li>
                Documented responsive behaviors for different screen sizes and orientations
              </li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">5. UI Design & Iterations</h3>
          <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Created high-fidelity screens for all key user flows across both platforms
              </li>
              <li>
                Incorporated feedback from stakeholders and initial user testing sessions
              </li>
              <li>
                Refined platform-specific interaction details (animations, transitions, gestures)
              </li>
              <li>
                Conducted additional usability testing to validate final design solutions
              </li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">6. Implementation & Optimization</h3>
          <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Created detailed specifications and assets for development handoff
              </li>
              <li>
                Worked closely with iOS and Android development teams during implementation
              </li>
              <li>
                Conducted design QA throughout the development process
              </li>
              <li>
                Collected post-launch metrics and user feedback to inform future iterations
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;

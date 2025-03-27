import React from 'react';
import { AspectRatio } from '../../../components/ui/aspect-ratio';
const ProcessSection: React.FC = () => {
  return <div>
      <h2 className="text-3xl font-bold mb-6">Design Process</h2>
      
      <div className="space-y-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">1. Research & Analysis</h3>
          <div className="grid grid-cols-1 gap-6">
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
            <div className="rounded-lg overflow-hidden border border-border/50">
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <img alt="Research and Analysis Phase" className="w-full h-full object-cover" src="/lovable-uploads/4789cc35-7092-4740-af94-ce7f152bbf3b.png" />
              </AspectRatio>
              <div className="p-3 bg-muted/30">
                <p className="text-xs text-muted-foreground">
                  Analyzing user behavior patterns and platform-specific guidelines to establish solid research foundation.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">2. Strategy & Information Architecture</h3>
          <div className="grid grid-cols-1 gap-6">
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
            <div className="rounded-lg overflow-hidden border border-border/50">
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <img src="/lovable-uploads/1b158ca3-ed08-40fa-bc55-7d519486e8c0.png" alt="Information Architecture Planning" className="w-full h-full object-cover" />
              </AspectRatio>
              <div className="p-3 bg-muted/30">
                <p className="text-xs text-muted-foreground">
                  Creating unified information architecture and user flows that work seamlessly across platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">3. Wireframing & Prototyping</h3>
          <div className="grid grid-cols-1 gap-6">
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
            <div className="rounded-lg overflow-hidden border border-border/50">
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <img src="/lovable-uploads/4fe6b813-f155-406e-9d47-cab1a5940040.png" alt="Wireframing and Prototyping Process" className="w-full h-full object-cover" />
              </AspectRatio>
              <div className="p-3 bg-muted/30">
                <p className="text-xs text-muted-foreground">
                  Building wireframes and interactive prototypes to test navigation patterns and user flows.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">4. Design System Development</h3>
          <div className="grid grid-cols-1 gap-6">
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
            <div className="rounded-lg overflow-hidden border border-border/50">
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <img src="/lovable-uploads/3eaa9d8f-3d72-4339-b200-982a6a06bc5c.png" alt="Design System Components" className="w-full h-full object-cover" />
              </AspectRatio>
              <div className="p-3 bg-muted/30">
                <p className="text-xs text-muted-foreground">
                  Developing a comprehensive design system with components adapted for both iOS and Android.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">5. UI Design & Iterations</h3>
          <div className="grid grid-cols-1 gap-6">
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
            <div className="rounded-lg overflow-hidden border border-border/50">
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <img src="/lovable-uploads/5cb0453f-dc0d-4b19-852f-8c3131354284.png" alt="UI Design and Iterations" className="w-full h-full object-cover" />
              </AspectRatio>
              <div className="p-3 bg-muted/30">
                <p className="text-xs text-muted-foreground">
                  Refining high-fidelity UI designs with platform-specific interaction patterns and visual elements.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">6. Implementation & Optimization</h3>
          <div className="grid grid-cols-1 gap-6">
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
            <div className="rounded-lg overflow-hidden border border-border/50">
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <img src="/lovable-uploads/0a0b18bd-6af2-42d6-8ef4-b7a923f4a58d.png" alt="Implementation and Optimization" className="w-full h-full object-cover" />
              </AspectRatio>
              <div className="p-3 bg-muted/30">
                <p className="text-xs text-muted-foreground">
                  Collaborating with development teams to ensure proper implementation and optimization of the design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ProcessSection;
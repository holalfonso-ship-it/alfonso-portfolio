
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SolutionSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">The Solution</h2>
      
      <p className="mb-6">
        Our solution for VideoUp's landing page focused on creating a high-conversion, visually appealing design 
        that effectively communicates the app's AI capabilities while maintaining excellent user experience across all devices.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card className="border border-border/50">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-3">Visual Design Strategy</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Implemented a vibrant gradient color scheme combining deep purples, bright blues, 
                and electric pinks to create a modern, tech-forward aesthetic
              </li>
              <li>
                Used bold, clean typography with clear hierarchy to guide users through content
              </li>
              <li>
                Incorporated micro-interactions and subtle animations to enhance engagement without 
                sacrificing performance
              </li>
              <li>
                Created custom iconography that unified the brand's visual language across the page
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="border border-border/50">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-3">Conversion Optimization</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Strategically placed CTA buttons with high-contrast colors and action-oriented text
              </li>
              <li>
                Implemented social proof sections featuring user testimonials and usage statistics
              </li>
              <li>
                Created a streamlined trial sign-up process with minimal friction
              </li>
              <li>
                Designed feature highlights that clearly communicate benefits rather than just 
                technical capabilities
              </li>
              <li>
                Incorporated trust signals including security badges and integrations with familiar platforms
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-muted/20 p-6 rounded-lg border border-border/50 mb-8">
        <h3 className="text-xl font-semibold mb-3">Key Design Elements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium mb-2">Modern UI Components</h4>
            <p className="text-sm text-muted-foreground">
              Floating cards with subtle shadows, glass-morphism effects, and animated gradients 
              create a contemporary feel aligned with 2025 design trends.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Responsive Framework</h4>
            <p className="text-sm text-muted-foreground">
              Built on a 12-column grid system that seamlessly adapts from desktop to mobile, 
              ensuring consistent experience across all devices.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Performance Focus</h4>
            <p className="text-sm text-muted-foreground">
              Optimized image loading, efficient animations, and streamlined code to ensure 
              fast load times without sacrificing visual impact.
            </p>
          </div>
        </div>
      </div>
      
      <p>
        The landing page design successfully balances technical sophistication with user-friendly accessibility, 
        presenting VideoUp as a cutting-edge tool that remains approachable for users of all skill levels. 
        The design system we created provides flexibility for future feature expansions while maintaining visual consistency.
      </p>
    </div>
  );
};

export default SolutionSection;

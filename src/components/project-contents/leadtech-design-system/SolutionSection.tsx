
import React from 'react';
import { Workflow, Share, MessageSquare } from 'lucide-react';
import { AspectRatio } from '../../ui/aspect-ratio';
export const SolutionSection: React.FC = () => {
  return <>
      <h2 className="text-3xl font-bold mb-6">Solution</h2>
      <p className="mb-6">
        To address these challenges, I spearheaded the development of a comprehensive design system that served as a 
        single source of truth for all design-related assets and guidelines. The solution consisted of several key components:
      </p>

      <div className="space-y-8 mb-12">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-primary/10 p-4 rounded-full shrink-0">
            <Workflow className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">UI Component Library</h3>
            <p>
              Developed a library of reusable UI components with detailed specifications and usage guidelines. 
              These components were designed to be easily integrated into any Leadtech product.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-primary/10 p-4 rounded-full shrink-0">
            <Share className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Design Tokens</h3>
            <p>
              Implemented a system of design tokens to manage visual styles such as colors, typography, and spacing. 
              This allowed for easy updates and theming across the entire design system.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-primary/10 p-4 rounded-full shrink-0">
            <MessageSquare className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Documentation & Guidelines</h3>
            <p>
              Created comprehensive documentation and usage guidelines for all components and design tokens. 
              This ensured that designers and developers had a clear understanding of how to use the design system effectively.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <AspectRatio ratio={4 / 3} className="bg-muted rounded-lg overflow-hidden mb-4">
            <img alt="Leadtech Design System UI Kit" className="w-full h-full object-contain" src="/lovable-uploads/ac31c237-0e0b-465b-9677-8cff4ffd42b3.png" />
          </AspectRatio>
          <p className="text-sm text-muted-foreground">Leadtech Design System UI Kit</p>
        </div>
        <div>
          <AspectRatio ratio={4 / 3} className="bg-muted rounded-lg overflow-hidden mb-4">
            <img src="/lovable-uploads/3dcf1c6d-4dde-437c-b626-bbe99631bf3f.png" alt="Design System Analytics in Figma" className="object-cover w-full h-full" />
          </AspectRatio>
          <p className="text-sm text-muted-foreground">Design System Analytics Dashboard in Figma</p>
        </div>
      </div>
    </>;
};

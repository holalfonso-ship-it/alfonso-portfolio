
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
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">UI Component Library</h3>
            <p className="mb-4">
              Developed a library of reusable UI components with detailed specifications and usage guidelines. 
              These components were designed to be easily integrated into any Leadtech product.
            </p>
            <AspectRatio ratio={16/9} className="bg-muted rounded-lg overflow-hidden">
              <img src="/lovable-uploads/2baf02b9-f610-4b35-a8eb-89681d4a23b6.png" alt="UI Component Library" className="w-full h-full object-cover" />
            </AspectRatio>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-primary/10 p-4 rounded-full shrink-0">
            <Share className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Design Tokens</h3>
            <p className="mb-4">
              Implemented a system of design tokens to manage visual styles such as colors, typography, and spacing. 
              This allowed for easy updates and theming across the entire design system.
            </p>
            <AspectRatio ratio={16/9} className="bg-muted rounded-lg overflow-hidden">
              <img src="/lovable-uploads/d5a5265a-473d-4d71-b8d2-8f158deb27ab.png" alt="Design Tokens" className="w-full h-full object-cover" />
            </AspectRatio>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-primary/10 p-4 rounded-full shrink-0">
            <MessageSquare className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Documentation & Guidelines</h3>
            <p className="mb-4">
              Created comprehensive documentation and usage guidelines for all components and design tokens. 
              This ensured that designers and developers had a clear understanding of how to use the design system effectively.
            </p>
            <AspectRatio ratio={16/9} className="bg-muted rounded-lg overflow-hidden">
              <img src="/lovable-uploads/3eaa9d8f-3d72-4339-b200-982a6a06bc5c.png" alt="Documentation & Guidelines" className="w-full h-full object-cover" />
            </AspectRatio>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <AspectRatio ratio={4 / 3} className="bg-muted rounded-lg overflow-hidden mb-4">
            <img alt="Leadtech Design System UI Kit" src="/lovable-uploads/ac31c237-0e0b-465b-9677-8cff4ffd42b3.png" className="w-full h-full object-cover" />
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

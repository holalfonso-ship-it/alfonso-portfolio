
import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { AspectRatio } from '../../ui/aspect-ratio';
import { Component, FileCode, LayoutDashboard, Smartphone } from 'lucide-react';

export const ComponentExamplesSection: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Component Examples</h2>
      <p className="mb-8">
        The Leadtech Design System includes a variety of components designed for consistency and reusability across platforms.
        Below are some examples of components from our library:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="overflow-hidden">
          <AspectRatio ratio={4/3} className="bg-secondary/30">
            <div className="h-full w-full p-6 flex flex-col">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Component className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">UI Components</h3>
              <p className="text-muted-foreground">
                Reusable interface elements like buttons, inputs, and cards that maintain consistent styling.
              </p>
              <div className="flex-grow"></div>
              <div className="mt-4">
                <img 
                  src="/lovable-uploads/3b9b541b-9f9f-475f-a5b2-13e33a6f80fc.png" 
                  alt="Button component examples" 
                  className="w-full rounded-md shadow-sm"
                />
              </div>
            </div>
          </AspectRatio>
        </Card>
        
        <Card className="overflow-hidden">
          <AspectRatio ratio={4/3} className="bg-secondary/30">
            <div className="h-full w-full p-6 flex flex-col">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <FileCode className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Code Patterns</h3>
              <p className="text-muted-foreground">
                Standardized code implementation guidelines ensuring consistent component behavior.
              </p>
              <div className="flex-grow"></div>
              <div className="mt-4 bg-background rounded-md p-3 font-mono text-xs shadow-sm overflow-hidden">
                <div className="text-blue-500">import</div>
                <div>&#123; Button &#125; from <span className="text-green-500">'@leadtech/design-system'</span>;</div>
                <div className="mt-2">
                  <span className="text-blue-500">const</span> Example = () =&gt; (
                </div>
                <div className="ml-4">
                  &lt;<span className="text-orange-500">Button variant="primary"</span>&gt;Click me&lt;/Button&gt;
                </div>
                <div>);</div>
              </div>
            </div>
          </AspectRatio>
        </Card>
        
        <Card className="overflow-hidden">
          <AspectRatio ratio={4/3} className="bg-secondary/30">
            <div className="h-full w-full p-6 flex flex-col">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <LayoutDashboard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Layout Templates</h3>
              <p className="text-muted-foreground">
                Pre-built layout structures for dashboards, forms, and content pages.
              </p>
              <div className="flex-grow"></div>
              <div className="grid grid-cols-3 grid-rows-3 gap-2 mt-4 bg-background p-3 rounded-md shadow-sm">
                <div className="bg-primary/20 col-span-3 h-8 rounded"></div>
                <div className="bg-primary/10 h-24 rounded"></div>
                <div className="bg-primary/10 col-span-2 h-24 rounded"></div>
                <div className="bg-primary/15 col-span-3 h-8 rounded"></div>
              </div>
            </div>
          </AspectRatio>
        </Card>
        
        <Card className="overflow-hidden">
          <AspectRatio ratio={4/3} className="bg-secondary/30">
            <div className="h-full w-full p-6 flex flex-col">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Responsive Patterns</h3>
              <p className="text-muted-foreground">
                Adaptable components designed to work seamlessly across different device sizes.
              </p>
              <div className="flex-grow"></div>
              <div className="mt-4">
                <img 
                  src="/lovable-uploads/c0a19b7f-5b09-47de-8aad-69eefa4e7fd9.png" 
                  alt="Mobile UI examples" 
                  className="w-full rounded-md shadow-sm"
                />
              </div>
            </div>
          </AspectRatio>
        </Card>
      </div>
    </>
  );
};

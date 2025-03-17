
import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { AspectRatio } from '../../ui/aspect-ratio';
import { Component, FileCode } from 'lucide-react';

export const ComponentExamplesSection: React.FC = () => {
  return <>
      <h2 className="text-3xl font-bold mb-6">Component Examples</h2>
      <p className="mb-8">
        The Leadtech Design System includes a variety of components designed for consistency and reusability across platforms.
        Below are some examples of components from our library:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-12">
        <Card className="overflow-hidden">
          <AspectRatio ratio={4 / 3} className="bg-secondary/30">
            <div className="h-full w-full p-6 flex flex-col min-h-[350px]">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                <Component className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">UI Components</h3>
              <p className="text-muted-foreground">
                Reusable interface elements like buttons, inputs, and cards that maintain consistent styling.
              </p>
              <div className="flex-grow"></div>
              <div className="mt-4">
                <img alt="Button component examples" className="w-full rounded-md shadow-sm" src="/lovable-uploads/d5a5265a-473d-4d71-b8d2-8f158deb27ab.png" />
              </div>
            </div>
          </AspectRatio>
        </Card>
        
        <Card className="overflow-hidden">
          <AspectRatio ratio={4 / 3} className="bg-secondary/30">
            <div className="h-full w-full p-6 flex flex-col min-h-[350px]">
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
                  &lt;<span className="text-orange-500">Button 
                    width=&#123;93&#125; 
                    height=&#123;40&#125; 
                    borderRadius=&#123;50&#125; 
                    gap=&#123;8&#125;
                    padding=&#123;&#123;top: 8, right: 24, bottom: 8, left: 24&#125;&#125;</span>&gt;
                    Click me
                  &lt;/Button&gt;
                </div>
                <div>);</div>
              </div>
            </div>
          </AspectRatio>
        </Card>
      </div>
    </>;
};

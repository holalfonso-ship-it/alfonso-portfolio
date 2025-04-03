
import React from 'react';

export const LearningsSection: React.FC = () => {
  return (
    <section id="learnings">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Key Learnings</h2>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          The OnlineCV landing page project provided valuable insights and learning opportunities:
        </p>
        
        <div className="space-y-6 my-8">
          <div className="rounded-lg overflow-hidden border border-muted/20">
            <div className="bg-primary/10 p-6">
              <h3 className="text-xl font-semibold">Balance is Critical</h3>
            </div>
            <div className="p-6">
              <p>Finding the right balance between professional aesthetics and approachable design was crucial. Too formal, and the site feels inaccessible; too casual, and it loses credibility. The project reinforced the importance of carefully calibrating visual tone to match user expectations.</p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden border border-muted/20">
            <div className="bg-primary/10 p-6">
              <h3 className="text-xl font-semibold">Visual Hierarchy Drives Conversion</h3>
            </div>
            <div className="p-6">
              <p>The strategic arrangement of visual elements creates a natural flow that guides users toward conversion points. I learned that subtle visual cues and thoughtful spacing can be just as effective as explicit directions in guiding user behavior.</p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden border border-muted/20">
            <div className="bg-primary/10 p-6">
              <h3 className="text-xl font-semibold">Show, Don't Just Tell</h3>
            </div>
            <div className="p-6">
              <p>For tools like OnlineCV, visual demonstrations of the product in action proved more compelling than descriptive text. The project reinforced that showing realistic examples of templates and outputs significantly increases user confidence and interest.</p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden border border-muted/20">
            <div className="bg-primary/10 p-6">
              <h3 className="text-xl font-semibold">Iteration Improves Outcomes</h3>
            </div>
            <div className="p-6">
              <p>The iterative design process, incorporating feedback at multiple stages, led to substantial improvements in the final product. Each round of testing revealed unexpected insights that wouldn't have been captured in a linear design approach.</p>
            </div>
          </div>
        </div>
        
        <p>
          These learnings have enriched my approach to landing page design and will inform future projects where conversion optimization and brand positioning are key priorities.
        </p>
      </div>
    </section>
  );
};

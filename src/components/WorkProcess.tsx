import React from 'react';
import SectionHeader from './SectionHeader';

const WorkProcess: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-32 px-6 md:px-12 bg-gradient-to-b from-background to-background/90">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="My Process"
          title="How I Work"
          subtitle="A systematic approach to solving design challenges and delivering exceptional results."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Process Step 1 */}
          <div className="p-6 rounded-lg border border-border/50 shadow-sm bg-card/30 backdrop-blur-sm transition-all duration-300 hover:shadow-md">
            <h3 className="text-xl font-semibold mb-3">1. Discovery & Research</h3>
            <p className="text-muted-foreground">
              Understanding the problem, user needs, and business goals through research and analysis.
            </p>
          </div>
          
          {/* Process Step 2 */}
          <div className="p-6 rounded-lg border border-border/50 shadow-sm bg-card/30 backdrop-blur-sm transition-all duration-300 hover:shadow-md">
            <h3 className="text-xl font-semibold mb-3">2. Ideation & Design</h3>
            <p className="text-muted-foreground">
              Generating ideas, creating wireframes, and developing visual designs that align with user needs.
            </p>
          </div>
          
          {/* Process Step 3 */}
          <div className="p-6 rounded-lg border border-border/50 shadow-sm bg-card/30 backdrop-blur-sm transition-all duration-300 hover:shadow-md">
            <h3 className="text-xl font-semibold mb-3">3. Prototyping & Testing</h3>
            <p className="text-muted-foreground">
              Building interactive prototypes and conducting user testing to validate design decisions.
            </p>
          </div>
          
          {/* Process Step 4 */}
          <div className="p-6 rounded-lg border border-border/50 shadow-sm bg-card/30 backdrop-blur-sm transition-all duration-300 hover:shadow-md">
            <h3 className="text-xl font-semibold mb-3">4. Implementation & Handoff</h3>
            <p className="text-muted-foreground">
              Collaborating with developers to implement designs and ensuring a smooth handoff process.
            </p>
          </div>
          
          {/* Process Step 5 */}
          <div className="p-6 rounded-lg border border-border/50 shadow-sm bg-card/30 backdrop-blur-sm transition-all duration-300 hover:shadow-md">
            <h3 className="text-xl font-semibold mb-3">5. Iteration & Optimization</h3>
            <p className="text-muted-foreground">
              Continuously iterating on designs based on user feedback and performance metrics to optimize the user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;

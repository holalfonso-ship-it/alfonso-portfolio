
import React from 'react';

const ProcessSection: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Process</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-3">1. Research and Analysis</h3>
          <p>
            I conducted interviews with designers, developers, and product managers to identify pain points 
            in the existing workflow. I also performed a competitive analysis of DesignOps practices at similar 
            organizations to establish benchmarks and identify best practices.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-3">2. Workflow Mapping</h3>
          <p>
            We mapped the entire design process from concept to implementation, identifying bottlenecks 
            and opportunities for optimization. This exercise helped visualize the end-to-end flow and 
            highlight areas for improvement.
          </p>
        </div>
        
        <div className="my-8">
          <img 
            src="/lovable-uploads/8c59b616-51e1-4471-9126-d4759111deb2.png" 
            alt="DesignOps Workflow Diagram" 
            className="w-full rounded-lg shadow-md"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            Detailed workflow diagram showing the design-to-development process
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-3">3. Tool Evaluation and Integration</h3>
          <p>
            After evaluating various design tools and collaboration platforms, we selected and integrated 
            a stack that would best support our workflow needs while minimizing tool switching and context shifts.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-3">4. Framework Development</h3>
          <p>
            Based on our research and workflow mapping, I developed a comprehensive DesignOps framework 
            tailored to our organization's needs, including documentation, templates, and guidelines.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-3">5. Training and Implementation</h3>
          <p>
            We rolled out the new processes through a series of workshops and training sessions, 
            with a phased approach to ensure teams could adapt gradually.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProcessSection;

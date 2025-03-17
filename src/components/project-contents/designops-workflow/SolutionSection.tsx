
import React from 'react';
import { Workflow, Share, MessageSquare, LineChart } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Solution</h2>
      <p className="mb-6">
        To address these challenges, I developed and implemented a comprehensive DesignOps framework 
        focused on four key areas:
      </p>

      <div className="space-y-8 mb-12">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-primary/10 p-4 rounded-full shrink-0">
            <Workflow className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Streamlined Workflow</h3>
            <p>
              Established a clear, repeatable process for design projects from inception to handoff, with well-defined 
              checkpoints and expectations at each stage. We implemented standardized templates for design briefs, 
              project scoping, and handoff documentation to ensure consistency.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-primary/10 p-4 rounded-full shrink-0">
            <Share className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Collaboration Tools</h3>
            <p>
              Selected and integrated a tailored stack of design tools that promoted collaboration and visibility. 
              We established clear guidelines for file organization, naming conventions, and versioning to ensure 
              all team members could easily locate and work with design assets.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-primary/10 p-4 rounded-full shrink-0">
            <MessageSquare className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Communication Protocols</h3>
            <p>
              Defined clear channels and cadences for communication between design, development, and product teams. 
              We implemented regular design reviews and established standardized feedback mechanisms to reduce 
              miscommunication and ensure alignment.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-primary/10 p-4 rounded-full shrink-0">
            <LineChart className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Metrics & Measurement</h3>
            <p>
              Implemented a system to track key performance indicators for the design process, including handoff time, 
              design iteration cycles, and implementation accuracy. These metrics allowed us to identify bottlenecks 
              and continuously improve our processes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionSection;


import React from 'react';
import { Workflow, Share, MessageSquare } from 'lucide-react';
import { AspectRatio } from '../../ui/aspect-ratio';

const SolutionSection: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Solution</h2>
      <p className="mb-6">
        I developed a comprehensive DesignOps framework focused on streamlining collaboration and enhancing 
        communication between teams. The framework consisted of several key components:
      </p>

      <div className="space-y-8 mb-12">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-primary/10 p-4 rounded-full shrink-0">
            <Workflow className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Standardized Workflows</h3>
            <p>
              Created clear, documented processes for each project phase, from initial discovery to final implementation. 
              These workflows defined roles, responsibilities, and expectations at each stage.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-primary/10 p-4 rounded-full shrink-0">
            <Share className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Centralized Resources</h3>
            <p>
              Established a single source of truth for all project assets, documentation, and decisions. This included
              creating shared repositories, component libraries, and design systems accessible to all teams.
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
              Developed structured communication guidelines that defined when, how, and where different types of 
              information should be shared. This included regular sync meetings, asynchronous updates, and 
              feedback mechanisms.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <AspectRatio ratio={4/3} className="bg-muted rounded-lg overflow-hidden mb-4">
            <img 
              src="https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef03a90e9a93e6e0f0c34_design-system.jpg" 
              alt="Design system documentation" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
          <p className="text-sm text-muted-foreground">Centralized design system documentation</p>
        </div>
        <div>
          <AspectRatio ratio={4/3} className="bg-muted rounded-lg overflow-hidden mb-4">
            <img 
              src="https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef000e7b4a454c6019b93_data-viz.jpg" 
              alt="Collaboration metrics dashboard" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
          <p className="text-sm text-muted-foreground">Real-time collaboration metrics dashboard</p>
        </div>
      </div>
    </>
  );
};

export default SolutionSection;

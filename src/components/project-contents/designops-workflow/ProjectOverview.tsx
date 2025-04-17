
import React from 'react';

const ProjectOverview: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
      
      <div className="mb-16">
        <div className="rounded-lg overflow-hidden border border-border/50 shadow-sm">
          <img 
            alt="DesignOps Workflow Kickoff" 
            className="w-full h-auto" 
            src="/lovable-uploads/677d45eb-c441-4fd5-8da7-6fa9049b0074.png" 
          />
          <div className="p-4 bg-muted/30">
            <p className="text-sm text-muted-foreground">
              DesignOps Kickoff for 24 Apps Design Team: Focusing on improving quality, speed, and ease of use through optimized design processes.
            </p>
          </div>
        </div>
      </div>

      <p className="mb-4">
        As the Senior Product Designer and DesignOps lead at Leadtech Group, I was tasked with implementing and optimizing 
        DesignOps processes to enhance team collaboration, reduce handoff time, and improve overall design efficiency.
      </p>
      <p>
        This initiative was driven by the need to streamline collaboration between design, development, and product teams 
        as our organization scaled. With multiple products in development simultaneously, we needed a systematic approach 
        to maintain quality while increasing velocity.
      </p>
    </>
  );
};

export default ProjectOverview;


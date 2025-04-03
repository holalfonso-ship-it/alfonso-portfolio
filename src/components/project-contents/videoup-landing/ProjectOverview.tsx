
import React from 'react';

const ProjectOverview: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
      <p className="mb-6">
        I designed the landing page for VideoUp, an AI-powered video editing app. My focus was to create a modern, 
        engaging interface aligned with 2025 design trends, optimizing both conversion rates and user experience.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-3">Client</h3>
          <p>
            VideoUp is a startup developing an AI-powered video editing application that aims to revolutionize 
            how content creators and marketers produce and optimize video content for multiple platforms.
          </p>
        </div>
        
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-3">My Role</h3>
          <p>
            Lead UI Designer - Responsible for creating the landing page design strategy, visual identity, 
            and UI elements while collaborating with the marketing and development teams.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-3">Timeline</h3>
          <p>6 weeks (Research, wireframing, design, and handoff)</p>
        </div>
        
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-3">Tools Used</h3>
          <p>Figma, Protopie, Hotjar, Google Analytics</p>
        </div>
        
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-3">Team</h3>
          <p>1 UI Designer, 1 UX Researcher, 2 Front-end Developers, 1 Marketing Specialist</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;

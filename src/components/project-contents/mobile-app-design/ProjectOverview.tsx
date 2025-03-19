
import React from 'react';

const ProjectOverview: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
      <p className="mb-6">
        This project focused on designing user-centric mobile applications for both iOS and Android platforms, 
        showcasing my expertise in cross-platform design principles and platform-specific guidelines.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-3">Client</h3>
          <p>
            Leadtech Group - A leading e-commerce company aiming to expand their mobile presence with 
            a flagship application that would provide a seamless shopping experience across platforms.
          </p>
        </div>
        
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-3">My Role</h3>
          <p>
            Lead UX/UI Designer - Responsible for creating the design strategy, wireframes, prototypes, 
            and final UI designs while collaborating closely with iOS and Android development teams.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-3">Timeline</h3>
          <p>6 months (Full design cycle from research to handoff)</p>
        </div>
        
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-3">Tools Used</h3>
          <p>Figma, Sketch, Principle, UserTesting.com</p>
        </div>
        
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-3">Team</h3>
          <p>1 UX Researcher, 2 UI Designers, 2 iOS Developers, 2 Android Developers</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;

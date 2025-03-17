
import React from 'react';
import { Badge } from '../../ui/badge';

const ProjectOverview: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
      
      <div className="flex flex-wrap gap-2 mb-6">
        <Badge variant="outline" className="text-xs font-medium bg-primary/10 text-primary">
          Data Visualization
        </Badge>
        <Badge variant="outline" className="text-xs font-medium bg-primary/10 text-primary">
          Dashboard Design
        </Badge>
        <Badge variant="outline" className="text-xs font-medium bg-primary/10 text-primary">
          UX Research
        </Badge>
        <Badge variant="outline" className="text-xs font-medium bg-primary/10 text-primary">
          User Testing
        </Badge>
      </div>
      
      <p className="text-lg mb-8">
        As a Senior Product Designer at Leadtech Group, I took on the challenge of developing intuitive 
        dashboards and data visualizations that would not only present complex information in an 
        easily digestible format but also empower stakeholders to make better-informed decisions.
        The project resulted in a 20% increase in stakeholder engagement and significantly improved 
        the decision-making process across departments.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="p-6 rounded-lg bg-muted/30">
          <h3 className="text-lg font-bold mb-2">Duration</h3>
          <p>3 months</p>
        </div>
        
        <div className="p-6 rounded-lg bg-muted/30">
          <h3 className="text-lg font-bold mb-2">My Role</h3>
          <p>Lead Product Designer</p>
        </div>
        
        <div className="p-6 rounded-lg bg-muted/30">
          <h3 className="text-lg font-bold mb-2">Team</h3>
          <p>2 UX Designers, 1 Data Analyst, 3 Developers</p>
        </div>
      </div>
    </>
  );
};

export default ProjectOverview;


import React from 'react';

const AwardsSection: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-display font-bold">Awards</h3>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span>1:2 BA Graphic design</span>
          <span className="text-sm text-muted-foreground">Sheffield Hallam University (UK)</span>
        </div>
        <div className="flex justify-between items-center">
          <span>1st FD Graphic Design</span>
          <span className="text-sm text-muted-foreground">2007-08, Norton College, Sheffield (UK)</span>
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;

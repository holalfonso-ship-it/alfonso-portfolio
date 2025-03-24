
import React from 'react';
import { technicalSkills } from './AboutData';

export const TechnicalSkillsDisplay: React.FC = () => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Tools:</h3>
          <p>{technicalSkills.tools.join(', ')}</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Methodologies:</h3>
          <p>{technicalSkills.methodologies.join(', ')}</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">UI/UX Design:</h3>
          <p>{technicalSkills.uiUxDesign.join(', ')}</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Branding & Marketing:</h3>
          <p>{technicalSkills.brandingMarketing.join(', ')}</p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Data Analysis:</h3>
          <p>{technicalSkills.dataAnalysis.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkillsDisplay;

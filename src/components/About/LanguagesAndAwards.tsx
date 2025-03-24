
import React from 'react';
import { languageSkills, awards } from './AboutData';

export const LanguagesAndAwards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-3xl font-bold mb-6">Languages</h2>
        <div className="space-y-4">
          {languageSkills.map((lang, index) => (
            <div key={index}>
              <p className="font-medium">{lang.certification || lang.level}</p>
              <p className="text-muted-foreground">{lang.institution}</p>
              <p className="text-sm">{lang.organization}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-3xl font-bold mb-6">Awards</h2>
        <div className="space-y-4">
          {awards.map((award, index) => (
            <div key={index}>
              <p className="font-medium">{award.title}</p>
              {award.period && <p className="text-muted-foreground">{award.period}</p>}
              <p className="text-sm">{award.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguagesAndAwards;

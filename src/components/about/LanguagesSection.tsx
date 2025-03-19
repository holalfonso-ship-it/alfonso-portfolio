
import React from 'react';

const LanguagesSection: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-display font-bold">Languages</h3>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span>First Certificate in English</span>
          <span className="text-sm text-muted-foreground">Sheffield College, UK</span>
        </div>
        <div className="flex justify-between items-center">
          <span>English - intermediate level, PET</span>
          <span className="text-sm text-muted-foreground">British Council</span>
        </div>
      </div>
    </div>
  );
};

export default LanguagesSection;

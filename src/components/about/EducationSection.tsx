
import React from 'react';

const EducationSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-display font-bold">Education</h3>
      
      <div className="space-y-8">
        {/* DesignOps Course */}
        <div className="p-6 rounded-xl border border-border bg-card/50">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-2">
            <div>
              <h4 className="text-lg font-semibold">DesignOps Course</h4>
              <p className="text-primary">Elisava</p>
            </div>
            <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
              <p>Feb 2024 - March 2024</p>
              <p>Barcelona, Spain</p>
            </div>
          </div>
        </div>
        
        {/* Postgraduate in UX Design */}
        <div className="p-6 rounded-xl border border-border bg-card/50">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-2">
            <div>
              <h4 className="text-lg font-semibold">Postgraduate in User Experience (UX) Design</h4>
              <p className="text-primary">UOC</p>
            </div>
            <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
              <p>2017 - 2018</p>
              <p>Barcelona, Spain</p>
            </div>
          </div>
        </div>
        
        {/* BA - Graphic Designer */}
        <div className="p-6 rounded-xl border border-border bg-card/50">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-2">
            <div>
              <h4 className="text-lg font-semibold">BA - Graphic Designer</h4>
              <p className="text-primary">Sheffield Hallam University</p>
              <p className="text-sm text-muted-foreground mt-1">Typography - Advertising - Design - Art</p>
            </div>
            <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
              <p>2007 - 2008</p>
              <p>Sheffield, UK</p>
            </div>
          </div>
        </div>
        
        {/* Foundation Degree Design */}
        <div className="p-6 rounded-xl border border-border bg-card/50">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-2">
            <div>
              <h4 className="text-lg font-semibold">Foundation Degree Design</h4>
              <p className="text-primary">Sheffield Hallam University</p>
              <p className="text-sm text-muted-foreground mt-1">Typography - Design - Art - Fundamentals</p>
            </div>
            <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
              <p>2005 - 2007</p>
              <p>Sheffield, UK</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;

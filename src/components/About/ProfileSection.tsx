
import React from 'react';

const ProfileSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-8 bg-muted/30">
        <img
          src="/lovable-uploads/0a0a94d9-f1e2-4ef9-a47d-cf7eca6196c1.png"
          alt="Professional headshot"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="space-y-4">
        <h3 className="text-2xl font-bold font-display">Professional Profile</h3>
        <p className="text-muted-foreground">
          Digital product designer with extensive experience in DesignOps
          and Product design. Specialized in optimizing workflows,
          improving collaboration, and enhancing efficiency within design
          teams. Expert in Figma, Sketch, Zeplin, and Abstract, with an agile
          mindset through SCRUM methodologies and tools like
          Jira/Confluence.
        </p>
      </div>
    </div>
  );
};

export default ProfileSection;

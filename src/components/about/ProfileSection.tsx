
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const ProfileSection: React.FC = () => {
  return (
    <div className="space-y-4">
      <Avatar className="w-24 h-24 border-2 border-primary/20">
        <AvatarImage src="/lovable-uploads/063b06b8-b62f-4ed1-8024-2dd44c1f971b.png" alt="Profile" />
        <AvatarFallback>AL</AvatarFallback>
      </Avatar>
      
      <div>
        <h3 className="text-xl font-display font-bold">Professional Profile</h3>
        <p className="text-muted-foreground mt-2">
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

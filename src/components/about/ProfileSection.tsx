
import React from 'react';
import { ArrowDownCircle, BookOpen, Zap, Palette, Code, LineChart } from 'lucide-react';
import { Button } from '../ui/button';

const ProfileSection: React.FC = () => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-md border border-border/50 hover:border-primary/20 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-5 flex items-center">
        <BookOpen className="mr-2 h-5 w-5 text-primary" />
        Professional Profile
      </h3>
      
      <div className="relative">
        <div className="absolute -left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/80 to-primary/20"></div>
        <p className="text-muted-foreground mb-6 pl-4">
          Digital product designer with extensive experience in DesignOps
          and Product design. Specialized in optimizing workflows,
          improving collaboration, and enhancing efficiency within design
          teams. Expert in Figma, Sketch, Zeplin, and Abstract, with an agile
          mindset through SCRUM methodologies and tools like
          Jira/Confluence.
        </p>
      </div>
      
      <div className="mt-8">
        <h4 className="font-semibold mb-4 flex items-center text-lg">
          <Zap className="mr-2 h-5 w-5 text-primary" />
          Core Competencies
        </h4>
        
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-3 hover:bg-muted/80 transition-colors">
            <Palette className="h-4 w-4 text-primary" />
            <span className="text-sm">UI/UX Design</span>
          </div>
          <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-3 hover:bg-muted/80 transition-colors">
            <Code className="h-4 w-4 text-primary" />
            <span className="text-sm">Design Systems</span>
          </div>
          <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-3 hover:bg-muted/80 transition-colors">
            <LineChart className="h-4 w-4 text-primary" />
            <span className="text-sm">Data Analysis</span>
          </div>
          <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-3 hover:bg-muted/80 transition-colors">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm">DesignOps</span>
          </div>
        </div>
        
        <ul className="space-y-3 text-muted-foreground mb-8">
          <li className="flex items-start">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
            <span>Creation and maintenance of Design Systems</span>
          </li>
          <li className="flex items-start">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
            <span>Digital product design and growth strategies</span>
          </li>
          <li className="flex items-start">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
            <span>Automation and process optimization within design teams</span>
          </li>
          <li className="flex items-start">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
            <span>Evaluation of success metrics and optimization</span>
          </li>
          <li className="flex items-start">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
            <span>Branding and graphic design</span>
          </li>
        </ul>
        
        <Button className="w-full group" onClick={() => window.open('/alfonso-cv.pdf', '_blank')}>
          <ArrowDownCircle className="mr-2 h-4 w-4 group-hover:animate-bounce" />
          Download Full CV
        </Button>
      </div>
    </div>
  );
};

export default ProfileSection;

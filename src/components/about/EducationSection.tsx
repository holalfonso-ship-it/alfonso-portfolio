
import React from 'react';
import { GraduationCap } from 'lucide-react';

type Education = {
  title: string;
  period: string;
  location: string;
  details?: string;
  level: number;
};

const educationItems: Education[] = [
  {
    title: "DesignOps Course, Elisava",
    period: "Feb 2024 - March 2024",
    location: "Barcelona, Spain",
    level: 1
  },
  {
    title: "Postgraduate in User Experience (UX) Design, UOC",
    period: "2017 - 2018",
    location: "Barcelona, Spain",
    level: 2
  },
  {
    title: "Sheffield Hallam University, BA - Graphic Designer",
    period: "2007 - 2008",
    location: "Sheffield, UK",
    details: "Typography - Advertising - Design - Art",
    level: 3
  },
  {
    title: "Sheffield Hallam University, Foundation Degree Design",
    period: "2005 - 2007",
    location: "Sheffield, UK",
    details: "Typography - Design - Art - Fundamentals",
    level: 4
  }
];

const EducationSection: React.FC = () => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-md border border-border/50 hover:border-primary/20 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-5 flex items-center">
        <GraduationCap className="mr-2 h-5 w-5 text-primary" />
        Education
      </h3>
      
      <div className="space-y-6">
        {educationItems.map((item) => (
          <div key={item.title} className={`relative pl-5 border-l border-primary/${60 - (item.level - 1) * 10}`}>
            <div className={`absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary/${70 - (item.level - 1) * 10}`}></div>
            <h4 className="font-medium">{item.title}</h4>
            <p className="text-xs text-muted-foreground">{item.period}, {item.location}</p>
            {item.details && <p className="text-xs text-muted-foreground/70 mt-1">{item.details}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;

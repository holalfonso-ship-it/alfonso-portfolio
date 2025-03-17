
import React from 'react';
import { Briefcase } from 'lucide-react';

type ExperienceItem = {
  company: string;
  position: string;
  period: string;
  location: string;
  isCurrent: boolean;
  responsibilities: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: "Leadtech group",
    position: "Senior Product Designer / DesignOPS",
    period: "Oct. 2018 - Present",
    location: "Barcelona",
    isCurrent: true,
    responsibilities: [
      "Implemented and optimized DesignOps processes to enhance team collaboration and efficiency",
      "Created and maintained the Design System, ensuring visual consistency and scalability",
      "Reduced data load times by 15% and improved visual consistency by 25%",
      "Developed dashboards and data visualizations, increasing stakeholder engagement by 20%"
    ]
  },
  {
    company: "Natevoo",
    position: "Senior UX Designer",
    period: "Jun. 2018 - Oct. 2018",
    location: "Barcelona - 5 mos",
    isCurrent: false,
    responsibilities: [
      "Conceptualized and designed digital products focused on user experience",
      "Applied UX research methodologies to validate solutions and improve usability"
    ]
  },
  {
    company: "Wanup",
    position: "Senior Product Designer",
    period: "Aug. 2016 - Jun. 2018",
    location: "Barcelona - 1 yr 11 mos",
    isCurrent: false,
    responsibilities: [
      "Art direction for digital and offline projects",
      "Designed user experiences for e-commerce and SaSS platform",
      "Managed a team of 4 designers to ensure brand identity alignment"
    ]
  },
  {
    company: "PIMPAM Estudio",
    position: "Senior Designer",
    period: "Mar. 2011 - Aug. 2016",
    location: "Valencia - 5 yrs 6 mos",
    isCurrent: false,
    responsibilities: [
      "Developed applications with Digital Publishing Suite and designed print publications",
      "Notable clients: Adidas, Amnesia, Gandia Blasco, among others"
    ]
  }
];

const ExperienceItem: React.FC<{ experience: ExperienceItem; isLast: boolean }> = ({ experience, isLast }) => {
  const { company, position, period, location, isCurrent, responsibilities } = experience;
  
  return (
    <div className="relative">
      {!isLast && (
        <div className={`absolute -left-3 top-0 h-full w-0.5 ${isCurrent ? 'bg-primary/50' : 'bg-muted/70'}`}></div>
      )}
      <div className={`absolute -left-5 top-0 h-6 w-6 rounded-full bg-card border-2 ${isCurrent ? 'border-primary' : 'border-muted/70'} flex items-center justify-center`}>
        <div className={`h-2 w-2 ${isCurrent ? 'bg-primary' : 'bg-muted/70'} rounded-full`}></div>
      </div>
      
      <div className="pl-6">
        <div className="flex flex-wrap justify-between items-start mb-2">
          <h4 className="font-semibold text-lg">{company}</h4>
          {isCurrent && (
            <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Current</span>
          )}
        </div>
        <p className="text-sm text-primary font-medium">{position}</p>
        <p className="text-xs text-muted-foreground mb-3">{period}, {location}</p>
        
        <ul className="mt-4 space-y-2">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="flex gap-2 items-start text-sm text-muted-foreground">
              <div className={`h-1.5 w-1.5 rounded-full ${isCurrent ? 'bg-primary' : 'bg-muted/70'} mt-2`}></div>
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  return (
    <div className="bg-card rounded-xl p-8 shadow-md border border-border/50 hover:border-primary/20 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-8 flex items-center">
        <Briefcase className="mr-2 h-5 w-5 text-primary" />
        Experience
      </h3>
      
      <div className="space-y-10">
        {experiences.map((experience, index) => (
          <ExperienceItem 
            key={experience.company} 
            experience={experience} 
            isLast={index === experiences.length - 1} 
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;

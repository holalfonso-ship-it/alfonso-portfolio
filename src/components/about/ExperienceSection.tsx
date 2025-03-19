
import React from 'react';
import { Badge } from '@/components/ui/badge';

const ExperienceSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-display font-bold">Experience</h3>
      
      <div className="space-y-8">
        {/* Leadtech group */}
        <div className="p-6 rounded-xl border border-border bg-card/50">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
            <div>
              <h4 className="text-lg font-semibold">Senior Product Designer / DesignOPS</h4>
              <p className="text-primary">Leadtech group</p>
            </div>
            <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
              <p>Oct. 2018 - Present</p>
              <p>Barcelona</p>
            </div>
          </div>
          
          <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
            <li>Implemented and optimized DesignOps processes to enhance team collaboration and efficiency.</li>
            <li>Created and maintained the Design System, ensuring visual consistency and scalability.</li>
            <li>Designed digital experiences for different stages of the customer journey, focusing on iOS and Android apps.</li>
            <li>Reduced data load times by 15% and improved visual consistency by 25%.</li>
            <li>Developed dashboards and data visualizations, increasing stakeholder engagement by 20%.</li>
            <li>Applied quantitative and qualitative data analysis to measure and enhance user experience.</li>
          </ul>
        </div>
        
        {/* Natevoo */}
        <div className="p-6 rounded-xl border border-border bg-card/50">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
            <div>
              <h4 className="text-lg font-semibold">Senior UX Designer</h4>
              <p className="text-primary">Natevoo</p>
            </div>
            <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
              <p>Jun. 2018 - Oct. 2018</p>
              <p>Barcelona - 5 mos</p>
            </div>
          </div>
          
          <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
            <li>Conceptualized and designed digital products focused on user experience.</li>
            <li>Applied UX research methodologies to validate solutions and improve usability.</li>
          </ul>
        </div>
        
        {/* Wanup */}
        <div className="p-6 rounded-xl border border-border bg-card/50">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
            <div>
              <h4 className="text-lg font-semibold">Senior Product Designer</h4>
              <p className="text-primary">Wanup</p>
            </div>
            <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
              <p>Aug. 2016 - Jun. 2018</p>
              <p>Barcelona - 1 yrs 11 mos</p>
            </div>
          </div>
          
          <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
            <li>Art direction for digital and offline projects.</li>
            <li>Designed user experiences for e-commerce and SaSS platform marketing materials.</li>
            <li>Managed a team of 4 designers to ensure brand identity alignment.</li>
          </ul>
        </div>
        
        {/* PIMPAM Estudio */}
        <div className="p-6 rounded-xl border border-border bg-card/50">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
            <div>
              <h4 className="text-lg font-semibold">Senior Designer</h4>
              <p className="text-primary">PIMPAM Estudio</p>
            </div>
            <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
              <p>Mar. 2011 - Aug. 2016</p>
              <p>Valencia - 5 yrs 6 mos</p>
            </div>
          </div>
          
          <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
            <li>Developed applications with Digital Publishing Suite and designed print publications.</li>
            <li>Notable clients: Adidas, Amnesia, Gandia Blasco, among others.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;

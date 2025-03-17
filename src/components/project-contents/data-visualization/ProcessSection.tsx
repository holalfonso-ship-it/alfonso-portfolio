import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { AspectRatio } from '../../ui/aspect-ratio';
import { LineChart, Users, Search, Presentation, Monitor, BarChart } from 'lucide-react';
const ProcessSection: React.FC = () => {
  return <>
      <h2 className="text-3xl font-bold mb-6">Process</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">20% Increase</h3>
              <p className="text-muted-foreground">in stakeholder engagement</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <LineChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">30% Reduction</h3>
              <p className="text-muted-foreground">in data interpretation time</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">75% Adoption</h3>
              <p className="text-muted-foreground">across departments</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="relative pl-8 border-l border-primary/30 space-y-8 mb-12">
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">1</div>
          </div>
          <h3 className="text-xl font-bold mb-3">Stakeholder Interviews & Data Audit</h3>
          <p>
            We began with comprehensive interviews across departments to understand how data was being used 
            and what insights were most valuable. Simultaneously, we conducted a thorough audit of existing data 
            sources, types, and quality to identify opportunities and limitations.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">2</div>
          </div>
          <h3 className="text-xl font-bold mb-3">User Research & Persona Development</h3>
          <p>
            We identified key user types and created detailed personas based on their data needs, technical 
            proficiency, and decision-making responsibilities. This helped us tailor the visualization approach 
            to different user groups while maintaining a cohesive design system.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">3</div>
          </div>
          <h3 className="text-xl font-bold mb-3">Information Architecture & Data Mapping</h3>
          <p>
            We created a comprehensive data model that mapped relationships between different data points and 
            established a clear information hierarchy. This became the foundation for designing intuitive 
            navigation between different levels of data granularity.
          </p>
        </div>
        
        <div className="my-8">
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
            <img alt="Data Visualization Information Architecture" src="/lovable-uploads/a34955f1-1c9a-4745-b402-a31f0beb6f83.png" className="w-full h-full object-scale-down" />
          </AspectRatio>
          <p className="text-sm text-muted-foreground mt-2 text-center">
            Information architecture mapping showing data relationships and visualization patterns
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">4</div>
          </div>
          <h3 className="text-xl font-bold mb-3">Prototype Development & Testing</h3>
          <p>
            We created interactive prototypes of dashboard layouts and visualization types, then conducted 
            usability testing with representative users. This iterative process helped refine the designs 
            based on real user feedback and behavior.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">5</div>
          </div>
          <h3 className="text-xl font-bold mb-3">Implementation & Deployment</h3>
          <p>
            Working closely with the development team, we implemented the designs in phases, starting with 
            core dashboards and gradually adding more specialized visualizations. We established a feedback 
            loop for continuous improvement based on actual usage data.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="overflow-hidden">
          <div className="p-6 bg-muted/30">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <Search className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Research Findings</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Users needed both overview and detailed views</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Color coding improved data recognition by 45%</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Interactive filtering was highly valued by 87% of users</span>
              </li>
            </ul>
          </div>
        </Card>
        
        <Card className="overflow-hidden">
          <div className="p-6 bg-muted/30">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <Presentation className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Design Principles</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Focus on clarity and minimizing cognitive load</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Progressive disclosure of complex information</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Consistent visual language across all visualizations</span>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </>;
};
export default ProcessSection;
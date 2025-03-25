import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { AspectRatio } from '../../ui/aspect-ratio';
import { ArrowRight, Clock, CheckCheck, Users, Workflow, Share } from 'lucide-react';
const ProcessSection: React.FC = () => {
  return <>
      <h2 className="text-3xl font-bold mb-6">Process</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">40% Reduction</h3>
              <p className="text-muted-foreground">in handoff time</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Enhanced</h3>
              <p className="text-muted-foreground">team collaboration</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <CheckCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Improved</h3>
              <p className="text-muted-foreground">design efficiency</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="relative pl-8 border-l border-primary/30 space-y-8 mb-12">
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">1</div>
          </div>
          <h3 className="text-xl font-bold mb-3">Research and Analysis</h3>
          <p>
            I conducted interviews with designers, developers, and product managers to identify pain points 
            in the existing workflow. I also performed a competitive analysis of DesignOps practices at similar 
            organizations to establish benchmarks and identify best practices.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">2</div>
          </div>
          <h3 className="text-xl font-bold mb-3">Workflow Mapping</h3>
          <p>
            We mapped the entire design process from concept to implementation, identifying bottlenecks 
            and opportunities for optimization. This exercise helped visualize the end-to-end flow and 
            highlight areas for improvement.
          </p>
        </div>
        
        <div className="my-8">
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
            <img alt="DesignOps Workflow Diagram" src="/lovable-uploads/66fb836a-69d5-4b32-a171-1ab35fbb706e.png" className="w-full h-full object-scale-down" />
          </AspectRatio>
          <p className="text-sm text-muted-foreground mt-2 text-center">
            Detailed workflow diagram showing the design-to-development process
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">3</div>
          </div>
          <h3 className="text-xl font-bold mb-3">Tool Evaluation and Integration</h3>
          <p>
            After evaluating various design tools and collaboration platforms, we selected and integrated 
            a stack that would best support our workflow needs while minimizing tool switching and context shifts.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">4</div>
          </div>
          <h3 className="text-xl font-bold mb-3">Framework Development</h3>
          <p>
            Based on our research and workflow mapping, I developed a comprehensive DesignOps framework 
            tailored to our organization's needs, including documentation, templates, and guidelines.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">5</div>
          </div>
          <h3 className="text-xl font-bold mb-3">Training and Implementation</h3>
          <p>
            We rolled out the new processes through a series of workshops and training sessions, 
            with a phased approach to ensure teams could adapt gradually.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <AspectRatio ratio={4 / 3} className="bg-muted rounded-lg overflow-hidden mb-4">
            <img src="/lovable-uploads/063b06b8-b62f-4ed1-8024-2dd44c1f971b.png" alt="DesignOps Workflow Implementation" className="object-cover w-full h-full" />
          </AspectRatio>
          <p className="text-sm text-muted-foreground">DesignOps Framework Implementation</p>
        </div>
        <div>
          <AspectRatio ratio={4 / 3} className="bg-muted rounded-lg overflow-hidden mb-4">
            <img src="https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef0b2c3c8362baef07ebb_designops.jpg" alt="Design Team Collaboration" className="object-cover w-full h-full" />
          </AspectRatio>
          <p className="text-sm text-muted-foreground">Enhanced Team Collaboration Workflow</p>
        </div>
      </div>
    </>;
};
export default ProcessSection;
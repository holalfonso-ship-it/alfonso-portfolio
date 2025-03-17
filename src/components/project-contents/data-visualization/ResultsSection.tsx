
import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { AspectRatio } from '../../ui/aspect-ratio';
import { TrendingUp, Clock, Users, BarChart3 } from 'lucide-react';

const ResultsSection: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Results</h2>
      
      <p className="text-lg mb-8">
        The implemented data visualization system transformed how the organization interacted with data, 
        leading to several measurable improvements in stakeholder engagement, decision-making efficiency, 
        and overall data literacy across departments.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">20% Increase in Engagement</h3>
                <p className="text-muted-foreground">
                  Stakeholders now spend 20% more time interacting with data dashboards, 
                  indicating greater value and usability of the visualization system.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">30% Reduction in Analysis Time</h3>
                <p className="text-muted-foreground">
                  Time spent analyzing and interpreting data decreased by 30%, allowing 
                  stakeholders to move from insight to action more quickly.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">75% Adoption Rate</h3>
                <p className="text-muted-foreground">
                  Three-quarters of potential users across departments now regularly use 
                  the data visualization tools, up from 40% with the previous system.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-primary/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">15% Better Decision Outcomes</h3>
                <p className="text-muted-foreground">
                  Post-implementation analysis showed that decisions made with the new 
                  visualization system led to 15% better outcomes based on key performance metrics.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-muted/30 p-6 rounded-lg mb-12">
        <blockquote className="text-xl italic border-l-4 border-primary pl-4 mb-4">
          "The new data visualization system has transformed how we understand our business. 
          What used to take hours of analysis can now be understood at a glance, allowing us to 
          make better decisions faster."
        </blockquote>
        <p className="font-medium">— Director of Operations, Leadtech Group</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <AspectRatio ratio={16/9} className="bg-muted rounded-lg overflow-hidden mb-4">
            <img 
              src="/lovable-uploads/b3fb73d0-b03b-495d-81d7-fb908ec0b8e6.png" 
              alt="Interactive Dashboard" 
              className="w-full h-full object-cover"
            />
          </AspectRatio>
          <p className="text-sm text-muted-foreground">Interactive dashboard showing key performance metrics</p>
        </div>
        <div>
          <AspectRatio ratio={16/9} className="bg-muted rounded-lg overflow-hidden mb-4">
            <img 
              src="/lovable-uploads/b3fb73d0-b03b-495d-81d7-fb908ec0b8e6.png" 
              alt="Data Relationship Visualization" 
              className="w-full h-full object-cover"
            />
          </AspectRatio>
          <p className="text-sm text-muted-foreground">Visualization of complex data relationships</p>
        </div>
      </div>
    </>
  );
};

export default ResultsSection;

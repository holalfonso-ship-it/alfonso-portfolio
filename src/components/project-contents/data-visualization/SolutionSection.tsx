
import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { AspectRatio } from '../../ui/aspect-ratio';
import { BarChart, PieChart, LineChart, AreaChart } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">The Solution</h2>
      
      <p className="text-lg mb-8">
        We developed a comprehensive data visualization system that transformed complex data into 
        intuitive, actionable insights. Our solution included a suite of customizable dashboards 
        with a unified design language, clear information hierarchy, and thoughtful use of data 
        visualization principles.
      </p>
      
      <div className="aspect-video w-full rounded-lg overflow-hidden mb-8">
        <img 
          src="/lovable-uploads/b3fb73d0-b03b-495d-81d7-fb908ec0b8e6.png" 
          alt="Data Visualization Concept Map" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <p className="text-sm text-muted-foreground text-center mb-12">
        Concept map showing the interconnected nature of data insights across the platform
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="bg-primary/10 p-4 rounded-full">
                <BarChart className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Role-Based Dashboards</h3>
                <p className="text-muted-foreground">
                  Customized dashboards for different roles and departments, with relevant metrics and visualization types.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="bg-primary/10 p-4 rounded-full">
                <PieChart className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Interactive Exploration</h3>
                <p className="text-muted-foreground">
                  Interactive elements allowing users to drill down into data for deeper insights and analysis.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="bg-primary/10 p-4 rounded-full">
                <LineChart className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Trend Analysis</h3>
                <p className="text-muted-foreground">
                  Time-series visualizations that highlight patterns, trends, and anomalies in the data.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="bg-primary/10 p-4 rounded-full">
                <AreaChart className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Unified Design Language</h3>
                <p className="text-muted-foreground">
                  Consistent visual elements, colors, and interactions to enhance learnability and usability.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default SolutionSection;

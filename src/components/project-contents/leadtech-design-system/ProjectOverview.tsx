
import React from 'react';
import { Clock, Users, CheckCheck } from 'lucide-react';
import { Card, CardContent } from '../../ui/card';

export const ProjectOverview: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
      <p className="text-lg mb-8">
        As a Senior Product Designer at Leadtech Group, I led the creation and maintenance of a comprehensive design system. 
        This initiative was crucial for ensuring visual consistency across multiple products and increasing development efficiency.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">30% Increase</h3>
              <p className="text-muted-foreground">in development efficiency</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Consistent UI</h3>
              <p className="text-muted-foreground">across all Leadtech products</p>
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
              <p className="text-muted-foreground">cross-team collaboration</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};


import React from 'react';
import { Clock, Users, CheckCheck } from 'lucide-react';
import { Card, CardContent } from '../../ui/card';

const ProjectOverview: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
      <p className="text-lg mb-8">
        As a Senior Product Designer specialized in DesignOps at Leadtech Group, I developed a comprehensive 
        framework to improve collaboration between design, development, and product teams. This initiative 
        was crucial for our organization which had been experiencing communication silos and inefficiencies 
        in project delivery.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">35% Reduction</h3>
              <p className="text-muted-foreground">in project delivery time</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">40% Improvement</h3>
              <p className="text-muted-foreground">in cross-team collaboration</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <CheckCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">28% Decrease</h3>
              <p className="text-muted-foreground">in revision cycles</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ProjectOverview;

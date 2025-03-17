
import React from 'react';
import { Card } from '../../ui/card';
import { Lightbulb, RefreshCw, Users } from 'lucide-react';

const LearningsSection: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Key Learnings</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card className="p-6">
          <div className="flex flex-col gap-4">
            <div className="bg-primary/10 p-3 rounded-full w-fit">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Data Context is Critical</h3>
            <p className="text-muted-foreground">
              We learned that even the most beautiful visualization fails without proper context. 
              Providing clear labels, legends, and supporting information was essential for user understanding.
            </p>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex flex-col gap-4">
            <div className="bg-primary/10 p-3 rounded-full w-fit">
              <RefreshCw className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Iterative Testing Pays Off</h3>
            <p className="text-muted-foreground">
              Our approach of continuous testing and refinement led to significant improvements 
              in usability. Early assumptions were often incorrect, highlighting the importance 
              of user validation.
            </p>
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="flex flex-col gap-4">
            <div className="bg-primary/10 p-3 rounded-full w-fit">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">User Training is Essential</h3>
            <p className="text-muted-foreground">
              Even with intuitive design, proper onboarding and training were necessary to achieve 
              full adoption. Investing in user education significantly improved engagement and usage.
            </p>
          </div>
        </Card>
      </div>
      
      <div className="bg-primary/5 p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Future Opportunities</h3>
        <ul className="space-y-4">
          <li className="flex gap-3">
            <span className="text-primary font-bold text-xl">•</span>
            <div>
              <p className="font-medium">Predictive analytics integration</p>
              <p className="text-muted-foreground">
                Incorporating machine learning models to provide predictive insights alongside historical data
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold text-xl">•</span>
            <div>
              <p className="font-medium">Mobile-optimized dashboards</p>
              <p className="text-muted-foreground">
                Creating fully responsive versions for on-the-go access to critical data points
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold text-xl">•</span>
            <div>
              <p className="font-medium">Cross-departmental data integration</p>
              <p className="text-muted-foreground">
                Expanding the system to better visualize relationships between data from different departments
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LearningsSection;

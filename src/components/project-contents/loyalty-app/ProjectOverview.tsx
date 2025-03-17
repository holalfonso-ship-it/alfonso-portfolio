
import React from 'react';
import { 
  Smartphone, 
  ShoppingBag, 
  Users 
} from 'lucide-react';
import { Card, CardContent } from '../../ui/card';
import { AspectRatio } from '../../ui/aspect-ratio';

export const ProjectOverview: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
      <p className="text-lg mb-8">
        As a Senior Product Designer at Wanup, I led the redesign of their loyalty app experience, 
        focusing on improving user engagement and conversion rates. The project involved creating a 
        seamless experience across multiple platforms while ensuring it aligned with the brand's 
        identity and business goals.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">25% Increase</h3>
              <p className="text-muted-foreground">in user engagement</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">15% Improvement</h3>
              <p className="text-muted-foreground">in conversion rates</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Enhanced UX</h3>
              <p className="text-muted-foreground">across all touchpoints</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-6">Challenge</h2>
      <p className="mb-4">
        Wanup faced several challenges with their existing e-commerce and loyalty platform:
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Complex user journey leading to high drop-off rates</li>
        <li>Lack of personalization features to drive engagement</li>
        <li>Inconsistent user experience across devices</li>
        <li>Limited visibility of loyalty benefits and rewards</li>
        <li>Outdated design that didn't reflect the brand's premium positioning</li>
      </ul>

      <div className="mb-12">
        <AspectRatio ratio={16/9} className="bg-muted rounded-lg overflow-hidden">
          <img 
            src="/lovable-uploads/304f003e-df34-4217-85fd-3591e8869fa2.png" 
            alt="Wanup Loyalty App" 
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        <p className="text-sm text-muted-foreground mt-2 text-center">
          The redesigned Wanup loyalty app focusing on user engagement
        </p>
      </div>
    </>
  );
};

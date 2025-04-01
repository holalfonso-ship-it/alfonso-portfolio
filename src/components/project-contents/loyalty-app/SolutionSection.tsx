
import React from 'react';
import { 
  Smartphone, 
  Users, 
  ShoppingBag 
} from 'lucide-react';
import { AspectRatio } from '../../ui/aspect-ratio';

export const SolutionSection: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Solution</h2>
      <p className="mb-6">
        I developed a comprehensive redesign strategy for the B2B SaaS platform that addressed key client pain points while 
        aligning with business objectives:
      </p>

      <div className="space-y-8 mb-12">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-primary/10 p-4 rounded-full shrink-0">
            <Smartphone className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Enterprise-grade Interface</h3>
            <p>
              Redesigned the webapp interface with a focus on B2B functionality and ease of use. 
              Implemented clear visual hierarchies and intuitive navigation patterns to 
              reduce cognitive load for corporate administrators managing multiple accounts.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-primary/10 p-4 rounded-full shrink-0">
            <Users className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Multi-tenant Experience</h3>
            <p>
              Introduced enterprise-level customization that tailored the SaaS experience based on 
              corporate branding and preferences. Created a recommendation engine that highlighted 
              relevant offers and benefits to different tiers of business clients.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-primary/10 p-4 rounded-full shrink-0">
            <ShoppingBag className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Streamlined B2B Process</h3>
            <p>
              Optimized the corporate booking flow to reduce friction and abandon rates. Implemented a 
              step-by-step process with clear indicators of progress and simplified enterprise management 
              to make the administrative process smoother for B2B clients.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <AspectRatio ratio={4/3} className="bg-muted rounded-lg overflow-hidden mb-4">
            <img 
              src="/lovable-uploads/304f003e-df34-4217-85fd-3591e8869fa2.png" 
              alt="Wanup B2B SaaS UI" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
          <p className="text-sm text-muted-foreground">Enterprise dashboard with improved navigation</p>
        </div>
        <div>
          <AspectRatio ratio={4/3} className="bg-muted rounded-lg overflow-hidden mb-4">
            <img 
              src="/lovable-uploads/304f003e-df34-4217-85fd-3591e8869fa2.png" 
              alt="Wanup B2B Rewards Dashboard" 
              className="object-cover w-full h-full object-top"
            />
          </AspectRatio>
          <p className="text-sm text-muted-foreground">Corporate rewards dashboard showing loyalty benefits</p>
        </div>
      </div>
    </>
  );
};

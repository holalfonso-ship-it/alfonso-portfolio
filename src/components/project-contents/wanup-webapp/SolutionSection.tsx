
import React from 'react';

export const SolutionSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">The Solution</h2>
      
      <p className="mb-8">
        We developed a comprehensive B2B SaaS platform that simplified hotel loyalty program management while 
        providing an engaging experience for end users.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-3">Key Features</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Intuitive dashboard for hotel partners</li>
            <li>Real-time booking management system</li>
            <li>Advanced loyalty point tracking</li>
            <li>Automated reward distribution</li>
            <li>Multi-currency support</li>
          </ul>
        </div>
        
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-3">Technical Solutions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>API integration with multiple booking systems</li>
            <li>Real-time availability updates</li>
            <li>Responsive design for all devices</li>
            <li>Scalable architecture</li>
          </ul>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden border border-border/50">
        <img 
          alt="Wanup Solution Interface" 
          className="w-full h-auto" 
          src="/lovable-uploads/7d9b0008-9150-4021-aadd-00500f40f69d.png"
        />
      </div>
    </div>
  );
};


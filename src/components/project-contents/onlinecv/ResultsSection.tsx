
import React from 'react';

export const ResultsSection: React.FC = () => {
  return (
    <section id="results">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">The Results</h2>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          The redesigned OnlineCV landing page delivered significant improvements across key performance metrics:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div className="bg-muted/10 p-8 rounded-lg border border-muted/20 flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-primary mb-2">+47%</div>
            <h4 className="text-lg font-medium mb-4">Conversion Rate</h4>
            <p className="text-sm text-muted-foreground">Significant increase in visitor-to-signup conversion compared to the previous design.</p>
          </div>
          
          <div className="bg-muted/10 p-8 rounded-lg border border-muted/20 flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-primary mb-2">-28%</div>
            <h4 className="text-lg font-medium mb-4">Bounce Rate</h4>
            <p className="text-sm text-muted-foreground">Substantial reduction in users leaving the page without taking any action.</p>
          </div>
          
          <div className="bg-muted/10 p-8 rounded-lg border border-muted/20 flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-primary mb-2">+52%</div>
            <h4 className="text-lg font-medium mb-4">Mobile Engagement</h4>
            <p className="text-sm text-muted-foreground">Increased time spent and interactions from users on mobile devices.</p>
          </div>
          
          <div className="bg-muted/10 p-8 rounded-lg border border-muted/20 flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-primary mb-2">+33%</div>
            <h4 className="text-lg font-medium mb-4">Feature Adoption</h4>
            <p className="text-sm text-muted-foreground">Higher usage rates of premium features by converted users.</p>
          </div>
        </div>
        
        <p>
          The redesign also received positive qualitative feedback from users and stakeholders, highlighting the improved clarity, visual appeal, and overall user experience. The new design effectively establishes OnlineCV as a premium offering in the resume-building market while maintaining accessibility for users across different demographics.
        </p>
      </div>
    </section>
  );
};

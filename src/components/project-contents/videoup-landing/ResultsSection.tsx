
import React from 'react';

const ResultsSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Results</h2>
      
      <p className="mb-8">
        The new VideoUp landing page design delivered significant improvements in both user engagement and 
        business metrics, exceeding the client's expectations and providing a strong foundation for their 
        product launch.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 text-center">
          <h3 className="text-4xl font-bold text-primary mb-2">42%</h3>
          <p className="text-sm text-muted-foreground">Increase in conversion rate from visitor to trial sign-up</p>
        </div>
        
        <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 text-center">
          <h3 className="text-4xl font-bold text-primary mb-2">37%</h3>
          <p className="text-sm text-muted-foreground">Reduction in bounce rate compared to previous design</p>
        </div>
        
        <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 text-center">
          <h3 className="text-4xl font-bold text-primary mb-2">2:15</h3>
          <p className="text-sm text-muted-foreground">Average increase in time spent on page</p>
        </div>
        
        <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 text-center">
          <h3 className="text-4xl font-bold text-primary mb-2">53%</h3>
          <p className="text-sm text-muted-foreground">More mobile sign-ups than the industry average</p>
        </div>
      </div>
      
      <div className="bg-muted/10 p-6 rounded-lg border border-border/50 mb-8">
        <h3 className="text-xl font-semibold mb-4">Client Feedback</h3>
        <blockquote className="pl-4 border-l-2 border-primary italic">
          "The landing page design perfectly captures the innovative spirit of VideoUp while making our complex 
          AI technology accessible and appealing. The conversion rates have exceeded our projections, and we've 
          received overwhelmingly positive feedback from our users about the design. The mobile-first approach 
          has been particularly impactful for our target demographic."
          <footer className="mt-2 text-sm text-muted-foreground not-italic">
            — Sarah Chen, CMO at VideoUp
          </footer>
        </blockquote>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-4">Additional Outcomes</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            The design system created for the landing page was adopted as the foundation for VideoUp's 
            entire marketing ecosystem, ensuring consistent branding across all touchpoints.
          </li>
          <li>
            Key elements of the landing page design influenced the in-app UI, creating a seamless user 
            experience from marketing to product.
          </li>
          <li>
            The project was featured in a popular design showcase, generating additional industry recognition 
            for both VideoUp and our design approach.
          </li>
          <li>
            The client has retained our services for ongoing optimization and additional product design work 
            based on the success of this project.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResultsSection;

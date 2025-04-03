
import React from 'react';

export const ResultsSection: React.FC = () => {
  return (
    <section id="results">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Results & Impact</h2>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          The redesigned landing page delivered significant improvements across key performance metrics:
        </p>
        
        <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-primary/10 p-6 rounded-lg text-center">
            <h3 className="text-5xl font-bold text-primary mb-2">42%</h3>
            <p className="text-sm">Increase in conversion rate from visitor to free trial</p>
          </div>
          
          <div className="bg-primary/10 p-6 rounded-lg text-center">
            <h3 className="text-5xl font-bold text-primary mb-2">38%</h3>
            <p className="text-sm">Reduction in bounce rate across all devices</p>
          </div>
          
          <div className="bg-primary/10 p-6 rounded-lg text-center">
            <h3 className="text-5xl font-bold text-primary mb-2">27%</h3>
            <p className="text-sm">Increase in average time on page</p>
          </div>
          
          <div className="bg-primary/10 p-6 rounded-lg text-center">
            <h3 className="text-5xl font-bold text-primary mb-2">35%</h3>
            <p className="text-sm">Growth in mobile conversions</p>
          </div>
        </div>
        
        <p>
          Beyond the quantitative metrics, the project delivered several qualitative improvements:
        </p>
        
        <ul className="mt-4 space-y-2">
          <li>Enhanced brand perception and trust, as measured through post-conversion surveys</li>
          <li>Improved user understanding of product features and benefits</li>
          <li>Reduced customer support inquiries related to pricing and features</li>
          <li>Positive feedback from users on the clarity and ease of navigation</li>
          <li>Seamless experience across devices, particularly on mobile platforms</li>
        </ul>
        
        <blockquote className="my-8 border-l-4 border-primary pl-6 italic">
          "The new landing page has transformed our user acquisition process. We're not only seeing more conversions, but the quality of leads has improved significantly, leading to better retention rates."
          <footer className="text-sm mt-2 not-italic">— ResumeCoach Marketing Director</footer>
        </blockquote>
      </div>
    </section>
  );
};

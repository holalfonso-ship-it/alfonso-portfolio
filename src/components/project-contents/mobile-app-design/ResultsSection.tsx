
import React from 'react';

const ResultsSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
      
      <p className="mb-8">
        The cross-platform mobile app design project delivered significant improvements in both user engagement 
        and business metrics, establishing a new standard for the company's mobile experience.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-4">User Experience Improvements</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <span className="font-medium">35% increase in user retention</span> compared to the previous app, 
              with users returning more frequently
            </li>
            <li>
              <span className="font-medium">28% improvement in task completion rate</span> for key shopping flows, 
              resulting in higher conversion
            </li>
            <li>
              <span className="font-medium">42% decrease in support tickets</span> related to UI confusion or 
              usability issues
            </li>
            <li>
              <span className="font-medium">Average app rating improved by 1.5 stars</span> on both App Store and 
              Google Play
            </li>
          </ul>
        </div>
        
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-4">Business Impact</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <span className="font-medium">22% increase in mobile conversion rate</span>, directly attributable 
              to improved checkout flow
            </li>
            <li>
              <span className="font-medium">30% higher average order value</span> through enhanced product 
              discovery and recommendation features
            </li>
            <li>
              <span className="font-medium">40% increase in mobile app revenue</span> within six months of launch
            </li>
            <li>
              <span className="font-medium">15% reduction in development time</span> for new features thanks to 
              the comprehensive design system
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
        <h3 className="text-xl font-semibold mb-4">Recognition & Feedback</h3>
        <div className="space-y-4">
          <blockquote className="italic border-l-4 border-primary pl-4 py-2">
            "The redesigned app perfectly balances our brand identity with native platform experiences. 
            Users love the intuitive navigation and seamless shopping experience regardless of which 
            device they use."
            <footer className="mt-2 text-sm font-medium text-muted-foreground">
              — Director of Digital Products, Leadtech Group
            </footer>
          </blockquote>
          
          <blockquote className="italic border-l-4 border-primary pl-4 py-2">
            "The new design system has significantly streamlined our development process. What used to 
            take weeks now takes days, and the consistency across platforms has eliminated many of the 
            implementation questions we used to struggle with."
            <footer className="mt-2 text-sm font-medium text-muted-foreground">
              — Lead Mobile Developer, Leadtech Group
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;

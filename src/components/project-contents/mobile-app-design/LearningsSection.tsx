
import React from 'react';

const LearningsSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Learnings & Next Steps</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Key Learnings</h3>
          <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <span className="font-medium">Platform-specific expertise is crucial</span> - Understanding the nuances of 
                each platform's design language and interaction patterns is essential for creating authentic experiences.
              </li>
              <li>
                <span className="font-medium">Unified design systems save time</span> - Having a cohesive design system with 
                platform-specific components significantly reduced design and development time for future features.
              </li>
              <li>
                <span className="font-medium">Early collaboration prevents implementation issues</span> - Working closely with 
                both iOS and Android developers from the beginning helped identify potential technical constraints before 
                designs were finalized.
              </li>
              <li>
                <span className="font-medium">User testing on actual devices is irreplaceable</span> - Testing prototypes on 
                physical iOS and Android devices revealed interaction issues that weren't apparent in software simulations.
              </li>
              <li>
                <span className="font-medium">Platform-specific enhancements drive engagement</span> - Features that leveraged 
                unique platform capabilities (like widgets on Android) showed higher engagement than standard features.
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-4">Future Opportunities</h3>
          <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <span className="font-medium">Expand platform-specific features</span> - Further leverage unique capabilities 
                of each platform, such as AR shopping experiences on iOS and deeper Google ecosystem integration on Android.
              </li>
              <li>
                <span className="font-medium">Optimize for tablets and foldables</span> - Adapt the design system to better 
                support larger screens and new form factors like foldable devices.
              </li>
              <li>
                <span className="font-medium">Implement more personalization</span> - Use machine learning to deliver more 
                personalized shopping experiences based on user behavior and preferences.
              </li>
              <li>
                <span className="font-medium">Improve accessibility</span> - Enhance the app's accessibility features to 
                better serve users with disabilities across both platforms.
              </li>
              <li>
                <span className="font-medium">Explore emerging technologies</span> - Investigate opportunities for voice 
                shopping, chatbots, and other emerging technologies that could enhance the mobile shopping experience.
              </li>
            </ul>
          </div>
        </div>
        
        <p className="italic">
          This project has become a blueprint for our cross-platform design approach, setting a new standard for how we 
          create cohesive yet platform-appropriate experiences. The learnings from this project continue to inform our 
          mobile design strategy and have elevated the quality of all our digital products.
        </p>
      </div>
    </div>
  );
};

export default LearningsSection;

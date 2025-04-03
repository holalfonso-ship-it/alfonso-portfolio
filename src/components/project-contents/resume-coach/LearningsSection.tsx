
import React from 'react';

export const LearningsSection: React.FC = () => {
  return (
    <section id="learnings">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Key Learnings</h2>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          This project reinforced several important principles and provided valuable insights:
        </p>
        
        <div className="my-8 space-y-6">
          <div className="bg-muted/20 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Balance Between Conversion and User Experience</h3>
            <p>
              Finding the right balance between marketing messaging and user experience is crucial. 
              The most effective landing pages don't just drive conversions—they provide real value to users through 
              clear information architecture and intuitive design, building trust before the conversion even happens.
            </p>
          </div>
          
          <div className="bg-muted/20 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Data-Informed Design Decisions</h3>
            <p>
              Using analytics and user testing data to inform design decisions led to more effective outcomes. 
              By continuously analyzing user behavior and feedback, we were able to make iterative improvements 
              that significantly enhanced performance metrics.
            </p>
          </div>
          
          <div className="bg-muted/20 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Mobile-First Is Non-Negotiable</h3>
            <p>
              With over 60% of users accessing the site via mobile devices, designing for mobile first was essential. 
              This approach forced prioritization of content and functionality, which ultimately benefited the desktop experience as well.
            </p>
          </div>
          
          <div className="bg-muted/20 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Visual Storytelling</h3>
            <p>
              Using visual elements to tell a story about the product's benefits proved more effective than relying on text alone. 
              The combination of illustrations, screenshots, and subtle animations created a more engaging and memorable user experience.
            </p>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-4">Future Considerations</h3>
        <p>
          If I were to continue working on this project, I would focus on:
        </p>
        
        <ul className="space-y-2 mt-4">
          <li>Implementing personalized content based on user segments or traffic sources</li>
          <li>Expanding A/B testing to further optimize conversion paths</li>
          <li>Developing more interactive elements to demonstrate the product's functionality</li>
          <li>Enhancing accessibility features beyond the current implementation</li>
          <li>Exploring localization options to better serve international markets</li>
        </ul>
      </div>
    </section>
  );
};

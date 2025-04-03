
import React from 'react';

const LearningsSection: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Key Learnings</h2>
      
      <p className="mb-8">
        This project provided valuable insights into effective landing page design for AI-powered tools and 
        the evolving expectations of users in the video editing space. Here are the key learnings from this project:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-3">Visual Storytelling is Critical</h3>
          <p>
            For complex AI tools, visual storytelling proved much more effective than technical explanations. 
            Using before/after examples, animated sequences showing the AI in action, and visual metaphors helped 
            users quickly understand the value proposition without getting lost in technical details.
          </p>
        </div>
        
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-3">Mobile Performance Matters</h3>
          <p>
            Optimizing for mobile wasn't just about responsive layouts—performance was equally important. Working 
            closely with developers to ensure animations and interactions remained smooth on mobile devices significantly 
            improved engagement metrics on smartphones and tablets.
          </p>
        </div>
        
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-3">Strategic Use of Microinteractions</h3>
          <p>
            Small, thoughtful microinteractions at key decision points boosted engagement and guided users through 
            the conversion funnel more effectively than static elements. However, finding the right balance was key—too 
            many animations became distracting rather than helpful.
          </p>
        </div>
        
        <div className="bg-muted/20 p-6 rounded-lg border border-border/50">
          <h3 className="text-xl font-semibold mb-3">A/B Testing Reveals Surprises</h3>
          <p>
            Some of our assumptions about what would convert best were proven wrong through A/B testing. For example, 
            we found that more technical language in certain sections actually increased trust among our target audience, 
            contrary to our initial hypothesis that simpler language would always perform better.
          </p>
        </div>
      </div>
      
      <div className="bg-muted/10 p-6 rounded-lg border border-border/50">
        <h3 className="text-xl font-semibold mb-4">What I Would Do Differently</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Earlier User Testing:</strong> While we conducted user testing on wireframes and the final design, 
            involving users at the very beginning of the conceptual phase would have provided even more valuable insights.
          </li>
          <li>
            <strong>More Personalization:</strong> If doing this project again, I would implement more personalized 
            content paths based on user segments (e.g., professional video editors vs. casual users) to further 
            optimize the conversion funnel for different personas.
          </li>
          <li>
            <strong>Deeper Analytics Integration:</strong> Building more sophisticated analytics tracking into the 
            design from the start would have allowed for more granular optimization post-launch.
          </li>
          <li>
            <strong>Content-First Approach:</strong> While we had a collaborative process with the content team, 
            I would push for finalizing key messaging earlier in the process to better integrate content strategy 
            with visual design.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LearningsSection;

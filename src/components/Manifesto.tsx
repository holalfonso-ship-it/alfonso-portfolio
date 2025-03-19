import React from 'react';
import SectionHeader from './SectionHeader';

const Manifesto: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="My Approach"
          title="Design Philosophy"
          subtitle="The principles that guide my work and my approach to design challenges."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Principle 1: User-Centered Design */}
          <div className="p-6 rounded-lg border border-border/50 shadow-sm bg-card/30 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-3">User-Centered Design</h3>
            <p className="text-muted-foreground">
              I believe that the best designs are those that are deeply rooted in an understanding of the user. 
              By focusing on user needs and behaviors, I create solutions that are not only aesthetically pleasing 
              but also highly functional and effective.
            </p>
          </div>
          
          {/* Principle 2: Simplicity and Clarity */}
          <div className="p-6 rounded-lg border border-border/50 shadow-sm bg-card/30 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-3">Simplicity and Clarity</h3>
            <p className="text-muted-foreground">
              I strive to create designs that are simple, intuitive, and easy to understand. By removing unnecessary 
              complexity, I ensure that users can quickly and easily accomplish their goals.
            </p>
          </div>
          
          {/* Principle 3: Collaboration and Iteration */}
          <div className="p-6 rounded-lg border border-border/50 shadow-sm bg-card/30 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-3">Collaboration and Iteration</h3>
            <p className="text-muted-foreground">
              I believe that the best design solutions are born from collaboration and iteration. By working closely 
              with clients, stakeholders, and other designers, I create solutions that are not only innovative but 
              also aligned with business goals.
            </p>
          </div>
          
          {/* Principle 4: Continuous Learning */}
          <div className="p-6 rounded-lg border border-border/50 shadow-sm bg-card/30 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
            <p className="text-muted-foreground">
              The field of design is constantly evolving, and I am committed to staying up-to-date with the latest 
              trends and technologies. By continuously learning and experimenting, I ensure that my designs are always 
              fresh, innovative, and effective.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;

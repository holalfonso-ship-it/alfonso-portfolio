
import React from 'react';
import AnimatedText from './AnimatedText';
import { Quote, Star, Users, Lightbulb, Book } from 'lucide-react';

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-24 md:py-32 px-6 md:px-12 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="inline-block text-sm md:text-base font-medium tracking-wider mb-4 py-1 px-4 rounded-full bg-primary/10 text-primary">
            Manifesto
          </span>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">
            <AnimatedText text="My Design" className="block mb-2" once />
            <AnimatedText text="Philosophy" className="text-gradient block" once delay={200} />
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="glass rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Quote className="w-5 h-5 text-primary" />
            </div>
            <div className="mt-14">
              <h3 className="text-2xl font-display font-bold mb-4">Simplicity is key</h3>
              <p className="text-muted-foreground mb-4">
                Great design removes the unnecessary and emphasizes the essential, focusing on content and functionality rather than decoration.
              </p>
              <p className="text-muted-foreground">
                In my work, I strive to create interfaces that are intuitive and clear, where every element serves a purpose.
              </p>
            </div>
          </div>
          
          <div className="glass rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Star className="w-5 h-5 text-primary" />
            </div>
            <div className="mt-14">
              <h3 className="text-2xl font-display font-bold mb-4">Data-driven design</h3>
              <p className="text-muted-foreground mb-4">
                I believe in making design decisions based on research, testing, and metrics rather than just aesthetics or personal preferences.
              </p>
              <p className="text-muted-foreground">
                By analyzing user behavior and feedback, we can create products that truly meet user needs and business goals.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div className="mt-14">
              <h3 className="text-2xl font-display font-bold mb-4">Design is a team sport</h3>
              <p className="text-muted-foreground">
                Great products are created through collaboration between designers, developers, product managers, and other stakeholders. I value open communication and cross-functional teamwork.
              </p>
            </div>
          </div>
          
          <div className="glass rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-primary" />
            </div>
            <div className="mt-14">
              <h3 className="text-2xl font-display font-bold mb-4">Efficiency matters</h3>
              <p className="text-muted-foreground">
                Design operations is about creating systems and processes that enable teams to work more efficiently. This includes standardizing workflows, creating reusable components, and automating repetitive tasks.
              </p>
            </div>
          </div>
          
          <div className="glass rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Book className="w-5 h-5 text-primary" />
            </div>
            <div className="mt-14">
              <h3 className="text-2xl font-display font-bold mb-4">Always learning</h3>
              <p className="text-muted-foreground">
                The design field evolves rapidly, and I am committed to continuous learning and improvement. I stay updated with the latest trends, tools, and methodologies in design and technology.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <a 
            href="#about" 
            className="inline-flex items-center gap-2 text-primary hover:underline transition-all"
          >
            Learn more about my approach
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;

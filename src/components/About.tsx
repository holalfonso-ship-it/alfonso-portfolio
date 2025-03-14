
import React from 'react';
import AnimatedText from './AnimatedText';
import { Briefcase, Lightbulb, Users, Award } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '7+' },
  { label: 'Projects Completed', value: '50+' },
  { label: 'Happy Clients', value: '30+' },
  { label: 'Design Awards', value: '5' }
];

const skills = [
  'User Experience Design',
  'User Interface Design',
  'Interaction Design',
  'User Research',
  'Wireframing & Prototyping',
  'Design Systems',
  'Accessibility',
  'Motion Design',
  'AI-driven Design',
  'Design Leadership'
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <span className="inline-block text-sm md:text-base font-medium tracking-wider mb-4 py-1 px-4 rounded-full bg-primary/10 text-primary">
              About Me
            </span>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">
              <AnimatedText text="Passionate about creating" className="block mb-2" once />
              <AnimatedText text="meaningful experiences" className="text-gradient block" once delay={200} />
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a product designer with over 7 years of experience crafting digital experiences that balance user needs with business goals. My expertise lies in creating intuitive, accessible, and visually stunning interfaces.
              </p>
              <p>
                My background in cognitive psychology gives me a unique perspective on how people interact with technology, allowing me to design more thoughtful and human-centered products.
              </p>
              <p>
                Recently, I've been focused on designing AI-powered applications that simplify complex tasks while maintaining a human touch. I believe that good design should feel natural and intuitive, especially when working with emerging technologies.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="glass rounded-2xl p-6 md:p-8 transition-all hover:shadow-lg">
              <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Professional Experience</h3>
              <p className="text-muted-foreground">Senior Product Designer at leading tech companies, specializing in creating intuitive and accessible digital products.</p>
            </div>
            
            <div className="glass rounded-2xl p-6 md:p-8 transition-all hover:shadow-lg">
              <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Design Philosophy</h3>
              <p className="text-muted-foreground">I believe in user-centered design that solves real problems through research, empathy, and thoughtful execution.</p>
            </div>
            
            <div className="glass rounded-2xl p-6 md:p-8 transition-all hover:shadow-lg">
              <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Collaboration</h3>
              <p className="text-muted-foreground">I thrive in collaborative environments, working closely with developers, product managers, and stakeholders to bring ideas to life.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-display font-bold mb-8 text-center">Skills & Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {skills.map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-secondary rounded-full text-sm font-medium transition-all hover:bg-primary/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

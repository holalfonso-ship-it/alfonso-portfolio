
import React from 'react';
import AnimatedText from './AnimatedText';
import { MessageSquare, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface TestimonialProps {
  content: string;
  author: string;
  position: string;
  company: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ content, author, position, company }) => {
  return (
    <Card className="glass border-0 h-full">
      <CardContent className="p-8">
        <div className="mb-6">
          <div className="flex items-center mb-4 text-primary">
            <MessageSquare className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">Testimonial</span>
          </div>
          <p className="text-lg text-muted-foreground italic mb-6">"{content}"</p>
          <div>
            <p className="font-bold">{author}</p>
            <p className="text-sm text-muted-foreground">{position}, {company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "Alfonso has a unique ability to streamline design processes while maintaining high quality standards. His DesignOps approach helped us reduce design delivery time by 30%.",
      author: "Maria Rodriguez",
      position: "Head of Product",
      company: "Leadtech Group"
    },
    {
      content: "Working with Alfonso transformed how our design team operates. His systematic approach to design and emphasis on efficiency has been invaluable to our growth.",
      author: "Carlos Martinez",
      position: "Design Manager",
      company: "Wanup"
    },
    {
      content: "Alfonso's work on our design system was exceptional. Not only did he create a cohesive visual language, but he also implemented processes that made our team more efficient.",
      author: "Laura Sanchez",
      position: "UX Director",
      company: "Natevoo"
    }
  ];
  
  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 md:px-12 relative">
      <div 
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_50%_50%,rgba(var(--primary-rgb),0.05)_0%,rgba(var(--primary-rgb),0)_100%)]" 
        style={{'--primary-rgb': '52, 152, 219'} as React.CSSProperties}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <span className="inline-block text-sm md:text-base font-medium tracking-wider mb-4 py-1 px-4 rounded-full bg-primary/10 text-primary">
            What people say
          </span>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">
            <AnimatedText text="Client" className="inline-block mr-3" once />
            <AnimatedText text="Testimonials" className="text-gradient inline-block" once delay={200} />
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've had the privilege of working with amazing clients and teams who have shared their feedback on our collaboration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
            />
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="glass p-6 rounded-xl max-w-2xl text-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Award className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Ready to work together?</h3>
            <p className="text-muted-foreground mb-6">
              Let's collaborate to improve your team's design operations and create exceptional product experiences.
            </p>
            <a 
              href="#contact" 
              className="inline-flex px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-transform hover:scale-105 active:scale-95"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

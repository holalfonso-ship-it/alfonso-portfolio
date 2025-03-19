
import React, { useRef, useEffect, useState } from 'react';
import AnimatedText from './AnimatedText';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'I begin by understanding the problem space through stakeholder interviews, user research, and competitive analysis to establish clear project goals and metrics for success.',
    icon: '🔍'
  },
  {
    number: '02',
    title: 'Define',
    description: 'From research insights, I define user personas, journey maps, and information architecture to create a solid foundation for the design process.',
    icon: '📋'
  },
  {
    number: '03',
    title: 'Design',
    description: 'Through iterative wireframing and prototyping, I create visually appealing and functional interfaces that align with user needs and business objectives.',
    icon: '✏️'
  },
  {
    number: '04',
    title: 'Test',
    description: 'I validate designs through usability testing and iteration, ensuring the final product delivers an optimal user experience before development handoff.',
    icon: '🧪'
  }
];

const ProcessStep: React.FC<{ 
  step: typeof processSteps[0]; 
  isActive: boolean;
  onClick: () => void;
  index: number;
}> = ({ step, isActive, onClick, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const stepRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, index * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = stepRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [index]);
  
  return (
    <div 
      ref={stepRef}
      className={cn(
        "group cursor-pointer transition-all duration-500 opacity-0 transform translate-y-12",
        isVisible && "opacity-100 translate-y-0"
      )}
      onClick={onClick}
    >
      <div 
        className={cn(
          "relative h-full glass rounded-2xl p-6 md:p-8 transition-all duration-300",
          isActive ? "ring-2 ring-primary shadow-lg" : "hover:shadow-md"
        )}
      >
        <div className="flex items-center justify-between mb-4">
          <span className={cn(
            "font-mono text-xl font-bold text-primary/80 transition-colors duration-300",
            isActive && "text-primary"
          )}>
            {step.number}
          </span>
          <span className="text-2xl">{step.icon}</span>
        </div>
        
        <h3 className="text-xl font-display font-bold mb-3">{step.title}</h3>
        
        <p className={cn(
          "text-muted-foreground transition-all duration-300",
          isActive ? "opacity-100" : "opacity-80 group-hover:opacity-100"
        )}>
          {step.description}
        </p>
        
        <div className={cn(
          "absolute bottom-6 right-8 opacity-0 transform translate-x-4 transition-all duration-300",
          isActive && "opacity-100 translate-x-0"
        )}>
          <ArrowRight className="text-primary" />
        </div>
      </div>
    </div>
  );
};

const WorkProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  return (
    <section id="process" className="py-20 md:py-32 px-6 md:px-12 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <span className="inline-block text-sm md:text-base font-medium tracking-wider mb-4 py-1 px-4 rounded-full bg-primary/10 text-primary">
            How I Work
          </span>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">
            <AnimatedText text="My Design Process" className="inline-block" once />
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to solving design challenges and creating exceptional user experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {processSteps.map((step, index) => (
            <ProcessStep 
              key={step.number}
              step={step}
              isActive={activeStep === index}
              onClick={() => setActiveStep(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;

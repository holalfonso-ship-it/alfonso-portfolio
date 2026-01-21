
import React from 'react';
import AnimatedText from '@/components/AnimatedText';

const ProjectsHeader: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      <span className="text-sm md:text-base font-medium tracking-wider py-1 px-4 rounded-full bg-primary/10 text-primary w-fit">
        Selected Work
      </span>
      
      <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight max-w-2xl">
        <AnimatedText text="Creating impactful digital experiences" className="inline-block" once />
      </h2>
      
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-4">
        A collection of projects focusing on design systems, user experience, and digital product design.
      </p>
    </div>
  );
};

export default ProjectsHeader;

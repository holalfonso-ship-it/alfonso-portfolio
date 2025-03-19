
import React from 'react';
import AnimatedText from './AnimatedText';
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
  align?: 'center' | 'left' | 'right';
  once?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  badge, 
  className,
  align = 'center',
  once = true
}) => {
  return (
    <div className={cn(
      "mb-16",
      align === 'center' && "text-center",
      align === 'left' && "text-left",
      align === 'right' && "text-right",
      className
    )}>
      {badge && (
        <span className="inline-block text-sm md:text-base font-medium tracking-wider mb-4 py-1 px-4 rounded-full bg-primary/20 text-primary animate-pulse">
          {badge}
        </span>
      )}
      
      <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
        <AnimatedText text={title} className="inline-block" once={once} />
      </h2>
      
      {subtitle && (
        <div className="max-w-2xl mx-auto">
          <p className="text-muted-foreground">
            {subtitle}
          </p>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;

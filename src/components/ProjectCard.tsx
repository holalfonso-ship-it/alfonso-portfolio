
import React, { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
  index: number;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  category,
  image,
  link,
  index,
  featured = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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

    const currentRef = cardRef.current;
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
      ref={cardRef}
      className={cn(
        "group relative cursor-pointer transition-all duration-700 opacity-0 transform translate-y-12",
        isVisible && "opacity-100 translate-y-0"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a 
        href={link} 
        className="block h-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={cn(
          "relative overflow-hidden bg-muted rounded-lg",
          featured ? "aspect-[16/9]" : "aspect-square",
        )}>
          <div 
            className={cn(
              "absolute inset-0 transition-transform duration-700 ease-out bg-cover bg-center bg-no-repeat will-change-transform",
              isHovered ? "scale-105" : "scale-100"
            )}
            style={{ backgroundImage: `url(${image})` }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />

          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start">
            <span className="text-xs font-medium bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full">
              {category}
            </span>
            
            <span 
              className={cn(
                "relative flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm transition-all duration-500",
                isHovered ? "opacity-100 rotate-0" : "opacity-0 -rotate-45"
              )}
            >
              <ArrowUpRight size={16} className="text-white" />
            </span>
          </div>
          
          <div 
            className={cn(
              "absolute bottom-0 left-0 right-0 p-6 transition-transform duration-500 ease-out",
              isHovered ? "translate-y-0" : featured ? "translate-y-0" : "translate-y-8"
            )}
          >
            <h3 className={cn(
              "font-display font-bold text-white mb-2 transition-all duration-300",
              featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl",
            )}>
              {title}
            </h3>
            
            <p 
              className={cn(
                "text-sm text-white/80 max-w-md transition-all duration-500",
                isHovered || featured ? "opacity-100 max-h-24 translate-y-0" : "opacity-0 max-h-0 translate-y-4",
              )}
            >
              {description}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;

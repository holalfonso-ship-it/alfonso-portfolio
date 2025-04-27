
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
        "group relative transition-all duration-700 opacity-0 transform translate-y-12 h-full hover:shadow-2xl",
        isVisible && "opacity-100 translate-y-0"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={link} className="h-full block">
        <div className="relative h-full overflow-hidden rounded-2xl bg-muted/50">
          <div 
            className={cn(
              "absolute inset-0 transition-transform duration-700 ease-out bg-cover bg-center bg-no-repeat will-change-transform",
              isHovered ? "scale-110" : "scale-100"
            )}
            style={{ backgroundImage: `url(${image})` }}
          />
          
          <div className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent",
            "transition-opacity duration-500",
            isHovered ? "opacity-90" : "opacity-100"
          )} />

          <div className="absolute inset-0 p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div className="flex justify-between items-start space-x-4">
              <span className="text-xs md:text-sm font-medium bg-white/10 backdrop-blur-sm text-white px-3 py-1.5 rounded-full">
                {category}
              </span>
              
              <span 
                className={cn(
                  "relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm transition-all duration-500",
                  isHovered ? "opacity-100 rotate-0 translate-x-0" : "opacity-0 -rotate-45 translate-x-4"
                )}
              >
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </span>
            </div>
            
            <div className={cn(
              "space-y-3 md:space-y-4 transform transition-all duration-500",
              isHovered ? "translate-y-0" : "translate-y-2"
            )}>
              <h3 className="font-display font-bold text-white leading-tight text-xl md:text-2xl lg:text-3xl max-w-2xl">
                {title}
              </h3>
              
              <p className={cn(
                "text-sm md:text-base text-white/80 max-w-2xl leading-relaxed",
                "transition-all duration-500",
                isHovered ? "opacity-100" : "opacity-80"
              )}>
                {description}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;

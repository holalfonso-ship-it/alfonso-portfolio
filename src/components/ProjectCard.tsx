
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
        "group relative transition-all duration-700 opacity-0 transform translate-y-12 cursor-pointer",
        isVisible && "opacity-100 translate-y-0"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={link}>
        <div className={cn(
          "relative overflow-hidden rounded-2xl bg-muted",
          featured ? "aspect-[16/9]" : "aspect-[4/3]",
        )}>
          <div 
            className={cn(
              "absolute inset-0 transition-transform duration-700 ease-out bg-cover bg-center bg-no-repeat will-change-transform",
              isHovered ? "scale-105" : "scale-100"
            )}
            style={{ backgroundImage: `url(${image})` }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

          <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between">
            <div className="flex justify-between items-start">
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
            
            <div>
              <h3 className={cn(
                "font-display font-bold text-white mb-3 transition-all duration-300",
                featured ? "text-2xl md:text-4xl" : "text-xl md:text-2xl",
              )}>
                {title}
              </h3>
              
              <p 
                className={cn(
                  "text-sm text-white/80 max-w-md transition-all duration-300",
                  isHovered ? "opacity-100" : featured ? "opacity-100" : "opacity-70",
                )}
              >
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

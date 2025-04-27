
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string | string[];
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="h-full relative overflow-hidden rounded-2xl bg-muted/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={link} className="block h-full">
        <div className="relative h-full">
          <div 
            className={cn(
              "absolute inset-0 transition-transform duration-700 ease-out bg-cover bg-center bg-no-repeat",
              isHovered ? "scale-105" : "scale-100"
            )}
            style={{ backgroundImage: `url(${image})` }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

          <div className="absolute inset-0 p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div className="flex flex-wrap items-start gap-2">
              {Array.isArray(category) ? (
                category.map((cat, i) => (
                  <span 
                    key={i}
                    className="text-xs md:text-sm font-medium bg-white/10 backdrop-blur-sm text-white px-3 py-1.5 rounded-full"
                  >
                    {cat}
                  </span>
                ))
              ) : (
                <span className="text-xs md:text-sm font-medium bg-white/10 backdrop-blur-sm text-white px-3 py-1.5 rounded-full">
                  {category}
                </span>
              )}
              
              <span 
                className={cn(
                  "ml-auto relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm transition-all duration-500",
                  isHovered ? "opacity-100 rotate-0" : "opacity-0 -rotate-45"
                )}
              >
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </span>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              <h3 className="font-display font-bold text-white leading-tight text-lg md:text-2xl xl:text-3xl">
                {title}
              </h3>
              
              <p 
                className={cn(
                  "text-sm md:text-base text-white/80 max-w-2xl leading-relaxed",
                  isHovered ? "opacity-100" : featured ? "opacity-100" : "opacity-80"
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

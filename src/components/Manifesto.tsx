
import React, { useState } from 'react';
import AnimatedText from './AnimatedText';
import { Quote, Star, Users, Lightbulb, Book, ChevronRight } from 'lucide-react';
import { cn } from "@/lib/utils";

const Manifesto: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section id="manifesto" className="py-24 md:py-32 px-6 md:px-12 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center mb-20">
          <div className="order-2 lg:order-1">
            <span className="inline-block text-sm md:text-base font-medium tracking-wider mb-4 py-1 px-4 rounded-full bg-primary/10 text-primary">
              Manifesto
            </span>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight leading-relaxed">
              <AnimatedText text="My Design Philosophy" className="inline-block" once />
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Design is more than aesthetics—it's about solving real problems and creating meaningful experiences. I combine data-driven decisions with creative intuition to craft solutions that make a difference.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-2">Data-Driven Design</h3>
                  <p className="text-muted-foreground">Making informed decisions through research, testing, and metrics analysis.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-2">Collaborative Approach</h3>
                  <p className="text-muted-foreground">Building strong relationships with stakeholders and team members.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Quote className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-2">User-Centric Focus</h3>
                  <p className="text-muted-foreground">Putting users first in every decision and design choice.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div 
              className="relative aspect-[4/5] w-full group cursor-pointer perspective-1000"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Main image */}
              <div 
                className={cn(
                  "absolute inset-0 backface-hidden transition-all duration-700",
                  isHovered ? "rotate-y-180 opacity-0" : "rotate-y-0 opacity-100"
                )}
              >
                <img 
                  src="/lovable-uploads/cc20b794-8982-44a8-8b93-4f9bd65db2d3.png"
                  alt="Design Philosophy Portrait"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/30 to-transparent mix-blend-multiply" />
              </div>
              
              {/* Hidden reveal on hover */}
              <div 
                className={cn(
                  "absolute inset-0 backface-hidden rounded-2xl transition-all duration-700 flex items-center justify-center overflow-hidden",
                  isHovered ? "rotate-y-0 opacity-100" : "rotate-y-180 opacity-0"
                )}
              >
                {/* Revealed content */}
                <div className="bg-black/70 backdrop-blur-sm w-full h-full rounded-2xl flex flex-col items-center justify-center p-8">
                  <img 
                    src="/lovable-uploads/cc20b794-8982-44a8-8b93-4f9bd65db2d3.png"
                    alt="Design Philosophy Portrait"
                    className={cn(
                      "w-full h-full object-cover rounded-2xl transition-all duration-1000",
                      isHovered ? "grayscale-0 scale-100" : "grayscale scale-95"
                    )}
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={cn(
                      "text-center p-8 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 transform transition-all duration-700",
                      isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    )}>
                      <h3 className="text-3xl font-bold text-white mb-4">Creative Vision</h3>
                      <p className="text-white/80">
                        Behind every great design is a philosophy that blends art, function, and purpose.
                      </p>
                      <p className="mt-4 italic text-primary">
                        "Design is not just what it looks like and feels like. Design is how it works."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements that appear on hover */}
              <div className="absolute inset-0 pointer-events-none">
                <div className={cn(
                  "absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-primary transition-all duration-700 mix-blend-screen",
                  isHovered ? "opacity-80 animate-float" : "opacity-0"
                )} />
                <div className={cn(
                  "absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-[#9b87f5] transition-all duration-700 delay-100 mix-blend-screen",
                  isHovered ? "opacity-80 animate-float animation-delay-500" : "opacity-0"
                )} />
                <div className={cn(
                  "absolute bottom-1/4 right-1/4 w-10 h-10 rounded-full bg-[#7E69AB] transition-all duration-700 delay-200 mix-blend-screen",
                  isHovered ? "opacity-80 animate-float animation-delay-1000" : "opacity-0"
                )} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={cn(
            "glass rounded-xl p-8 relative overflow-hidden",
            "transform transition-transform hover:scale-[1.02] duration-300"
          )}>
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
          
          <div className={cn(
            "glass rounded-xl p-8 relative overflow-hidden",
            "transform transition-transform hover:scale-[1.02] duration-300"
          )}>
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
          
          <div className={cn(
            "glass rounded-xl p-8 relative overflow-hidden",
            "transform transition-transform hover:scale-[1.02] duration-300"
          )}>
            <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Star className="w-5 h-5 text-primary" />
            </div>
            <div className="mt-14">
              <h3 className="text-2xl font-display font-bold mb-4">Design excellence</h3>
              <p className="text-muted-foreground">
                Every detail matters in creating exceptional user experiences. I focus on crafting intuitive interfaces that balance form and function while maintaining high standards of quality.
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

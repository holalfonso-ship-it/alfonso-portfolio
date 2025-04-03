
import React from 'react';
import ProjectOverview from './videoup-landing/ProjectOverview';
import ChallengeSection from './videoup-landing/ChallengeSection';
import SolutionSection from './videoup-landing/SolutionSection';
import ProcessSection from './videoup-landing/ProcessSection';
import ResultsSection from './videoup-landing/ResultsSection';
import LearningsSection from './videoup-landing/LearningsSection';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

export const VideoUpLandingContent: React.FC = () => {
  const websiteImages = [
    {
      src: "/lovable-uploads/5d3e945c-e1a2-425a-925e-7f2349820971.png",
      alt: "VideoUp Landing Page Hero Section",
      caption: "The hero section highlights the app's AI capabilities with bold typography and gradient elements"
    },
    {
      src: "/lovable-uploads/66fb836a-69d5-4b32-a171-1ab35fbb706e.png",
      alt: "VideoUp Features Section",
      caption: "Feature highlights with vibrant UI cards and clear value propositions"
    },
    {
      src: "/lovable-uploads/c0a19b7f-5b09-47de-8aad-69eefa4e7fd9.png",
      alt: "VideoUp Mobile Optimization",
      caption: "Mobile-optimized version showing responsive layout and navigation"
    }
  ];

  return (
    <div className="space-y-16">
      <ProjectOverview />
      
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Website Screenshots</h2>
        <p className="mb-6 text-muted-foreground">
          The following screenshots showcase the key sections of the VideoUp landing page design, 
          highlighting the modern UI elements, conversion-focused layout, and responsive design.
        </p>
        
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {websiteImages.map((image, index) => (
              <CarouselItem key={index}>
                <Card className="border border-border/50">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-auto rounded-t-lg"
                      />
                      <div className="p-4 bg-muted/30">
                        <p className="text-sm text-muted-foreground">
                          {image.caption}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 lg:-left-12" />
          <CarouselNext className="right-2 lg:-right-12" />
        </Carousel>
      </div>
      
      <ChallengeSection />
      <SolutionSection />
      <ProcessSection />
      <ResultsSection />
      <LearningsSection />
    </div>
  );
};

export default VideoUpLandingContent;

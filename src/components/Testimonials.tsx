import React from 'react';
import SectionHeader from './SectionHeader';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager at TechCorp',
    image: '/avatars/sarah.jpg',
    content: 'Alfonso's design system work transformed our product development process. His attention to detail and systematic approach helped us reduce design inconsistencies by 80% and accelerated our development cycles significantly.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Lead Developer at InnovateTech',
    image: '/avatars/michael.jpg',
    content: 'Working with Alfonso was a game-changer for our engineering team. His DesignOps processes streamlined our handoffs and reduced back-and-forth communication by at least 60%. I highly recommend his expertise.',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'UX Director at DesignForward',
    image: '/avatars/elena.jpg',
    content: 'Alfonso brings a unique combination of design excellence and operational efficiency. His work on our cross-team collaboration framework has become the gold standard for how our design and development teams interact.',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'CTO at StartupVision',
    image: '/avatars/david.jpg',
    content: 'I was impressed by Alfonso's ability to balance creative design with practical implementation. His design system not only looked great but was also incredibly well-documented and easy for our developers to use.',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-gradient-to-b from-background/90 to-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="What People Say"
          title="Testimonials"
          subtitle="Feedback from clients and colleagues about my work and collaboration style."
        />
        
        <Tabs defaultValue="grid" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="carousel">Carousel</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="grid" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="bg-card/50 backdrop-blur-sm border border-border/50 transition-all duration-300 hover:shadow-md">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-primary/20 mb-4" />
                    <p className="mb-6 italic text-muted-foreground">{testimonial.content}</p>
                    <div className="flex items-center">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="carousel" className="w-full">
            <div className="flex flex-col items-center">
              <Card className="max-w-3xl bg-card/50 backdrop-blur-sm border border-border/50 transition-all duration-300 hover:shadow-md">
                <CardContent className="p-8">
                  <Quote className="h-12 w-12 text-primary/20 mb-6 mx-auto" />
                  <p className="mb-8 text-xl text-center italic">{testimonials[0].content}</p>
                  <div className="flex flex-col items-center">
                    <Avatar className="h-16 w-16 mb-4">
                      <AvatarImage src={testimonials[0].image} alt={testimonials[0].name} />
                      <AvatarFallback>{testimonials[0].name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h4 className="font-semibold text-lg">{testimonials[0].name}</h4>
                    <p className="text-muted-foreground">{testimonials[0].role}</p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex mt-6 gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-primary' : 'bg-muted'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Testimonials;

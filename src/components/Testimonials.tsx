
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeader from './SectionHeader';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager at TechCorp',
    content: 'Working with Alfonso was a game-changer for our product. His design system implementation improved our development speed by 40%.',
    avatar: '/lovable-uploads/a34955f1-1c9a-4745-b402-a31f0beb6f83.png'
  },
  {
    name: 'Michael Chen',
    role: 'CTO at StartupX',
    content: 'Alfonso's DesignOps processes transformed how our teams collaborate. The workflows he implemented are still being used years later.',
    avatar: '/lovable-uploads/d02ab1a8-a48e-410d-aa65-bb5d4df1b25b.png'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Lead Developer at InnovateCo',
    content: 'The design system Alfonso built was incredibly thoughtful, with clear documentation that made implementation a breeze for our engineering team.',
    avatar: '/lovable-uploads/8c59b616-51e1-4471-9126-d4759111deb2.png'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          badge="What people say"
          title="Client Testimonials"
          subtitle="I've had the privilege of working with amazing clients and teams who have shared their feedback on our collaboration."
          className="text-foreground" // Remove gradient by using regular text color
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border border-border overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-12 w-12 border-2 border-primary/20">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-foreground/80 italic">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

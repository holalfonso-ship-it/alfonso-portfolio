import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Lightbulb, Target, Zap, TrendingUp, Users, Sparkles, Brain } from 'lucide-react';
import AnimatedText from '@/components/AnimatedText';
import { Link } from 'react-router-dom';
import aiCleanerHero from '@/assets/ai-cleaner-hero.png';

const FeaturedCaseStudy: React.FC = () => {
  const tags = ['DesignOps', 'AI Integration', 'Team Leadership'];

  const actionMilestones = [
    {
      icon: Zap,
      title: 'DesignOps Frameworks',
      description: 'Implemented DesignOps frameworks to reduce friction between design, product and engineering teams.',
    },
    {
      icon: Brain,
      title: 'AI Workflow Integration',
      description: 'Integrated AI-powered workflows using Figma Make AI, UxPilot, and Lovable for accelerated prototyping.',
    },
    {
      icon: Users,
      title: 'Team Mentorship',
      description: 'Mentored a team of 6 designers focused on experimentation and continuous improvement.',
    },
  ];

  const results = [
    { value: '+30%', label: 'Acceleration in product delivery' },
    { value: '+25%', label: 'Increase in velocity' },
    { value: '+20%', label: 'Stakeholder satisfaction' },
  ];

  return (
    <section id="case-study" className="py-32 md:py-40 px-6 md:px-12 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col space-y-6 mb-12 md:mb-16">
          <span className="text-sm md:text-base font-medium tracking-wider py-1 px-4 rounded-full bg-primary/10 text-primary w-fit">
            Featured Case Study
          </span>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight max-w-4xl">
            <AnimatedText text="AI Cleaner: Redefining Inbox Hygiene with AI" className="inline-block" once />
          </h2>
          
          <div className="flex flex-wrap gap-3 mt-4">
            {tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className="text-sm px-4 py-1.5 bg-secondary/80 hover:bg-secondary"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16 md:mb-24 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
          <div className="relative aspect-video md:aspect-[21/9] w-full">
            <img 
              src={aiCleanerHero} 
              alt="AI Cleaner app interface showing +2.5GB recovered with Smart Filters" 
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent" />
          </div>
          {/* Decorative glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 rounded-2xl blur-xl -z-10" />
        </div>

        {/* STAR Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Situation */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-semibold">Situation</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Faced the challenge of aligning user experience with business objectives across multiple digital products. 
                Design inconsistencies and siloed workflows were creating friction and slowing down delivery across the organization.
              </p>
            </CardContent>
          </Card>

          {/* Task */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-colors duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-semibold">Task</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Scale the corporate Design System to ensure consistency across all products while establishing 
                measurable UX metrics to track impact and demonstrate value to stakeholders.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Action */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-primary/10">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-display font-semibold">Action</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {actionMilestones.map((milestone, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <milestone.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{milestone.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Result */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-xl bg-primary/10">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-display font-semibold">Result</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <Card 
                key={index} 
                className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <span className="text-5xl md:text-6xl font-display font-bold text-primary block mb-3">
                    {result.value}
                  </span>
                  <p className="text-muted-foreground text-lg">{result.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link to="/project/leadtech-design-system">
            <Button 
              size="lg" 
              className="group text-lg px-8 py-6 bg-primary hover:bg-primary/90"
            >
              View Full Documentation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;

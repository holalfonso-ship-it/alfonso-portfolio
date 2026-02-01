import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Lightbulb, Target, Zap, TrendingUp, Users, Sparkles, Brain, HardDrive, Globe, Layers, Star } from 'lucide-react';
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
          <div className="relative aspect-[4/3] md:aspect-[16/9] w-full">
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

        {/* Storytelling Section */}
        <div className="max-w-3xl mx-auto mb-20 md:mb-28 animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-display font-semibold text-center mb-8 tracking-tight">
            The Story Behind AI Cleaner
          </h3>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed text-center md:text-left">
            <p>
              We live in an era of digital obesity. Our iPhones are no longer just tools; they have become 
              cluttered archives of duplicate memories, forgotten screenshots, and endless junk mail that 
              drain both our storage and our mental clarity.
            </p>
            <p>
              As the <span className="font-semibold text-foreground">Lead Product Designer</span>, I saw an 
              opportunity to do more than just build a utility app. My goal was to leverage{' '}
              <span className="font-semibold text-foreground">AI-driven workflows</span> to create a 
              'digital sanctuary.' By merging Data-Informed Design (via Amplitude) with cutting-edge AI tools, 
              we transformed a tedious 15-minute manual task into a seamless, one-tap experience.
            </p>
            <p>
              This isn't just a story about cleaning files; it's about how we scaled a premium iOS experience 
              from Barcelona to a global stage—including the highly competitive{' '}
              <span className="font-semibold text-foreground">Chinese market</span>—while maintaining a 
              4.5-star excellence and a 30% faster delivery velocity through modern{' '}
              <span className="font-semibold text-primary">DesignOps</span>.
            </p>
          </div>
        </div>

        {/* STAR Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Situation */}
          <Card className="bg-card/30 backdrop-blur-md border-border/30 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
            <CardContent className="p-0">
              {/* Image Placeholder */}
              <div className="relative h-48 md:h-56 bg-gradient-to-br from-muted/80 via-muted/60 to-muted/40 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 via-transparent to-destructive/5" />
                <div className="relative p-6 rounded-2xl bg-background/20 backdrop-blur-sm border border-border/20 group-hover:scale-105 transition-transform duration-500">
                  <HardDrive className="w-12 h-12 text-destructive/70" />
                </div>
                <span className="absolute bottom-4 left-4 text-xs font-medium text-muted-foreground/60 tracking-wider uppercase">
                  The Problem
                </span>
              </div>
              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10">
                    <Lightbulb className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold">Situation</h3>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Faced the challenge of aligning user experience with business objectives across multiple digital products. 
                  Design inconsistencies and siloed workflows were creating friction and slowing down delivery.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Task */}
          <Card className="bg-card/30 backdrop-blur-md border-border/30 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
            <CardContent className="p-0">
              {/* Image Placeholder */}
              <div className="relative h-48 md:h-56 bg-gradient-to-br from-muted/80 via-muted/60 to-muted/40 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
                <div className="relative p-6 rounded-2xl bg-background/20 backdrop-blur-sm border border-border/20 group-hover:scale-105 transition-transform duration-500">
                  <Globe className="w-12 h-12 text-primary/70" />
                </div>
                <span className="absolute bottom-4 left-4 text-xs font-medium text-muted-foreground/60 tracking-wider uppercase">
                  The Goal
                </span>
              </div>
              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold">Task</h3>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Scale the corporate Design System to ensure consistency across all products while establishing 
                  measurable UX metrics to track impact and demonstrate value to stakeholders.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Section */}
        <Card className="bg-card/30 backdrop-blur-md border-border/30 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden mb-16 group">
          <CardContent className="p-0">
            {/* Image Placeholder */}
            <div className="relative h-48 md:h-64 bg-gradient-to-br from-muted/80 via-muted/60 to-muted/40 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-primary/10" />
              <div className="relative p-6 rounded-2xl bg-background/20 backdrop-blur-sm border border-border/20 group-hover:scale-105 transition-transform duration-500">
                <Layers className="w-14 h-14 text-secondary-foreground/70" />
              </div>
              <span className="absolute bottom-4 left-4 text-xs font-medium text-muted-foreground/60 tracking-wider uppercase">
                The Solution
              </span>
            </div>
            {/* Content */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-semibold">Action</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {actionMilestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    className="p-5 rounded-2xl bg-background/40 backdrop-blur-sm border border-border/20 hover:border-primary/30 hover:bg-background/60 transition-all duration-300"
                  >
                    <div className="p-2.5 rounded-xl bg-primary/10 w-fit mb-4">
                      <milestone.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{milestone.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Result Section */}
        <Card className="bg-card/30 backdrop-blur-md border-border/30 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden mb-16 group">
          <CardContent className="p-0">
            {/* Image Placeholder */}
            <div className="relative h-48 md:h-64 bg-gradient-to-br from-muted/80 via-muted/60 to-muted/40 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/10" />
              <div className="relative p-6 rounded-2xl bg-background/20 backdrop-blur-sm border border-border/20 group-hover:scale-105 transition-transform duration-500">
                <Star className="w-14 h-14 text-primary/70" />
              </div>
              <span className="absolute bottom-4 left-4 text-xs font-medium text-muted-foreground/60 tracking-wider uppercase">
                The Impact
              </span>
            </div>
            {/* Content */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-semibold">Result</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {results.map((result, index) => (
                  <div 
                    key={index} 
                    className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 text-center"
                  >
                    <span className="text-4xl md:text-5xl font-display font-bold text-primary block mb-2">
                      {result.value}
                    </span>
                    <p className="text-muted-foreground text-sm">{result.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>


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

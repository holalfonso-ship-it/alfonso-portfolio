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
  const actionMilestones = [{
    icon: Zap,
    title: 'Data-Driven Insights',
    description: 'Leveraged Amplitude for cohort analysis, identifying friction points that led to a 15% increase in user retention.'
  }, {
    icon: Brain,
    title: 'AI-Powered Prototyping',
    description: 'Integrated Figma AI and Gemini Copilots to reduce high-fidelity prototyping time by 40%.'
  }, {
    icon: Users,
    title: 'Cross-Functional Leadership',
    description: 'Led a cross-functional team of 6 designers using Synthetic Users for rapid market validation before development.'
  }];
  const results = [{
    value: '4.5/5',
    label: 'Stars rating & Top 100 Utilities on App Store'
  }, {
    value: '+30%',
    label: 'Acceleration in product delivery'
  }, {
    value: '+25%',
    label: 'Increase in velocity & 20% stakeholder satisfaction'
  }];
  return <section id="case-study" className="py-32 md:py-40 px-6 md:px-12 bg-gradient-to-b from-background to-background/95">
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
            {tags.map(tag => <Badge key={tag} variant="secondary" className="text-sm px-4 py-1.5 bg-secondary/80 hover:bg-secondary">
                {tag}
              </Badge>)}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mb-16 md:mb-24 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
          <div className="relative aspect-[4/3] md:aspect-[16/9] w-full">
            <img src={aiCleanerHero} alt="AI Cleaner app interface showing +2.5GB recovered with Smart Filters" className="w-full h-full object-cover object-center" />
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
              {/* Situation Image */}
              <div className="relative h-48 md:h-56 overflow-hidden bg-muted/30">
                <img 
                  src="/lovable-uploads/9ec4b5eb-c1ca-4930-b77e-35f026f82888.png" 
                  alt="Digital clutter and storage issues on mobile devices" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-background/80 backdrop-blur-sm">
                    <HardDrive className="w-5 h-5 text-destructive" />
                  </div>
                  <span className="text-xs font-medium text-foreground/80 tracking-wider uppercase">
                    The Problem
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10">
                    <Lightbulb className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold">Situation</h3>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Digital Anxiety & Decision Fatigue in the iOS Ecosystem
                </h4>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Users suffered from <span className="font-semibold text-foreground">Digital Anxiety</span>—the constant stress of full storage notifications—compounded by <span className="font-semibold text-foreground">Decision Fatigue</span> when manually sorting thousands of files. As the Lead Product Designer, I identified these psychological barriers as the core UX problem, shifting our strategy from a simple utility to a cognitive-relief tool.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Task */}
          <Card className="bg-card/30 backdrop-blur-md border-border/30 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
            <CardContent className="p-0">
              {/* Task Image */}
              <div className="relative h-48 md:h-56 overflow-hidden bg-muted/30">
                <img 
                  src="/lovable-uploads/b3fb73d0-b03b-495d-81d7-fb908ec0b8e6.png" 
                  alt="Global expansion roadmap and strategic planning" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-background/80 backdrop-blur-sm">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-foreground/80 tracking-wider uppercase">
                    The Goal
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold">Task</h3>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Global Expansion Through Cultural UX Adaptation
                </h4>
                <p className="text-muted-foreground text-base leading-relaxed">
                  My mission was to scale the corporate Design System while leading expansion into the <span className="font-semibold text-foreground">Chinese market</span>—a challenge that demanded <span className="font-semibold text-foreground">Cultural UX Adaptation</span>, not just translation. This meant rethinking information density, color semantics, trust signals, and payment flows to align with local user mental models and platform conventions (WeChat, Alipay).
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Section */}
        <Card className="bg-card/30 backdrop-blur-md border-border/30 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden mb-16 group">
          <CardContent className="p-0">
            {/* Action Image */}
            <div className="relative h-48 md:h-64 overflow-hidden bg-muted/30 rounded-[16px]">
              <img 
                src="/lovable-uploads/5cb0453f-dc0d-4b19-852f-8c3131354284.png" 
                alt="DesignOps workflow with AI integration and data analysis" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="p-2 rounded-lg bg-background/80 backdrop-blur-sm">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-medium text-foreground/80 tracking-wider uppercase">
                  The Solution
                </span>
              </div>
            </div>
            {/* Content */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-semibold">Action</h3>
              </div>
              <h4 className="text-lg font-bold text-foreground mb-4">
                Merging DesignOps, AI, and Data Intelligence
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {actionMilestones.map((milestone, index) => <div key={index} className="p-5 rounded-2xl bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-md border border-border/20 hover:border-primary/30 hover:from-card/80 hover:to-card/50 transition-all duration-300 shadow-lg shadow-background/20">
                    <div className="p-2.5 rounded-xl bg-primary/10 w-fit mb-4">
                      <milestone.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{milestone.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{milestone.description}</p>
                  </div>)}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Result Section */}
        <Card className="bg-card/30 backdrop-blur-md border-border/30 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden mb-16 group">
          <CardContent className="p-0">
            {/* Result Image - Product success composition */}
            <div className="relative h-48 md:h-64 overflow-hidden bg-muted/30 rounded-[16px]">
              <img 
                src="/lovable-uploads/4789cc35-7092-4740-af94-ce7f152bbf3b.png" 
                alt="AI Cleaner product success - App Store Top 100 Utilities" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="p-2 rounded-lg bg-background/80 backdrop-blur-sm">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-medium text-foreground/80 tracking-wider uppercase">
                  The Impact
                </span>
              </div>
            </div>
            {/* Content */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-semibold">Result</h3>
              </div>
              <h4 className="text-lg font-bold text-foreground mb-4">
                Delivering Measurable Business & User Value
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {results.map((result, index) => <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-md border border-[hsl(210,100%,60%,0.25)] hover:border-[hsl(210,100%,60%,0.5)] hover:from-card/80 hover:to-card/50 transition-all duration-300 shadow-lg shadow-[hsl(210,100%,60%,0.08)] text-center">
                    <span className={`text-4xl md:text-5xl font-display font-bold block mb-2 ${
                      result.value === '4.5/5' ? 'text-primary' : 'text-[hsl(160,60%,50%)]'
                    }`}>
                      {result.value}
                    </span>
                    <p className="text-muted-foreground text-sm">{result.label}</p>
                  </div>)}
              </div>

              {/* Key Takeaway */}
              <div className="mt-10 text-center">
                <blockquote className="text-foreground text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto mb-2 border-l-2 border-primary/40 pl-4 text-left">
                  "AI is the new Invisible UI: we didn't just clean files; we reclaimed time."
                </blockquote>
                <p className="text-muted-foreground text-sm italic max-w-2xl mx-auto mb-6">
                  — Key takeaway from the AI Cleaner project
                </p>
                <Link to="/#projects">
                  <Button variant="outline" size="lg" className="group text-base px-8 py-5 border-border/40 hover:border-primary/50">
                    Back to Projects
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Project Tech Stack & Skills */}
        <div className="mb-16 p-8 md:p-10 rounded-2xl bg-card/40 backdrop-blur-md border border-border/30">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-10 tracking-tight">
            Project Tech Stack & Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Product Strategy', pills: ['Growth Loops', 'Data-Informed Design (Amplitude)', 'Market Expansion (APAC/China)'] },
              { title: 'AI & DesignOps', pills: ['Figma AI', 'Gemini Copilots', 'Synthetic Users', 'Automated Prototyping'] },
              { title: 'UX/UI Research', pills: ['Cohort Analysis', 'Cross-cultural UX', 'A/B Testing', 'Design Systems Scaling'] },
              { title: 'Tools', pills: ['Figma', 'Amplitude', 'Jira', 'Slack', 'Notion (DesignOps documentation)'] },
            ].map((category) => (
              <div key={category.title}>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.pills.map((pill) => (
                    <span key={pill} className="px-4 py-1.5 text-sm rounded-full bg-secondary/60 text-foreground/80 border border-border/30">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link to="/project/leadtech-design-system">
            <Button size="lg" className="group text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              View Full Documentation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>;
};
export default FeaturedCaseStudy;
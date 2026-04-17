
import React, { useState, useEffect } from 'react';
import AnimatedText from './AnimatedText';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Briefcase, Award, Globe, Code, Palette, BarChart, LineChart, Layers, Zap } from 'lucide-react';
import ExperienceSection from './about/ExperienceSection';
import EducationSection from './about/EducationSection';
import LanguagesSection from './about/LanguagesSection';
import AwardsSection from './about/AwardsSection';
import { supabase } from '@/integrations/supabase/client';

const About: React.FC = () => {
  const [cvUrl, setCvUrl] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  useEffect(() => {
    const fetchLatestCV = async () => {
      try {
        const { data, error } = await supabase.storage
          .from('cv_files')
          .list('', {
            limit: 1,
            sortBy: { column: 'created_at', order: 'desc' }
          });
          
        if (error) throw error;
        
        if (data && data.length > 0) {
          const latestFile = data[0];
          const { data: { publicUrl } } = supabase.storage
            .from('cv_files')
            .getPublicUrl(latestFile.name);
            
          setCvUrl(publicUrl);
        }
      } catch (error) {
        console.error('Error fetching CV:', error);
      }
    };
    
    fetchLatestCV();
  }, []);

  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12 bg-gradient-to-b from-background to-background/90">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          {/* Avatar */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-background shadow-xl">
                <img
                  src="/alfonso-hero.png"
                  alt="Alfonso Zamorano"
                  className="w-full h-full object-cover object-[center_15%]"
                />
              </div>
              {/* Online indicator */}
              <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-background rounded-full" />
            </div>
          </div>

          <span className="inline-block text-sm md:text-base font-medium tracking-wider mb-4 py-1 px-4 rounded-full bg-primary/20 text-primary animate-pulse">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
            <AnimatedText text="A bit about Me" className="inline-block" once />
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              Designer by craft, systems thinker by nature. I've spent 10+ years helping teams
              ship better products — building the processes, tools and culture that make great design possible.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Key Skills */}
          <div className="lg:col-span-4 space-y-12">
            {/* Download CV Button */}
            <div className="space-y-4">
              <Button 
                variant="default" 
                size="lg" 
                className="w-full group transition-all duration-300 hover:shadow-lg bg-gradient-to-r from-primary to-primary/80"
                onClick={() => window.open(cvUrl || '/alfonso-cv.pdf', '_blank')}
              >
                <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                Download CV
              </Button>
            </div>
            
            <div className="space-y-4 p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm transition-all duration-300 hover:shadow-md">
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-display font-bold">Key Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none flex items-center gap-1">
                  <Palette className="h-3 w-3" /> UI design
                </Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none flex items-center gap-1">
                  <Layers className="h-3 w-3" /> User experience (UX)
                </Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none flex items-center gap-1">
                  <Code className="h-3 w-3" /> Design Systems
                </Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none flex items-center gap-1">
                  <Briefcase className="h-3 w-3" /> Digital product design
                </Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none flex items-center gap-1">
                  <Zap className="h-3 w-3" /> DesignOps
                </Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none flex items-center gap-1">
                  <BarChart className="h-3 w-3" /> Data analysis
                </Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none flex items-center gap-1">
                  <LineChart className="h-3 w-3" /> Success metrics
                </Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none flex items-center gap-1">
                  <Palette className="h-3 w-3" /> Branding
                </Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none flex items-center gap-1">
                  <Palette className="h-3 w-3" /> Graphic design
                </Badge>
              </div>
            </div>
            
            <div className="space-y-4 p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm transition-all duration-300 hover:shadow-md">
              <div className="flex items-center space-x-2">
                <Code className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-display font-bold">Technical Skills</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-5 h-5 mt-0.5 flex items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xs font-semibold text-primary">T</span>
                  </div>
                  <p className="text-muted-foreground"><strong className="text-foreground">Tools:</strong> Figma, Sketch, Zeplin, Abstract, Jira, Confluence, Notion</p>
                </div>
                
                <div className="flex items-start space-x-2">
                  <div className="w-5 h-5 mt-0.5 flex items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xs font-semibold text-primary">M</span>
                  </div>
                  <p className="text-muted-foreground"><strong className="text-foreground">Methodologies:</strong> DesignOps, Design Thinking, Agile, SCRUM</p>
                </div>
                
                <div className="flex items-start space-x-2">
                  <div className="w-5 h-5 mt-0.5 flex items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xs font-semibold text-primary">D</span>
                  </div>
                  <p className="text-muted-foreground"><strong className="text-foreground">UI/UX Design:</strong> Wireframing, Prototyping, Research, Visual Design</p>
                </div>
                
                <div className="flex items-start space-x-2">
                  <div className="w-5 h-5 mt-0.5 flex items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xs font-semibold text-primary">B</span>
                  </div>
                  <p className="text-muted-foreground"><strong className="text-foreground">Branding & Marketing:</strong> Visual identity, Brand materials, Advertising design</p>
                </div>
                
                <div className="flex items-start space-x-2">
                  <div className="w-5 h-5 mt-0.5 flex items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xs font-semibold text-primary">A</span>
                  </div>
                  <p className="text-muted-foreground"><strong className="text-foreground">Data Analysis:</strong> Interpreting metrics, data visualization, and optimizing digital experiences</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm transition-all duration-300 hover:shadow-md">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-display font-bold">Languages</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>First Certificate in English</span>
                  <span className="text-sm text-muted-foreground">Sheffield College, UK</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>English - intermediate level, PET</span>
                  <span className="text-sm text-muted-foreground">British Council</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm transition-all duration-300 hover:shadow-md">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-display font-bold">Awards</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>1:2 BA Graphic design</span>
                  <span className="text-sm text-muted-foreground">Sheffield Hallam University (UK)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>1st FD Graphic Design</span>
                  <span className="text-sm text-muted-foreground">2007-08, Norton College, Sheffield (UK)</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Experience and Education */}
          <div className="lg:col-span-8 space-y-6">
            {/* Tab Buttons */}
            <div className="flex space-x-2 mb-6">
              <Button 
                variant={activeTab === 'experience' ? 'default' : 'outline'} 
                onClick={() => setActiveTab('experience')}
                className="flex items-center gap-2"
              >
                <Briefcase className="h-4 w-4" />
                Experience
              </Button>
              <Button 
                variant={activeTab === 'education' ? 'default' : 'outline'} 
                onClick={() => setActiveTab('education')}
                className="flex items-center gap-2"
              >
                <Award className="h-4 w-4" />
                Education
              </Button>
            </div>
            
            {/* Tab Content */}
            <div className="transition-all duration-300">
              {activeTab === 'experience' ? (
                <div className="animate-fade-in">
                  <ExperienceSection />
                </div>
              ) : (
                <div className="animate-fade-in">
                  <EducationSection />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

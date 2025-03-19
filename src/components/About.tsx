
import React, { useState, useEffect } from 'react';
import AnimatedText from './AnimatedText';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import ProfileSection from './about/ProfileSection';
import ExperienceSection from './about/ExperienceSection';
import EducationSection from './about/EducationSection';
import LanguagesSection from './about/LanguagesSection';
import AwardsSection from './about/AwardsSection';
import { supabase } from '@/integrations/supabase/client';

const About: React.FC = () => {
  const [cvUrl, setCvUrl] = useState<string | null>(null);

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
    <section id="about" className="py-20 md:py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="inline-block text-sm md:text-base font-medium tracking-wider mb-4 py-1 px-4 rounded-full bg-primary/20 text-primary">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
            <AnimatedText text="Professional Background" className="inline-block" once />
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Profile and Key Skills */}
          <div className="lg:col-span-4 space-y-12">
            <ProfileSection />
            
            {/* Download CV Button */}
            <div className="space-y-4">
              <Button 
                variant="default" 
                size="lg" 
                className="w-full group transition-all duration-300 hover:shadow-lg"
                onClick={() => window.open(cvUrl || '/alfonso-cv.pdf', '_blank')}
              >
                <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                Download CV
              </Button>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-display font-bold">Key Skills</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">UI design</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">User experience (UX)</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">Design Systems</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">Digital product design</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">DesignOps</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">Data analysis</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">Success metrics</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">Branding</Badge>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">Graphic design</Badge>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-display font-bold">Technical Skills</h3>
              <div className="space-y-2">
                <p className="text-muted-foreground"><strong className="text-foreground">Tools:</strong> Figma, Sketch, Zeplin, Abstract, Jira, Confluence, Notion</p>
                <p className="text-muted-foreground"><strong className="text-foreground">Methodologies:</strong> DesignOps, Design Thinking, Agile, SCRUM</p>
                <p className="text-muted-foreground"><strong className="text-foreground">UI/UX Design:</strong> Wireframing, Prototyping, Research, Visual Design</p>
                <p className="text-muted-foreground"><strong className="text-foreground">Branding & Marketing:</strong> Visual identity, Brand materials, Advertising design</p>
                <p className="text-muted-foreground"><strong className="text-foreground">Data Analysis:</strong> Interpreting metrics, data visualization, and optimizing digital experiences</p>
              </div>
            </div>
            
            <LanguagesSection />
            <AwardsSection />
          </div>
          
          {/* Right Column - Experience and Education */}
          <div className="lg:col-span-8 space-y-12">
            <ExperienceSection />
            <EducationSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

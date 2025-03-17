
import React from 'react';
import { ArrowDownCircle, BookOpen, Award, Briefcase, GraduationCap, Languages } from 'lucide-react';
import { Button } from './ui/button';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Profile Column */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="mr-2 h-5 w-5 text-primary" />
                Professional Profile
              </h3>
              <p className="text-muted-foreground mb-6">
                Digital product designer with extensive experience in DesignOps
                and Product design. Specialized in optimizing workflows,
                improving collaboration, and enhancing efficiency within design
                teams. Expert in Figma, Sketch, Zeplin, and Abstract, with an agile
                mindset through SCRUM methodologies and tools like
                Jira/Confluence.
              </p>
              
              <h4 className="font-medium mb-3">Key skills:</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>UI design and user experience (UX)</li>
                <li>Creation and maintenance of Design Systems</li>
                <li>Digital product design and growth strategies</li>
                <li>Automation and process optimization within design teams (DesignOps)</li>
                <li>Quantitative and qualitative data analysis</li>
                <li>Evaluation of success metrics and insight-based optimization</li>
                <li>Branding and graphic design</li>
              </ul>
              
              <div className="mt-6">
                <Button className="w-full" onClick={() => window.open('/alfonso-cv.pdf', '_blank')}>
                  <ArrowDownCircle className="mr-2 h-4 w-4" />
                  Download Full CV
                </Button>
              </div>
            </div>
          </div>
          
          {/* Experience Column */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-lg p-6 shadow-sm mb-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Briefcase className="mr-2 h-5 w-5 text-primary" />
                Experience
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4 pb-2">
                  <h4 className="font-semibold">Leadtech group</h4>
                  <p className="text-sm text-primary font-medium">Senior Product Designer / DesignOPS</p>
                  <p className="text-xs text-muted-foreground mb-3">Oct. 2018 - Present, Barcelona</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Implemented and optimized DesignOps processes</li>
                    <li>Created and maintained the Design System</li>
                    <li>Designed digital experiences for iOS and Android apps</li>
                    <li>Reduced data load times by 15% and improved visual consistency by 25%</li>
                    <li>Developed dashboards and data visualizations</li>
                    <li>Applied data analysis to enhance user experience</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-muted pl-4 pb-2">
                  <h4 className="font-semibold">Natevoo</h4>
                  <p className="text-sm text-primary font-medium">Senior UX Designer</p>
                  <p className="text-xs text-muted-foreground mb-3">Jun. 2018 - Oct. 2018, Barcelona - 5 mos</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Conceptualized and designed digital products focused on user experience</li>
                    <li>Applied UX research methodologies to validate solutions</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-muted pl-4 pb-2">
                  <h4 className="font-semibold">Wanup</h4>
                  <p className="text-sm text-primary font-medium">Senior Product Designer</p>
                  <p className="text-xs text-muted-foreground mb-3">Aug. 2016 - Jun. 2018, Barcelona - 1 yr 11 mos</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Art direction for digital and offline projects</li>
                    <li>Designed user experiences for e-commerce and SaSS platform</li>
                    <li>Managed a team of 4 designers</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-muted pl-4">
                  <h4 className="font-semibold">PIMPAM Estudio</h4>
                  <p className="text-sm text-primary font-medium">Senior Designer</p>
                  <p className="text-xs text-muted-foreground mb-3">Mar. 2011 - Aug. 2016, Valencia - 5 yrs 6 mos</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                    <li>Developed applications with Digital Publishing Suite</li>
                    <li>Designed print publications</li>
                    <li>Notable clients: Adidas, Amnesia, Gandia Blasco, among others</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Education and Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                  Education
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">DesignOps Course, Elisava</h4>
                    <p className="text-xs text-muted-foreground">Feb 2024 - March 2024, Barcelona, Spain</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Postgraduate in User Experience (UX) Design, UOC</h4>
                    <p className="text-xs text-muted-foreground">2017 - 2018, Barcelona, Spain</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Sheffield Hallam University, BA - Graphic Designer</h4>
                    <p className="text-xs text-muted-foreground">2007 - 2008, Sheffield, UK</p>
                    <p className="text-xs">Typography - Advertising - Design - Art</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Sheffield Hallam University, Foundation Degree Design</h4>
                    <p className="text-xs text-muted-foreground">2005 - 2007, Sheffield, UK</p>
                    <p className="text-xs">Typography - Design - Art - Fundamentals</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-card rounded-lg p-6 shadow-sm mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Languages className="mr-2 h-5 w-5 text-primary" />
                    Languages
                  </h3>
                  
                  <div className="space-y-2">
                    <div>
                      <p className="font-medium">First Certificate in English (Sheffield College, UK), FCE</p>
                      <p className="text-xs text-muted-foreground">British Council Qualifications</p>
                    </div>
                    
                    <div>
                      <p className="font-medium">English - intermediate level, PET</p>
                      <p className="text-xs text-muted-foreground">British Council Qualifications (Sheffield College, UK)</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Award className="mr-2 h-5 w-5 text-primary" />
                    Awards
                  </h3>
                  
                  <div className="space-y-2">
                    <div>
                      <p className="font-medium">1:2 BA Graphic design</p>
                      <p className="text-xs text-muted-foreground">Sheffield Hallam University (UK)</p>
                    </div>
                    
                    <div>
                      <p className="font-medium">1st FD Graphic Design</p>
                      <p className="text-xs text-muted-foreground">2007-08, Norton College, Sheffield, (UK)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

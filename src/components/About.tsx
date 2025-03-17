
import React from 'react';
import { ArrowDownCircle, BookOpen, Award, Briefcase, GraduationCap, Languages, Code, LineChart, Palette, Zap, FileText } from 'lucide-react';
import { Button } from './ui/button';
import AnimatedText from './AnimatedText';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <span className="inline-block text-sm md:text-base font-medium tracking-wider mb-4 py-1 px-4 rounded-full bg-primary/20 text-primary">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            <AnimatedText text="Professional Background" className="inline-block" once />
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Profile Column */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-6 shadow-md border border-border/50 hover:border-primary/20 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-5 flex items-center">
                <BookOpen className="mr-2 h-5 w-5 text-primary" />
                Professional Profile
              </h3>
              
              <div className="relative">
                <div className="absolute -left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/80 to-primary/20"></div>
                <p className="text-muted-foreground mb-6 pl-4">
                  Digital product designer with extensive experience in DesignOps
                  and Product design. Specialized in optimizing workflows,
                  improving collaboration, and enhancing efficiency within design
                  teams. Expert in Figma, Sketch, Zeplin, and Abstract, with an agile
                  mindset through SCRUM methodologies and tools like
                  Jira/Confluence.
                </p>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4 flex items-center text-lg">
                  <Zap className="mr-2 h-5 w-5 text-primary" />
                  Core Competencies
                </h4>
                
                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-3 hover:bg-muted/80 transition-colors">
                    <Palette className="h-4 w-4 text-primary" />
                    <span className="text-sm">UI/UX Design</span>
                  </div>
                  <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-3 hover:bg-muted/80 transition-colors">
                    <Code className="h-4 w-4 text-primary" />
                    <span className="text-sm">Design Systems</span>
                  </div>
                  <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-3 hover:bg-muted/80 transition-colors">
                    <LineChart className="h-4 w-4 text-primary" />
                    <span className="text-sm">Data Analysis</span>
                  </div>
                  <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-3 hover:bg-muted/80 transition-colors">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-sm">DesignOps</span>
                  </div>
                </div>
                
                <ul className="space-y-3 text-muted-foreground mb-8">
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                    <span>Creation and maintenance of Design Systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                    <span>Digital product design and growth strategies</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                    <span>Automation and process optimization within design teams</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                    <span>Evaluation of success metrics and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                    <span>Branding and graphic design</span>
                  </li>
                </ul>
                
                <div className="flex flex-col gap-3">
                  <Button className="w-full group" onClick={() => window.open('/alfonso-cv.pdf', '_blank')}>
                    <ArrowDownCircle className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                    Download Full CV
                  </Button>
                  
                  <Button variant="outline" className="w-full group border-primary text-primary hover:bg-primary hover:text-white" onClick={() => window.open('/alfonso-cv.pdf', '_blank')}>
                    <FileText className="mr-2 h-4 w-4" />
                    Download PDF Document
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Experience Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card rounded-xl p-8 shadow-md border border-border/50 hover:border-primary/20 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-8 flex items-center">
                <Briefcase className="mr-2 h-5 w-5 text-primary" />
                Experience
              </h3>
              
              <div className="space-y-10">
                <div className="relative">
                  <div className="absolute -left-3 top-0 h-full w-0.5 bg-primary/50"></div>
                  <div className="absolute -left-5 top-0 h-6 w-6 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                  </div>
                  
                  <div className="pl-6">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="font-semibold text-lg">Leadtech group</h4>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Current</span>
                    </div>
                    <p className="text-sm text-primary font-medium">Senior Product Designer / DesignOPS</p>
                    <p className="text-xs text-muted-foreground mb-3">Oct. 2018 - Present, Barcelona</p>
                    
                    <ul className="mt-4 space-y-2">
                      <li className="flex gap-2 items-start text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                        <span>Implemented and optimized DesignOps processes to enhance team collaboration and efficiency</span>
                      </li>
                      <li className="flex gap-2 items-start text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                        <span>Created and maintained the Design System, ensuring visual consistency and scalability</span>
                      </li>
                      <li className="flex gap-2 items-start text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                        <span>Reduced data load times by 15% and improved visual consistency by 25%</span>
                      </li>
                      <li className="flex gap-2 items-start text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                        <span>Developed dashboards and data visualizations, increasing stakeholder engagement by 20%</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-3 top-0 h-full w-0.5 bg-muted/70"></div>
                  <div className="absolute -left-5 top-0 h-6 w-6 rounded-full bg-card border-2 border-muted/70 flex items-center justify-center">
                    <div className="h-2 w-2 bg-muted/70 rounded-full"></div>
                  </div>
                  
                  <div className="pl-6">
                    <h4 className="font-semibold text-lg">Natevoo</h4>
                    <p className="text-sm text-primary font-medium">Senior UX Designer</p>
                    <p className="text-xs text-muted-foreground mb-3">Jun. 2018 - Oct. 2018, Barcelona - 5 mos</p>
                    
                    <ul className="mt-4 space-y-2">
                      <li className="flex gap-2 items-start text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-muted/70 mt-2"></div>
                        <span>Conceptualized and designed digital products focused on user experience</span>
                      </li>
                      <li className="flex gap-2 items-start text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-muted/70 mt-2"></div>
                        <span>Applied UX research methodologies to validate solutions and improve usability</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-3 top-0 h-full w-0.5 bg-muted/70"></div>
                  <div className="absolute -left-5 top-0 h-6 w-6 rounded-full bg-card border-2 border-muted/70 flex items-center justify-center">
                    <div className="h-2 w-2 bg-muted/70 rounded-full"></div>
                  </div>
                  
                  <div className="pl-6">
                    <h4 className="font-semibold text-lg">Wanup</h4>
                    <p className="text-sm text-primary font-medium">Senior Product Designer</p>
                    <p className="text-xs text-muted-foreground mb-3">Aug. 2016 - Jun. 2018, Barcelona - 1 yr 11 mos</p>
                    
                    <ul className="mt-4 space-y-2">
                      <li className="flex gap-2 items-start text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-muted/70 mt-2"></div>
                        <span>Art direction for digital and offline projects</span>
                      </li>
                      <li className="flex gap-2 items-start text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-muted/70 mt-2"></div>
                        <span>Designed user experiences for e-commerce and SaSS platform</span>
                      </li>
                      <li className="flex gap-2 items-start text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-muted/70 mt-2"></div>
                        <span>Managed a team of 4 designers to ensure brand identity alignment</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-3 top-0 h-full w-0.5 bg-muted/70"></div>
                  <div className="absolute -left-5 top-0 h-6 w-6 rounded-full bg-card border-2 border-muted/70 flex items-center justify-center">
                    <div className="h-2 w-2 bg-muted/70 rounded-full"></div>
                  </div>
                  
                  <div className="pl-6">
                    <h4 className="font-semibold text-lg">PIMPAM Estudio</h4>
                    <p className="text-sm text-primary font-medium">Senior Designer</p>
                    <p className="text-xs text-muted-foreground mb-3">Mar. 2011 - Aug. 2016, Valencia - 5 yrs 6 mos</p>
                    
                    <ul className="mt-4 space-y-2">
                      <li className="flex gap-2 items-start text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-muted/70 mt-2"></div>
                        <span>Developed applications with Digital Publishing Suite and designed print publications</span>
                      </li>
                      <li className="flex gap-2 items-start text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-muted/70 mt-2"></div>
                        <span>Notable clients: Adidas, Amnesia, Gandia Blasco, among others</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Education and Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-6 shadow-md border border-border/50 hover:border-primary/20 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-5 flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                  Education
                </h3>
                
                <div className="space-y-6">
                  <div className="relative pl-5 border-l border-primary/30">
                    <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary/60"></div>
                    <h4 className="font-medium">DesignOps Course, Elisava</h4>
                    <p className="text-xs text-muted-foreground">Feb 2024 - March 2024, Barcelona, Spain</p>
                  </div>
                  
                  <div className="relative pl-5 border-l border-primary/20">
                    <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary/40"></div>
                    <h4 className="font-medium">Postgraduate in User Experience (UX) Design, UOC</h4>
                    <p className="text-xs text-muted-foreground">2017 - 2018, Barcelona, Spain</p>
                  </div>
                  
                  <div className="relative pl-5 border-l border-primary/10">
                    <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary/30"></div>
                    <h4 className="font-medium">Sheffield Hallam University, BA - Graphic Designer</h4>
                    <p className="text-xs text-muted-foreground">2007 - 2008, Sheffield, UK</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">Typography - Advertising - Design - Art</p>
                  </div>
                  
                  <div className="relative pl-5 border-l border-primary/5">
                    <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary/20"></div>
                    <h4 className="font-medium">Sheffield Hallam University, Foundation Degree Design</h4>
                    <p className="text-xs text-muted-foreground">2005 - 2007, Sheffield, UK</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">Typography - Design - Art - Fundamentals</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-card rounded-xl p-6 shadow-md border border-border/50 hover:border-primary/20 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-5 flex items-center">
                    <Languages className="mr-2 h-5 w-5 text-primary" />
                    Languages
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="relative pl-5 border-l border-primary/30">
                      <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary/60"></div>
                      <p className="font-medium">First Certificate in English (FCE)</p>
                      <p className="text-xs text-muted-foreground">British Council Qualifications, Sheffield College, UK</p>
                    </div>
                    
                    <div className="relative pl-5 border-l border-primary/20">
                      <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary/40"></div>
                      <p className="font-medium">English - intermediate level, PET</p>
                      <p className="text-xs text-muted-foreground">British Council Qualifications, Sheffield College, UK</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card rounded-xl p-6 shadow-md border border-border/50 hover:border-primary/20 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-5 flex items-center">
                    <Award className="mr-2 h-5 w-5 text-primary" />
                    Awards
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="relative pl-5 border-l border-primary/30">
                      <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary/60"></div>
                      <p className="font-medium">1:2 BA Graphic design</p>
                      <p className="text-xs text-muted-foreground">Sheffield Hallam University (UK)</p>
                    </div>
                    
                    <div className="relative pl-5 border-l border-primary/20">
                      <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary/40"></div>
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

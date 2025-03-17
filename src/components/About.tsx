
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedText from './AnimatedText';
import { GraduationCap, Briefcase, Languages, Trophy, CircleUser, Wrench } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-gradient-to-b from-black/50 to-black/70">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-sm md:text-base font-medium tracking-wider mb-4 py-1 px-4 rounded-full bg-primary/20 text-primary">
            About Me
          </span>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">
            <AnimatedText text="Professional Profile" className="inline-block" once />
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Digital product designer with extensive experience in DesignOps
            and Product design. Specialized in optimizing workflows,
            improving collaboration, and enhancing efficiency within design teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          <Card className="bg-secondary/50 border-secondary/20">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-2">
                <CircleUser className="h-5 w-5 text-primary" />
                <CardTitle className="text-xl">Professional Profile</CardTitle>
              </div>
              <CardDescription>
                Digital product designer specializing in DesignOps and Product design
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Expert in Figma, Sketch, Zeplin, and Abstract, with an agile
                mindset through SCRUM methodologies and tools like
                Jira/Confluence.
              </p>
              <h4 className="font-semibold mb-2">Key skills:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>UI design and user experience (UX)</li>
                <li>Creation and maintenance of Design Systems</li>
                <li>Digital product design and growth strategies</li>
                <li>Automation and process optimization within design teams (DesignOps)</li>
                <li>Quantitative and qualitative data analysis to improve decision-making</li>
                <li>Evaluation of success metrics and insight-based optimization</li>
                <li>Branding and graphic design</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-secondary/50 border-secondary/20">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-2">
                <Wrench className="h-5 w-5 text-primary" />
                <CardTitle className="text-xl">Technical Skills</CardTitle>
              </div>
              <CardDescription>
                Tools, methodologies and specializations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Tools:</h4>
                <p className="text-sm text-muted-foreground">Figma, Sketch, Zeplin, Abstract, Jira, Confluence, Notion</p>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Methodologies:</h4>
                <p className="text-sm text-muted-foreground">DesignOps, Design Thinking, Agile, SCRUM</p>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">UI/UX Design:</h4>
                <p className="text-sm text-muted-foreground">Wireframing, Prototyping, Research, Visual Design</p>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Branding & Marketing:</h4>
                <p className="text-sm text-muted-foreground">Visual identity, Brand materials, Advertising design</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Data Analysis:</h4>
                <p className="text-sm text-muted-foreground">Interpreting metrics, data visualization, and optimizing digital experiences</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <Card className="bg-secondary/50 border-secondary/20">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <CardTitle className="text-xl">Experience</CardTitle>
              </div>
              <CardDescription>
                Professional career path and achievements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-2 border-primary/30 pl-4 pb-6">
                  <h4 className="font-bold text-white">Leadtech group</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium">Senior Product Designer / DesignOPS</span>
                    <span className="text-xs text-muted-foreground">Oct. 2018 - Present, Barcelona</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Implemented and optimized DesignOps processes to enhance team collaboration and efficiency.</li>
                    <li>Created and maintained the Design System, ensuring visual consistency and scalability.</li>
                    <li>Designed digital experiences for different stages of the customer journey, focusing on iOS and Android apps.</li>
                    <li>Reduced data load times by 15% and improved visual consistency by 25%.</li>
                    <li>Developed dashboards and data visualizations, increasing stakeholder engagement by 20%.</li>
                    <li>Applied quantitative and qualitative data analysis to measure and enhance user experience.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary/30 pl-4 pb-6">
                  <h4 className="font-bold text-white">Natevoo</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium">Senior UX Designer</span>
                    <span className="text-xs text-muted-foreground">Jun. 2018 - Oct. 2018, Barcelona - 5 mos</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Conceptualized and designed digital products focused on user experience.</li>
                    <li>Applied UX research methodologies to validate solutions and improve usability.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary/30 pl-4 pb-6">
                  <h4 className="font-bold text-white">Wanup</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium">Senior Product Designer</span>
                    <span className="text-xs text-muted-foreground">Aug. 2016 - Jun. 2018, Barcelona 1 yrs-11 mos</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Art direction for digital and offline projects.</li>
                    <li>Designed user experiences for e-commerce and SaSS platform marketing materials.</li>
                    <li>Managed a team of 4 designers to ensure brand identity alignment.</li>
                  </ul>
                </div>

                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-bold text-white">PIMPAM Estudio</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium">Senior Designer</span>
                    <span className="text-xs text-muted-foreground">Mar. 2011 - Aug. 2016, Valencia 5 yrs-6 mos</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Developed applications with Digital Publishing Suite and designed print publications.</li>
                    <li>Notable clients: Adidas, Amnesia, Gandia Blasco, among others.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Card className="bg-secondary/50 border-secondary/20">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                <CardTitle className="text-xl">Education</CardTitle>
              </div>
              <CardDescription>
                Academic background and professional development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white">DesignOps Course, Elisava</h4>
                  <p className="text-xs text-muted-foreground">Feb 2024 -- March 2024, Barcelona, Spain</p>
                </div>
                <div>
                  <h4 className="font-bold text-white">Postgraduate in User Experience (UX) Design, UOC</h4>
                  <p className="text-xs text-muted-foreground">2017 -- 2018, Barcelona, Spain</p>
                </div>
                <div>
                  <h4 className="font-bold text-white">Sheffield Hallam University, BA - Graphic Designer</h4>
                  <p className="text-xs text-muted-foreground">2007 -- 2008, Sheffield, UK</p>
                  <p className="text-sm text-muted-foreground mt-1">Typography - Advertising - Design - Art</p>
                </div>
                <div>
                  <h4 className="font-bold text-white">Sheffield Hallam University, Foundation Degree Design</h4>
                  <p className="text-xs text-muted-foreground">2005 -- 2007, Sheffield, UK</p>
                  <p className="text-sm text-muted-foreground mt-1">Typography - Design - Art - Fundamentals</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 gap-6">
            <Card className="bg-secondary/50 border-secondary/20">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <Languages className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl">Languages</CardTitle>
                </div>
                <CardDescription>
                  Language proficiency and certifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <p className="font-medium">First Certificate in English (Sheffield College, UK), FCE</p>
                    <p className="text-sm text-muted-foreground">British Council Qualifications</p>
                  </li>
                  <li>
                    <p className="font-medium">English - intermediate level, PET</p>
                    <p className="text-sm text-muted-foreground">British Council Qualifications (Sheffield College, UK)</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-secondary/50 border-secondary/20">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl">Awards</CardTitle>
                </div>
                <CardDescription>
                  Academic and professional achievements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <p className="font-medium">1:2 BA Graphic design</p>
                    <p className="text-sm text-muted-foreground">Sheffield Hallam University (UK)</p>
                  </li>
                  <li>
                    <p className="font-medium">1st FD Graphic Design</p>
                    <p className="text-sm text-muted-foreground">2007-08, Norton College, Sheffield, (UK)</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

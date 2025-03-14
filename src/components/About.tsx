
import React from 'react';
import AnimatedText from './AnimatedText';
import { Briefcase, Lightbulb, Users, Award, GraduationCap, Languages, BarChart3 } from 'lucide-react';

const skills = [
  'UI design and user experience (UX)',
  'Creation and maintenance of Design Systems',
  'Digital product design and growth strategies',
  'Automation and process optimization within design teams (DesignOps)',
  'Quantitative and qualitative data analysis',
  'Evaluation of success metrics and insight-based optimization',
  'Branding and graphic design'
];

const tools = [
  'Figma', 'Sketch', 'Zeplin', 'Abstract', 'Jira', 'Confluence', 'Notion'
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="inline-block text-sm md:text-base font-medium tracking-wider mb-4 py-1 px-4 rounded-full bg-primary/10 text-primary">
            About Me
          </span>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">
            <AnimatedText text="Professional" className="block mb-2" once />
            <AnimatedText text="Profile" className="text-gradient block" once delay={200} />
          </h2>
          
          <div className="max-w-3xl">
            <p className="text-muted-foreground mb-4">
              Digital product designer with extensive experience in DesignOps and Product design. Specialized in optimizing workflows, improving collaboration, and enhancing efficiency within design teams.
            </p>
            <p className="text-muted-foreground">
              Expert in Figma, Sketch, Zeplin, and Abstract, with an agile mindset through SCRUM methodologies and tools like Jira/Confluence.
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold">Experience</h3>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <div className="glass rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold mb-1">Senior Product Designer / DesignOPS</h4>
                  <p className="text-primary font-medium">Leadtech group</p>
                </div>
                <p className="text-muted-foreground text-sm mt-2 md:mt-0">Oct. 2018 - Present, Barcelona</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Implemented and optimized DesignOps processes to enhance team collaboration and efficiency.</li>
                <li>• Created and maintained the Design System, ensuring visual consistency and scalability.</li>
                <li>• Designed digital experiences for different stages of the customer journey, focusing on iOS and Android apps.</li>
                <li>• Reduced data load times by 15% and improved visual consistency by 25%.</li>
                <li>• Developed dashboards and data visualizations, increasing stakeholder engagement by 20%.</li>
                <li>• Applied quantitative and qualitative data analysis to measure and enhance user experience.</li>
              </ul>
            </div>
            
            <div className="glass rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold mb-1">Senior UX Designer</h4>
                  <p className="text-primary font-medium">Natevoo</p>
                </div>
                <p className="text-muted-foreground text-sm mt-2 md:mt-0">Jun. 2018 - Oct. 2018, Barcelona (5 mos)</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Conceptualized and designed digital products focused on user experience.</li>
                <li>• Applied UX research methodologies to validate solutions and improve usability.</li>
              </ul>
            </div>
            
            <div className="glass rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold mb-1">Senior Product Designer</h4>
                  <p className="text-primary font-medium">Wanup</p>
                </div>
                <p className="text-muted-foreground text-sm mt-2 md:mt-0">Aug. 2016 - Jun. 2018, Barcelona (1 yr 11 mos)</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Art direction for digital and offline projects.</li>
                <li>• Designed user experiences for e-commerce and SaaS platform marketing materials.</li>
                <li>• Managed a team of 4 designers to ensure brand identity alignment.</li>
              </ul>
            </div>
            
            <div className="glass rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold mb-1">Senior Designer</h4>
                  <p className="text-primary font-medium">PIMPAM Estudio</p>
                </div>
                <p className="text-muted-foreground text-sm mt-2 md:mt-0">Mar. 2011 - Aug. 2016, Valencia (5 yrs 6 mos)</p>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Developed applications with Digital Publishing Suite and designed print publications.</li>
                <li>• Notable clients: Adidas, Amnesia, Gandia Blasco, among others.</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Education Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold">Education</h3>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <div className="glass rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <h4 className="text-xl font-bold">DesignOps Course</h4>
                <p className="text-muted-foreground text-sm mt-2 md:mt-0">Feb 2024 - March 2024</p>
              </div>
              <p className="text-primary font-medium mb-1">Elisava, Barcelona, Spain</p>
            </div>
            
            <div className="glass rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <h4 className="text-xl font-bold">Postgraduate in User Experience (UX) Design</h4>
                <p className="text-muted-foreground text-sm mt-2 md:mt-0">2017 - 2018</p>
              </div>
              <p className="text-primary font-medium mb-1">UOC, Barcelona, Spain</p>
            </div>
            
            <div className="glass rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <h4 className="text-xl font-bold">BA - Graphic Design</h4>
                <p className="text-muted-foreground text-sm mt-2 md:mt-0">2007 - 2008</p>
              </div>
              <p className="text-primary font-medium mb-1">Sheffield Hallam University, UK</p>
              <p className="text-muted-foreground text-sm">Typography - Advertising - Design - Art</p>
            </div>
            
            <div className="glass rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <h4 className="text-xl font-bold">Foundation Degree Design</h4>
                <p className="text-muted-foreground text-sm mt-2 md:mt-0">2005 - 2007</p>
              </div>
              <p className="text-primary font-medium mb-1">Sheffield Hallam University, UK</p>
              <p className="text-muted-foreground text-sm">Typography - Design - Art - Fundamentals</p>
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold">Skills</h3>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="glass rounded-xl p-6 mb-8">
              <h4 className="text-xl font-bold mb-4">Key Skills</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-secondary rounded-full text-sm font-medium transition-all hover:bg-primary/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4">Technical Skills</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium mb-2">Tools</p>
                    <div className="flex flex-wrap gap-2">
                      {tools.map((tool) => (
                        <span 
                          key={tool}
                          className="px-3 py-1 bg-secondary/70 rounded-full text-sm transition-all hover:bg-primary/10"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Methodologies</p>
                    <p className="text-sm text-muted-foreground">DesignOps, Design Thinking, Agile, SCRUM</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">UI/UX Design</p>
                    <p className="text-sm text-muted-foreground">Wireframing, Prototyping, Research, Visual Design</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Branding & Marketing</p>
                    <p className="text-sm text-muted-foreground">Visual identity, Brand materials, Advertising design</p>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Data Analysis</p>
                    <p className="text-sm text-muted-foreground">Interpreting metrics, data visualization, optimizing digital experiences</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="glass rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Languages className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold">Languages</h4>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• First Certificate in English (FCE), Sheffield College, UK</li>
                    <li>• English - intermediate level (PET), British Council Qualifications</li>
                  </ul>
                </div>
                
                <div className="glass rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold">Awards</h4>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• 1:2 BA Graphic design, Sheffield Hallam University (UK)</li>
                    <li>• 1st FD Graphic Design, 2007-08, Norton College, Sheffield (UK)</li>
                  </ul>
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

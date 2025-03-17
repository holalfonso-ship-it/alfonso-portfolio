
import React from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { CheckCheck, Briefcase, GraduationCap, Languages, Award } from 'lucide-react';

export const AboutContent: React.FC = () => {
  return (
    <div className="space-y-16">
      <div>
        <h2 className="text-3xl font-bold mb-6">Professional Profile</h2>
        <p className="text-lg mb-6">
          Digital product designer with extensive experience in DesignOps
          and Product design. Specialized in optimizing workflows,
          improving collaboration, and enhancing efficiency within design
          teams. Expert in Figma, Sketch, Zeplin, and Abstract, with an agile
          mindset through SCRUM methodologies and tools like
          Jira/Confluence.
        </p>
        
        <h3 className="text-xl font-bold mb-4">Key skills:</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
          <li className="flex items-center gap-2">
            <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
            <span>UI design and user experience (UX)</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
            <span>Creation and maintenance of Design Systems</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
            <span>Digital product design and growth strategies</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
            <span>Automation and process optimization within design teams (DesignOps)</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
            <span>Quantitative and qualitative data analysis to improve decision-making</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
            <span>Evaluation of success metrics and insight-based optimization</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
            <span>Branding and graphic design</span>
          </li>
        </ul>
      </div>
      
      <div>
        <h2 className="text-3xl font-bold mb-6 flex items-center">
          <Briefcase className="mr-3 h-8 w-8 text-primary" /> Experience
        </h2>
        
        <div className="space-y-8">
          <div className="border-l-2 border-primary/30 pl-6 relative">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
            <h3 className="text-xl font-bold">Leadtech group</h3>
            <p className="text-muted-foreground mb-2">Senior Product Designer / DesignOPS</p>
            <p className="text-sm text-muted-foreground mb-4">Oct. 2018 - Present, Barcelona</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Implemented and optimized DesignOps processes to enhance team collaboration and efficiency.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Created and maintained the Design System, ensuring visual consistency and scalability.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Designed digital experiences for different stages of the customer journey, focusing on iOS and Android apps.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Reduced data load times by 15% and improved visual consistency by 25%.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Developed dashboards and data visualizations, increasing stakeholder engagement by 20%.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Applied quantitative and qualitative data analysis to measure and enhance user experience.</span>
              </li>
            </ul>
          </div>
          
          <div className="border-l-2 border-primary/30 pl-6 relative">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
            <h3 className="text-xl font-bold">Natevoo</h3>
            <p className="text-muted-foreground mb-2">Senior UX Designer</p>
            <p className="text-sm text-muted-foreground mb-4">Jun. 2018 - Oct. 2018, Barcelona - 5 mos</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Conceptualized and designed digital products focused on user experience.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Applied UX research methodologies to validate solutions and improve usability.</span>
              </li>
            </ul>
          </div>
          
          <div className="border-l-2 border-primary/30 pl-6 relative">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
            <h3 className="text-xl font-bold">Wanup</h3>
            <p className="text-muted-foreground mb-2">Senior Product Designer</p>
            <p className="text-sm text-muted-foreground mb-4">Aug. 2016 - Jun. 2018, Barcelona 1 yrs-11 mos</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Art direction for digital and offline projects.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Designed user experiences for e-commerce and SaSS platform marketing materials.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Managed a team of 4 designers to ensure brand identity alignment.</span>
              </li>
            </ul>
          </div>
          
          <div className="border-l-2 border-primary/30 pl-6 relative">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
            <h3 className="text-xl font-bold">PIMPAM Estudio</h3>
            <p className="text-muted-foreground mb-2">Senior Designer</p>
            <p className="text-sm text-muted-foreground mb-4">Mar. 2011 - Aug. 2016, Valencia 5 yrs-6 mos</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Developed applications with Digital Publishing Suite and designed print publications.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Notable clients: Adidas, Amnesia, Gandia Blasco, among others.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <GraduationCap className="mr-3 h-8 w-8 text-primary" /> Education
          </h2>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold">DesignOps Course, Elisava</h3>
                <p className="text-sm text-muted-foreground">Feb 2024 - March 2024, Barcelona, Spain</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold">Postgraduate in User Experience (UX) Design, UOC</h3>
                <p className="text-sm text-muted-foreground">2017 - 2018, Barcelona, Spain</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold">Sheffield Hallam University, BA - Graphic Designer</h3>
                <p className="text-sm text-muted-foreground">2007 - 2008, Sheffield, UK</p>
                <p className="text-sm mt-2">Typography - Advertising - Design - Art</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold">Sheffield Hallam University, Foundation Degree Design</h3>
                <p className="text-sm text-muted-foreground">2005 - 2007, Sheffield, UK</p>
                <p className="text-sm mt-2">Typography - Design - Art - Fundamentals</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Languages className="mr-3 h-8 w-8 text-primary" /> Languages
            </h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold">First Certificate in English (FCE)</h3>
                  <p className="text-sm text-muted-foreground">Sheffield College, UK</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold">English - Intermediate level, PET</h3>
                  <p className="text-sm text-muted-foreground">British Council Qualifications (Sheffield College, UK)</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Award className="mr-3 h-8 w-8 text-primary" /> Awards
            </h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold">1:2 BA Graphic design</h3>
                  <p className="text-sm text-muted-foreground">Sheffield Hallam University (UK)</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold">1st FD Graphic Design</h3>
                  <p className="text-sm text-muted-foreground">2007-08, Norton College, Sheffield, (UK)</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Tools:</strong> Figma, Sketch, Zeplin, Abstract, Jira, Confluence, Notion</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Methodologies:</strong> DesignOps, Design Thinking, Agile, SCRUM</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>UI/UX Design:</strong> Wireframing, Prototyping, Research, Visual Design</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Branding & Marketing:</strong> Visual identity, Brand materials, Advertising design</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Data Analysis:</strong> Interpreting metrics, data visualization, and optimizing digital experiences</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

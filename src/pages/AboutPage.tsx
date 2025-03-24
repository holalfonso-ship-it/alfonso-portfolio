import React from 'react';
import TransitionEffect from '@/components/TransitionEffect';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Briefcase, GraduationCap, Languages, Award, Lightbulb } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <TransitionEffect />
      <div className="pt-32 pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">About Me</h1>

          {/* Professional Profile */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Lightbulb className="mr-2 h-6 w-6 text-primary" />
              Professional Profile
            </h2>
            <div className="prose prose-lg dark:prose-invert">
              <p>
                Digital product designer with extensive experience in DesignOps
                and Product design. Specialized in optimizing workflows,
                improving collaboration, and enhancing efficiency within design
                teams. Expert in Figma, Sketch, Zeplin, and Abstract, with an agile
                mindset through SCRUM methodologies and tools like
                Jira/Confluence.
              </p>
              
              <div className="mt-6">
                <h3 className="text-xl font-medium mb-3">Key skills:</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>UI design and user experience (UX)</li>
                  <li>Creation and maintenance of Design Systems</li>
                  <li>Digital product design and growth strategies</li>
                  <li>Automation and process optimization within design teams (DesignOps)</li>
                  <li>Quantitative and qualitative data analysis to improve decision-making</li>
                  <li>Evaluation of success metrics and insight-based optimization</li>
                  <li>Branding and graphic design</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Briefcase className="mr-2 h-6 w-6 text-primary" />
              Experience
            </h2>
            <div className="space-y-8">
              <div className="relative border-l border-muted pl-6 pb-6">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px]"></div>
                <div className="mb-2 flex items-center">
                  <h3 className="text-xl font-semibold">Senior Product Designer / DesignOPS</h3>
                  <Badge className="ml-3">Current</Badge>
                </div>
                <p className="text-muted-foreground mb-2">Leadtech group | Oct. 2018 - Present, Barcelona</p>
                <ul className="space-y-2 list-disc pl-5 mt-4">
                  <li>Implemented and optimized DesignOps processes to enhance team collaboration and efficiency.</li>
                  <li>Created and maintained the Design System, ensuring visual consistency and scalability.</li>
                  <li>Designed digital experiences for different stages of the customer journey, focusing on iOS and Android apps.</li>
                  <li>Reduced data load times by 15% and improved visual consistency by 25%.</li>
                  <li>Developed dashboards and data visualizations, increasing stakeholder engagement by 20%.</li>
                  <li>Applied quantitative and qualitative data analysis to measure and enhance user experience.</li>
                </ul>
              </div>
              
              <div className="relative border-l border-muted pl-6 pb-6">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px]"></div>
                <h3 className="text-xl font-semibold mb-2">Senior UX Designer</h3>
                <p className="text-muted-foreground mb-2">Natevoo | Jun. 2018 - Oct. 2018, Barcelona - 5 mos</p>
                <ul className="space-y-2 list-disc pl-5 mt-4">
                  <li>Conceptualized and designed digital products focused on user experience.</li>
                  <li>Applied UX research methodologies to validate solutions and improve usability.</li>
                </ul>
              </div>
              
              <div className="relative border-l border-muted pl-6 pb-6">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px]"></div>
                <h3 className="text-xl font-semibold mb-2">Senior Product Designer</h3>
                <p className="text-muted-foreground mb-2">Wanup | Aug. 2016 - Jun. 2018, Barcelona - 1 yr 11 mos</p>
                <ul className="space-y-2 list-disc pl-5 mt-4">
                  <li>Art direction for digital and offline projects.</li>
                  <li>Designed user experiences for e-commerce and SaSS platform marketing materials.</li>
                  <li>Managed a team of 4 designers to ensure brand identity alignment.</li>
                </ul>
              </div>
              
              <div className="relative border-l border-muted pl-6">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px]"></div>
                <h3 className="text-xl font-semibold mb-2">Senior Designer</h3>
                <p className="text-muted-foreground mb-2">PIMPAM Estudio | Mar. 2011 - Aug. 2016, Valencia - 5 yrs 6 mos</p>
                <ul className="space-y-2 list-disc pl-5 mt-4">
                  <li>Developed applications with Digital Publishing Suite and designed print publications.</li>
                  <li>Notable clients: Adidas, Amnesia, Gandia Blasco, among others.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-2 h-6 w-6 text-primary" />
              Education
            </h2>
            <div className="space-y-6">
              <div className="relative border-l border-muted pl-6 pb-5">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px]"></div>
                <h3 className="text-xl font-semibold mb-1">DesignOps Course</h3>
                <p className="text-muted-foreground">Elisava | Feb 2024 - March 2024, Barcelona, Spain</p>
              </div>
              
              <div className="relative border-l border-muted pl-6 pb-5">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px]"></div>
                <h3 className="text-xl font-semibold mb-1">Postgraduate in User Experience (UX) Design</h3>
                <p className="text-muted-foreground">UOC | 2017 - 2018, Barcelona, Spain</p>
              </div>
              
              <div className="relative border-l border-muted pl-6 pb-5">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px]"></div>
                <h3 className="text-xl font-semibold mb-1">BA - Graphic Designer</h3>
                <p className="text-muted-foreground">Sheffield Hallam University | 2007 - 2008, Sheffield, UK</p>
                <p className="mt-2">Typography - Advertising - Design - Art</p>
              </div>
              
              <div className="relative border-l border-muted pl-6">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px]"></div>
                <h3 className="text-xl font-semibold mb-1">Foundation Degree Design</h3>
                <p className="text-muted-foreground">Sheffield Hallam University | 2005 - 2007, Sheffield, UK</p>
                <p className="mt-2">Typography - Design - Art - Fundamentals</p>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <CalendarDays className="mr-2 h-6 w-6 text-primary" />
              Technical Skills
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Sketch', 'Zeplin', 'Abstract', 'Jira', 'Confluence', 'Notion'].map((tool) => (
                    <Badge key={tool} variant="outline" className="bg-muted/50">{tool}</Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Methodologies</h3>
                <div className="flex flex-wrap gap-2">
                  {['DesignOps', 'Design Thinking', 'Agile', 'SCRUM'].map((method) => (
                    <Badge key={method} variant="outline" className="bg-muted/50">{method}</Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">UI/UX Design</h3>
                <div className="flex flex-wrap gap-2">
                  {['Wireframing', 'Prototyping', 'Research', 'Visual Design'].map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-muted/50">{skill}</Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Branding & Marketing</h3>
                <div className="flex flex-wrap gap-2">
                  {['Visual identity', 'Brand materials', 'Advertising design'].map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-muted/50">{skill}</Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Data Analysis</h3>
                <div className="flex flex-wrap gap-2">
                  {['Interpreting metrics', 'Data visualization', 'Optimizing digital experiences'].map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-muted/50">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Languages and Awards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Languages */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Languages className="mr-2 h-6 w-6 text-primary" />
                Languages
              </h2>
              <ul className="space-y-3">
                <li>
                  <strong>First Certificate in English (FCE)</strong>
                  <p className="text-muted-foreground">Sheffield College, UK</p>
                </li>
                <li>
                  <strong>English - intermediate level, PET</strong>
                  <p className="text-muted-foreground">British Council Qualifications, Sheffield College, UK</p>
                </li>
              </ul>
            </section>

            {/* Awards */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="mr-2 h-6 w-6 text-primary" />
                Awards
              </h2>
              <ul className="space-y-3">
                <li>
                  <strong>1:2 BA Graphic design</strong>
                  <p className="text-muted-foreground">Sheffield Hallam University, UK</p>
                </li>
                <li>
                  <strong>1st FD Graphic Design</strong>
                  <p className="text-muted-foreground">2007-08, Norton College, Sheffield, UK</p>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;

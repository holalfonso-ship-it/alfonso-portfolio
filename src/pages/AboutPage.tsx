
import React from 'react';
import TransitionEffect from '../components/TransitionEffect';

const AboutPage: React.FC = () => {
  return (
    <>
      <TransitionEffect />
      <div className="pt-32 pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-12">About Me</h1>
          
          {/* Professional Profile */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Professional Profile</h2>
            <p className="mb-4">
              Digital product designer with extensive experience in DesignOps
              and Product design. Specialized in optimizing workflows,
              improving collaboration, and enhancing efficiency within design
              teams. Expert in Figma, Sketch, Zeplin, and Abstract, with an agile
              mindset through SCRUM methodologies and tools like
              Jira/Confluence.
            </p>
            
            <h3 className="text-xl font-bold mb-3 mt-6">Key skills:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>UI design and user experience (UX)</li>
              <li>Creation and maintenance of Design Systems</li>
              <li>Digital product design and growth strategies</li>
              <li>Automation and process optimization within design teams (DesignOps)</li>
              <li>Quantitative and qualitative data analysis to improve decision-making</li>
              <li>Evaluation of success metrics and insight-based optimization</li>
              <li>Branding and graphic design</li>
            </ul>
          </section>
          
          {/* Experience */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            
            <div className="space-y-8">
              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                <h3 className="text-xl font-bold">Leadtech group</h3>
                <h4 className="text-lg text-muted-foreground">Senior Product Designer / DesignOPS</h4>
                <p className="text-sm text-muted-foreground mb-3">Oct. 2018 - Present, Barcelona</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Implemented and optimized DesignOps processes to enhance team collaboration and efficiency.</li>
                  <li>Created and maintained the Design System, ensuring visual consistency and scalability.</li>
                  <li>Designed digital experiences for different stages of the customer journey, focusing on iOS and Android apps.</li>
                  <li>Reduced data load times by 15% and improved visual consistency by 25%.</li>
                  <li>Developed dashboards and data visualizations, increasing stakeholder engagement by 20%.</li>
                  <li>Applied quantitative and qualitative data analysis to measure and enhance user experience.</li>
                </ul>
              </div>
              
              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                <h3 className="text-xl font-bold">Natevoo</h3>
                <h4 className="text-lg text-muted-foreground">Senior UX Designer</h4>
                <p className="text-sm text-muted-foreground mb-3">Jun. 2018 - Oct. 2018, Barcelona - 5 mos</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Conceptualized and designed digital products focused on user experience.</li>
                  <li>Applied UX research methodologies to validate solutions and improve usability.</li>
                </ul>
              </div>
              
              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                <h3 className="text-xl font-bold">Wanup</h3>
                <h4 className="text-lg text-muted-foreground">Senior Product Designer</h4>
                <p className="text-sm text-muted-foreground mb-3">Aug. 2016 - Jun. 2018, Barcelona 1 yrs-11 mos</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Art direction for digital and offline projects.</li>
                  <li>Designed user experiences for e-commerce and SaSS platform marketing materials.</li>
                  <li>Managed a team of 4 designers to ensure brand identity alignment.</li>
                </ul>
              </div>
              
              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                <h3 className="text-xl font-bold">PIMPAM Estudio</h3>
                <h4 className="text-lg text-muted-foreground">Senior Designer</h4>
                <p className="text-sm text-muted-foreground mb-3">Mar. 2011 - Aug. 2016, Valencia 5 yrs-6 mos</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Developed applications with Digital Publishing Suite and designed print publications.</li>
                  <li>Notable clients: Adidas, Amnesia, Gandia Blasco, among others.</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Education */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Education</h2>
            
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                <h3 className="text-xl font-bold">DesignOps Course, Elisava</h3>
                <p className="text-sm text-muted-foreground">Feb 2024 -- March 2024, Barcelona, Spain</p>
              </div>
              
              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                <h3 className="text-xl font-bold">Postgraduate in User Experience (UX) Design, UOC</h3>
                <p className="text-sm text-muted-foreground">2017 -- 2018, Barcelona, Spain</p>
              </div>
              
              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                <h3 className="text-xl font-bold">Sheffield Hallam University, BA - Graphic Designer</h3>
                <p className="text-sm text-muted-foreground">2007 -- 2008, Sheffield, UK</p>
                <p className="text-sm text-muted-foreground">Typography - Advertising - Design - Art</p>
              </div>
              
              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                <h3 className="text-xl font-bold">Sheffield Hallam University, Foundation Degree Design</h3>
                <p className="text-sm text-muted-foreground">2005 -- 2007, Sheffield, UK</p>
                <p className="text-sm text-muted-foreground">Typography - Design - Art - Fundamentals</p>
              </div>
            </div>
          </section>
          
          {/* Technical Skills */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Tools</h3>
                <p>Figma, Sketch, Zeplin, Abstract, Jira, Confluence, Notion</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Methodologies</h3>
                <p>DesignOps, Design Thinking, Agile, SCRUM</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
                <p>Wireframing, Prototyping, Research, Visual Design</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Branding & Marketing</h3>
                <p>Visual identity, Brand materials, Advertising design</p>
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-3">Data Analysis</h3>
                <p>Interpreting metrics, data visualization, and optimizing digital experiences</p>
              </div>
            </div>
          </section>
          
          {/* Languages & Awards */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Languages</h2>
              <ul className="space-y-3">
                <li>
                  <div className="font-medium">First Certificate in English (Sheffield College, UK), FCE</div>
                  <div className="text-sm text-muted-foreground">British Council Qualifications (Sheffield College, UK)</div>
                </li>
                <li>
                  <div className="font-medium">English - intermediate level, PET</div>
                  <div className="text-sm text-muted-foreground">British Council Qualifications (Sheffield College, UK)</div>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Awards</h2>
              <ul className="space-y-3">
                <li>
                  <div className="font-medium">1:2 BA Graphic design</div>
                  <div className="text-sm text-muted-foreground">Sheffield Hallam University (UK)</div>
                </li>
                <li>
                  <div className="font-medium">1st FD Graphic Design</div>
                  <div className="text-sm text-muted-foreground">2007-08, Norton College, Sheffield, (UK)</div>
                </li>
              </ul>
            </div>
          </section>
          
        </div>
      </div>
    </>
  );
};

export default AboutPage;

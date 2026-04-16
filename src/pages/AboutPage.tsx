
import React from 'react';
import { Helmet } from 'react-helmet-async';
import TransitionEffect from '@/components/TransitionEffect';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, GraduationCap, Languages, Trophy, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About — Alfonso Zamorano, Senior Product Designer & DesignOps Specialist</title>
        <meta name="description" content="10+ years of experience as a Senior Product Designer and DesignOps Specialist. Worked in fintech, SaaS, and e-commerce. Based in Europe, available for freelance and full-time roles." />
        <meta property="og:title" content="About Alfonso Zamorano — Senior Product Designer & DesignOps Specialist" />
        <meta property="og:description" content="10+ years designing digital products across fintech, SaaS and e-commerce. Available for new opportunities." />
        <meta property="og:url" content="https://azportfolio.net/about" />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://azportfolio.net/about" />
      </Helmet>
      <TransitionEffect />
      <div className="pt-32 pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-sm text-primary hover:underline transition-all"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
            
            <Link 
              to="/site-images" 
              className="text-sm bg-primary/10 text-primary px-3 py-1.5 rounded-md hover:bg-primary/20 transition-colors"
            >
              Manage Images
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About Me</h1>
          
          <div className="space-y-12">
            {/* Professional Profile */}
            <section>
              <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Professional Profile
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg mb-4">
                    Digital product designer with extensive experience in DesignOps
                    and Product design. Specialized in optimizing workflows,
                    improving collaboration, and enhancing efficiency within design
                    teams. Expert in Figma, Sketch, Zeplin, and Abstract, with an agile
                    mindset through SCRUM methodologies and tools like
                    Jira/Confluence.
                  </p>
                  
                  <h3 className="font-medium mb-2">Key skills:</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
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
            </section>
            
            {/* Experience */}
            <section>
              <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                Experience
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold">Leadtech group</h3>
                        <p className="text-muted-foreground">Senior Product Designer / DesignOPS</p>
                      </div>
                      <Badge>Oct. 2018 - Present</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Implemented and optimized DesignOps processes to enhance team collaboration and efficiency.</li>
                      <li>Created and maintained the Design System, ensuring visual consistency and scalability.</li>
                      <li>Designed digital experiences for different stages of the customer journey, focusing on iOS and Android apps.</li>
                      <li>Reduced data load times by 15% and improved visual consistency by 25%.</li>
                      <li>Developed dashboards and data visualizations, increasing stakeholder engagement by 20%.</li>
                      <li>Applied quantitative and qualitative data analysis to measure and enhance user experience.</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold">Natevoo</h3>
                        <p className="text-muted-foreground">Senior UX Designer</p>
                      </div>
                      <Badge>Jun. 2018 - Oct. 2018</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Conceptualized and designed digital products focused on user experience.</li>
                      <li>Applied UX research methodologies to validate solutions and improve usability.</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold">Wanup</h3>
                        <p className="text-muted-foreground">Senior Product Designer</p>
                      </div>
                      <Badge>Aug. 2016 - Jun. 2018</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Art direction for digital and offline projects.</li>
                      <li>Designed user experiences for e-commerce and SaSS platform marketing materials.</li>
                      <li>Managed a team of 4 designers to ensure brand identity alignment.</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold">PIMPAM Estudio</h3>
                        <p className="text-muted-foreground">Senior Designer</p>
                      </div>
                      <Badge>Mar. 2011 - Aug. 2016</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Developed applications with Digital Publishing Suite and designed print publications.</li>
                      <li>Notable clients: Adidas, Amnesia, Gandia Blasco, among others.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>
            
            {/* Education, Languages, and Awards */}
            <section>
              <Tabs defaultValue="education">
                <TabsList className="mb-6">
                  <TabsTrigger value="education" className="flex items-center gap-1">
                    <GraduationCap className="h-4 w-4" /> Education
                  </TabsTrigger>
                  <TabsTrigger value="skills" className="flex items-center gap-1">
                    <Code className="h-4 w-4" /> Technical Skills
                  </TabsTrigger>
                  <TabsTrigger value="languages" className="flex items-center gap-1">
                    <Languages className="h-4 w-4" /> Languages
                  </TabsTrigger>
                  <TabsTrigger value="awards" className="flex items-center gap-1">
                    <Trophy className="h-4 w-4" /> Awards
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="education">
                  <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Education
                  </h2>
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold">DesignOps Course, Elisava</h3>
                            <p className="text-muted-foreground">Feb 2024 -- March 2024, Barcelona, Spain</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold">Postgraduate in User Experience (UX) Design, UOC</h3>
                            <p className="text-muted-foreground">2017 -- 2018, Barcelona, Spain</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold">Sheffield Hallam University, BA - Graphic Designer</h3>
                            <p className="text-muted-foreground">2007 -- 2008, Sheffield, UK</p>
                            <p className="text-sm text-muted-foreground mt-2">Typography - Advertising - Design - Art</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold">Sheffield Hallam University, Foundation Degree Design</h3>
                            <p className="text-muted-foreground">2005 -- 2007, Sheffield, UK</p>
                            <p className="text-sm text-muted-foreground mt-2">Typography - Design - Art - Fundamentals</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="skills">
                  <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    Technical Skills
                  </h2>
                  <Card>
                    <CardContent className="pt-6 space-y-4">
                      <div>
                        <h3 className="font-bold mb-2">Tools</h3>
                        <div className="flex flex-wrap gap-2">
                          {['Figma', 'Sketch', 'Zeplin', 'Abstract', 'Jira', 'Confluence', 'Notion'].map((tool) => (
                            <Badge key={tool} variant="outline">{tool}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="font-bold mb-2">Methodologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {['DesignOps', 'Design Thinking', 'Agile', 'SCRUM'].map((method) => (
                            <Badge key={method} variant="outline">{method}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="font-bold mb-2">UI/UX Design</h3>
                        <div className="flex flex-wrap gap-2">
                          {['Wireframing', 'Prototyping', 'Research', 'Visual Design'].map((skill) => (
                            <Badge key={skill} variant="outline">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="font-bold mb-2">Branding & Marketing</h3>
                        <div className="flex flex-wrap gap-2">
                          {['Visual identity', 'Brand materials', 'Advertising design'].map((skill) => (
                            <Badge key={skill} variant="outline">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="font-bold mb-2">Data Analysis</h3>
                        <div className="flex flex-wrap gap-2">
                          {['Interpreting metrics', 'Data visualization', 'Optimizing digital experiences'].map((skill) => (
                            <Badge key={skill} variant="outline">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="languages">
                  <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
                    <Languages className="h-5 w-5 text-primary" />
                    Languages
                  </h2>
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="pt-6">
                        <div>
                          <h3 className="text-xl font-bold">First Certificate in English (FCE)</h3>
                          <p className="text-muted-foreground">Sheffield College, UK</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <div>
                          <h3 className="text-xl font-bold">English - intermediate level, PET</h3>
                          <p className="text-muted-foreground">British Council Qualifications (Sheffield College, UK)</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="awards">
                  <h2 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    Awards
                  </h2>
                  <div className="space-y-4">
                    <Card>
                      <CardContent className="pt-6">
                        <div>
                          <h3 className="text-xl font-bold">1:2 BA Graphic design</h3>
                          <p className="text-muted-foreground">Sheffield Hallam University (UK)</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <div>
                          <h3 className="text-xl font-bold">1st FD Graphic Design</h3>
                          <p className="text-muted-foreground">2007-08, Norton College, Sheffield, (UK)</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;

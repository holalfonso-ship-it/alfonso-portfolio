
import React from 'react';
import { 
  Users, 
  Share, 
  CheckCheck, 
  Clock, 
  Component,
  Layout,
  TrendingUp,
  Search,
  Lightbulb,
  Graph
} from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { AspectRatio } from '../ui/aspect-ratio';

export const LeadtechGroupContent: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Professional Profile</h2>
      <p className="text-lg mb-8">
        As a digital product designer with extensive experience in DesignOps and Product design, 
        I've specialized in optimizing workflows, improving collaboration, and enhancing efficiency 
        within design teams. My expertise includes Figma, Sketch, Zeplin, and Abstract, combined with 
        an agile mindset through SCRUM methodologies and tools like Jira/Confluence.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Component className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Design Systems</h3>
              <p className="text-muted-foreground">Creation and maintenance of comprehensive systems</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Layout className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Product Design</h3>
              <p className="text-muted-foreground">UI/UX design and growth strategies</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Share className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">DesignOps</h3>
              <p className="text-muted-foreground">Automation and process optimization</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-6">Experience at Leadtech Group</h2>
      <p className="mb-6">
        As a Senior Product Designer / DesignOPS at Leadtech Group (Oct. 2018 - Present, Barcelona), 
        I've implemented and optimized DesignOps processes to enhance team collaboration and efficiency, 
        while creating and maintaining the Design System to ensure visual consistency and scalability.
      </p>

      <div className="mb-12">
        <AspectRatio ratio={16/9} className="bg-muted rounded-lg overflow-hidden">
          <img 
            src="https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef03a90e9a93e6e0f0c34_design-system.jpg" 
            alt="Design System Example" 
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        <p className="text-sm text-muted-foreground mt-2 text-center">
          Design System components created for Leadtech Group products
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-6">Key Achievements</h2>

      <div className="space-y-8 mb-12">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-primary/10 p-4 rounded-full shrink-0">
            <Component className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Design System Implementation</h3>
            <p>
              Created and maintained the Design System, ensuring visual consistency and scalability across multiple products.
              This system became the single source of truth for design assets, resulting in more efficient development and
              a cohesive user experience.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-primary/10 p-4 rounded-full shrink-0">
            <TrendingUp className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Performance Improvements</h3>
            <p>
              Reduced data load times by 15% and improved visual consistency by 25% through systematic design approach 
              and optimized asset delivery. This resulted in better user experiences and higher engagement metrics.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-primary/10 p-4 rounded-full shrink-0">
            <Graph className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Data Visualization</h3>
            <p>
              Developed dashboards and data visualizations, increasing stakeholder engagement by 20%. These visualizations
              made complex data more accessible and actionable, supporting better business decisions.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6">Design Process</h2>
      <div className="relative pl-8 border-l border-primary/30 space-y-8 mb-12">
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">1</div>
          </div>
          <h3 className="text-xl font-bold mb-2">Research & Discovery</h3>
          <p className="mb-2">
            Applied quantitative and qualitative data analysis to measure and enhance user experience.
            Conducted user interviews and analysis to identify pain points and opportunities for improvement.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">2</div>
          </div>
          <h3 className="text-xl font-bold mb-2">Design & Prototyping</h3>
          <p className="mb-2">
            Designed digital experiences for different stages of the customer journey, focusing on iOS and Android apps.
            Created prototypes to validate solutions before implementation.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">3</div>
          </div>
          <h3 className="text-xl font-bold mb-2">Implementation & Testing</h3>
          <p className="mb-2">
            Worked closely with development teams to ensure design intent was accurately implemented.
            Conducted usability testing to identify and address issues before release.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">4</div>
          </div>
          <h3 className="text-xl font-bold mb-2">Analysis & Iteration</h3>
          <p>
            Analyzed performance metrics to identify areas for improvement.
            Iterated on designs based on real-world usage data and feedback.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-4">Quantitative Results</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>15% reduction in data load times</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>25% improvement in visual consistency</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>20% increase in stakeholder engagement</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>30% faster development with Design System</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-4">Skills Applied</h3>
            <ul className="space-y-3">
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
                <span>Automation and process optimization within design teams</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-6">Education & Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-xl font-bold mb-4">Education</h3>
          <ul className="space-y-4">
            <li>
              <div className="font-bold">DesignOps Course, Elisava</div>
              <div className="text-muted-foreground">Feb 2024 - March 2024, Barcelona, Spain</div>
            </li>
            <li>
              <div className="font-bold">Postgraduate in User Experience (UX) Design, UOC</div>
              <div className="text-muted-foreground">2017 - 2018, Barcelona, Spain</div>
            </li>
            <li>
              <div className="font-bold">Sheffield Hallam University, BA - Graphic Designer</div>
              <div className="text-muted-foreground">2007 - 2008, Sheffield, UK</div>
              <div className="text-sm text-muted-foreground">Typography - Advertising - Design - Art</div>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Tools: Figma, Sketch, Zeplin, Abstract, Jira, Confluence, Notion</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Methodologies: DesignOps, Design Thinking, Agile, SCRUM</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
              <span>UI/UX Design: Wireframing, Prototyping, Research, Visual Design</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Data Analysis: Interpreting metrics, data visualization, and optimizing digital experiences</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

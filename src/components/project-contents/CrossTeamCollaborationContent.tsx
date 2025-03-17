
import React from 'react';
import { 
  Users, 
  Share, 
  MessageSquare, 
  CheckCheck, 
  Clock, 
  ArrowDown, 
  Workflow
} from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { AspectRatio } from '../ui/aspect-ratio';

export const CrossTeamCollaborationContent: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
      <p className="text-lg mb-8">
        As a Senior Product Designer specialized in DesignOps at Leadtech Group, I developed a comprehensive 
        framework to improve collaboration between design, development, and product teams. This initiative 
        was crucial for our organization which had been experiencing communication silos and inefficiencies 
        in project delivery.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">35% Reduction</h3>
              <p className="text-muted-foreground">in project delivery time</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">40% Improvement</h3>
              <p className="text-muted-foreground">in cross-team collaboration</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <CheckCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">28% Decrease</h3>
              <p className="text-muted-foreground">in revision cycles</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-6">Challenge</h2>
      <p className="mb-4">
        Leadtech Group faced significant challenges in coordinating work across design, development, and product teams:
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Communication silos between different teams</li>
        <li>Inconsistent handoff processes causing delays</li>
        <li>Lack of standardized workflows across projects</li>
        <li>Limited visibility into project progress for stakeholders</li>
        <li>Frequent revisions due to misaligned expectations</li>
      </ul>

      <div className="mb-12">
        <AspectRatio ratio={16/9} className="bg-muted rounded-lg overflow-hidden">
          <img 
            src="https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef0b2c3c8362baef07ebb_designops.jpg" 
            alt="Team collaboration session" 
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        <p className="text-sm text-muted-foreground mt-2 text-center">
          Cross-functional team workshop to identify collaboration pain points
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-6">Solution</h2>
      <p className="mb-6">
        I developed a comprehensive DesignOps framework focused on streamlining collaboration and enhancing 
        communication between teams. The framework consisted of several key components:
      </p>

      <div className="space-y-8 mb-12">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-primary/10 p-4 rounded-full shrink-0">
            <Workflow className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Standardized Workflows</h3>
            <p>
              Created clear, documented processes for each project phase, from initial discovery to final implementation. 
              These workflows defined roles, responsibilities, and expectations at each stage.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-primary/10 p-4 rounded-full shrink-0">
            <Share className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Centralized Resources</h3>
            <p>
              Established a single source of truth for all project assets, documentation, and decisions. This included
              creating shared repositories, component libraries, and design systems accessible to all teams.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-primary/10 p-4 rounded-full shrink-0">
            <MessageSquare className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Communication Protocols</h3>
            <p>
              Developed structured communication guidelines that defined when, how, and where different types of 
              information should be shared. This included regular sync meetings, asynchronous updates, and 
              feedback mechanisms.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <AspectRatio ratio={4/3} className="bg-muted rounded-lg overflow-hidden mb-4">
            <img 
              src="https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef03a90e9a93e6e0f0c34_design-system.jpg" 
              alt="Design system documentation" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
          <p className="text-sm text-muted-foreground">Centralized design system documentation</p>
        </div>
        <div>
          <AspectRatio ratio={4/3} className="bg-muted rounded-lg overflow-hidden mb-4">
            <img 
              src="https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef000e7b4a454c6019b93_data-viz.jpg" 
              alt="Collaboration metrics dashboard" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
          <p className="text-sm text-muted-foreground">Real-time collaboration metrics dashboard</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6">Process</h2>
      <div className="relative pl-8 border-l border-primary/30 space-y-8 mb-12">
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">1</div>
          </div>
          <h3 className="text-xl font-bold mb-2">Research & Assessment</h3>
          <p className="mb-2">
            Conducted interviews and surveys with team members to identify pain points in the existing collaboration process.
            Analyzed workflow inefficiencies and bottlenecks.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">2</div>
          </div>
          <h3 className="text-xl font-bold mb-2">Framework Design</h3>
          <p className="mb-2">
            Created a structured framework that addressed the identified challenges. Developed workflow templates,
            communication guidelines, and resource repositories.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">3</div>
          </div>
          <h3 className="text-xl font-bold mb-2">Implementation & Training</h3>
          <p className="mb-2">
            Rolled out the framework through workshops and training sessions. Created documentation and guidelines
            to support adoption.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">4</div>
          </div>
          <h3 className="text-xl font-bold mb-2">Measurement & Iteration</h3>
          <p>
            Established metrics to track the framework's effectiveness. Continuously gathered feedback and made
            adjustments to improve the process.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6">Results</h2>
      <p className="mb-6">
        The implementation of the Cross-team Collaboration Framework yielded significant improvements across multiple metrics:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-4">Quantitative Results</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>35% reduction in project delivery time</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>40% improvement in team collaboration satisfaction</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>28% decrease in revision cycles</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>45% increase in on-time project completion</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-4">Qualitative Outcomes</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Greater alignment between design vision and development implementation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Improved morale and reduced friction between teams</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Enhanced quality of deliverables with fewer defects</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>More consistent user experience across products</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-6">Learnings & Next Steps</h2>
      <p className="mb-4">
        The implementation of this framework provided valuable insights into effective cross-team collaboration:
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Clear communication protocols are essential for successful collaboration</li>
        <li>Regular feedback loops help maintain alignment and prevent drift</li>
        <li>Balancing structure with flexibility is key to maintaining agility</li>
        <li>Training and continuous support are critical for successful adoption</li>
      </ul>
      <p>
        Moving forward, we plan to expand this framework to additional teams and refine our metrics tracking to 
        capture more granular data on collaboration effectiveness. We're also developing advanced training modules 
        to help new team members quickly adapt to our collaborative workflow.
      </p>
    </>
  );
};

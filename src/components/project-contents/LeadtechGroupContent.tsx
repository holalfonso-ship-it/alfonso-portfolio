
import React from 'react';
import { 
  Users, 
  Share, 
  MessageSquare, 
  CheckCheck, 
  Clock, 
  BarChart,
  Workflow
} from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { AspectRatio } from '../ui/aspect-ratio';

export const LeadtechGroupContent: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
      <p className="text-lg mb-8">
        As a Senior Product Designer at Leadtech Group, I led the creation and maintenance of a comprehensive design system. 
        This initiative was crucial for ensuring visual consistency across multiple products and increasing development efficiency.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">30% Increase</h3>
              <p className="text-muted-foreground">in development efficiency</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Consistent UI</h3>
              <p className="text-muted-foreground">across all Leadtech products</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <CheckCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Improved</h3>
              <p className="text-muted-foreground">cross-team collaboration</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-6">Challenge</h2>
      <p className="mb-4">
        Leadtech Group faced several challenges in maintaining a cohesive design language across its diverse product range:
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Inconsistent UI components across different products</li>
        <li>Duplication of design efforts leading to inefficiencies</li>
        <li>Difficulty in scaling design efforts with growing product lines</li>
        <li>Lack of a centralized design resource for developers and designers</li>
        <li>Inconsistent user experience across the Leadtech ecosystem</li>
      </ul>

      <div className="mb-12">
        <AspectRatio ratio={16/9} className="bg-muted rounded-lg overflow-hidden">
          <img 
            src="/lovable-uploads/4fe6b813-f155-406e-9d47-cab1a5940040.png" 
            alt="Leadtech Design System Feedback Dialogs" 
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        <p className="text-sm text-muted-foreground mt-2 text-center">
          Feedback dialog components in the Leadtech Design System
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-6">Solution</h2>
      <p className="mb-6">
        To address these challenges, I spearheaded the development of a comprehensive design system that served as a 
        single source of truth for all design-related assets and guidelines. The solution consisted of several key components:
      </p>

      <div className="space-y-8 mb-12">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-primary/10 p-4 rounded-full shrink-0">
            <Workflow className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">UI Component Library</h3>
            <p>
              Developed a library of reusable UI components with detailed specifications and usage guidelines. 
              These components were designed to be easily integrated into any Leadtech product.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-primary/10 p-4 rounded-full shrink-0">
            <Share className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Design Tokens</h3>
            <p>
              Implemented a system of design tokens to manage visual styles such as colors, typography, and spacing. 
              This allowed for easy updates and theming across the entire design system.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-primary/10 p-4 rounded-full shrink-0">
            <MessageSquare className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Documentation & Guidelines</h3>
            <p>
              Created comprehensive documentation and usage guidelines for all components and design tokens. 
              This ensured that designers and developers had a clear understanding of how to use the design system effectively.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <AspectRatio ratio={4/3} className="bg-muted rounded-lg overflow-hidden mb-4">
            <img 
              src="https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef000e7b4a454c6019b93_data-viz.jpg" 
              alt="Leadtech Design System UI Kit" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
          <p className="text-sm text-muted-foreground">Leadtech Design System UI Kit</p>
        </div>
        <div>
          <AspectRatio ratio={4/3} className="bg-muted rounded-lg overflow-hidden mb-4">
            <img 
              src="https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef0b2c3c8362baef07ebb_designops.jpg" 
              alt="Leadtech Design System in Figma" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
          <p className="text-sm text-muted-foreground">Leadtech Design System in Figma</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6">Process</h2>
      <div className="relative pl-8 border-l border-primary/30 space-y-8 mb-12">
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">1</div>
          </div>
          <h3 className="text-xl font-bold mb-2">Research & Audit</h3>
          <p className="mb-2">
            Conducted a thorough audit of existing Leadtech products to identify inconsistencies and areas for improvement.
            Researched industry best practices and emerging design trends.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">2</div>
          </div>
          <h3 className="text-xl font-bold mb-2">Design & Development</h3>
          <p className="mb-2">
            Designed and developed a comprehensive set of UI components and design tokens. 
            Ensured that all components were accessible, responsive, and easy to use.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">3</div>
          </div>
          <h3 className="text-xl font-bold mb-2">Implementation & Training</h3>
          <p className="mb-2">
            Worked closely with development teams to implement the design system across all Leadtech products.
            Provided training and support to ensure that designers and developers were able to use the design system effectively.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">4</div>
          </div>
          <h3 className="text-xl font-bold mb-2">Maintenance & Iteration</h3>
          <p>
            Continuously monitored the usage of the design system and gathered feedback from users.
            Made regular updates and improvements to ensure that the design system remained relevant and effective.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6">Results</h2>
      <p className="mb-6">
        The implementation of the Leadtech Design System yielded significant improvements across multiple metrics:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-4">Quantitative Results</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>30% increase in development efficiency</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>40% reduction in design inconsistencies</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>25% faster time-to-market for new products</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>15% increase in user satisfaction scores</span>
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
                <span>Improved collaboration between design and development teams</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Greater consistency in user experience across all Leadtech products</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Increased brand recognition and customer loyalty</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-6">Learnings & Next Steps</h2>
      <p className="mb-4">
        The development and implementation of the Leadtech Design System provided valuable insights into creating and 
        maintaining a successful design system:
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Strong leadership support is essential for driving adoption</li>
        <li>Continuous communication and collaboration are key to success</li>
        <li>Regular audits and updates are necessary to maintain relevance</li>
        <li>A well-defined governance model ensures consistency and quality</li>
      </ul>
      <p>
        Moving forward, we plan to expand the design system to include more advanced components and design patterns. 
        We're also developing a comprehensive training program to help new team members quickly adapt to our design system.
      </p>
    </>
  );
};

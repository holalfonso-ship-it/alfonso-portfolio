
import React from 'react';
import { 
  Users, 
  Smartphone, 
  BarChart, 
  ShoppingBag, 
  CheckCheck, 
  Clock
} from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { AspectRatio } from '../ui/aspect-ratio';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../ui/table';

export const LoyaltyAppContent: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
      <p className="text-lg mb-8">
        As a Senior Product Designer at Wanup, I led the redesign of their loyalty app experience, 
        focusing on improving user engagement and conversion rates. The project involved creating a 
        seamless experience across multiple platforms while ensuring it aligned with the brand's 
        identity and business goals.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">25% Increase</h3>
              <p className="text-muted-foreground">in user engagement</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">15% Improvement</h3>
              <p className="text-muted-foreground">in conversion rates</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Enhanced UX</h3>
              <p className="text-muted-foreground">across all touchpoints</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-6">Challenge</h2>
      <p className="mb-4">
        Wanup faced several challenges with their existing e-commerce and loyalty platform:
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Complex user journey leading to high drop-off rates</li>
        <li>Lack of personalization features to drive engagement</li>
        <li>Inconsistent user experience across devices</li>
        <li>Limited visibility of loyalty benefits and rewards</li>
        <li>Outdated design that didn't reflect the brand's premium positioning</li>
      </ul>

      <div className="mb-12">
        <AspectRatio ratio={16/9} className="bg-muted rounded-lg overflow-hidden">
          <img 
            src="https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef033e7b4a454c601a4ba_loyalty%20app.jpg" 
            alt="Wanup Loyalty App" 
            className="object-cover w-full h-full"
          />
        </AspectRatio>
        <p className="text-sm text-muted-foreground mt-2 text-center">
          The redesigned Wanup loyalty app focusing on user engagement
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-6">Solution</h2>
      <p className="mb-6">
        I developed a comprehensive redesign strategy that addressed key user pain points while 
        aligning with business objectives:
      </p>

      <div className="space-y-8 mb-12">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-primary/10 p-4 rounded-full shrink-0">
            <Smartphone className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Intuitive User Interface</h3>
            <p>
              Redesigned the app interface with a focus on simplicity and ease of use. 
              Implemented clear visual hierarchies and intuitive navigation patterns to 
              reduce cognitive load and enhance the overall user experience.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-primary/10 p-4 rounded-full shrink-0">
            <Users className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Personalized Experience</h3>
            <p>
              Introduced personalization features that tailored the user experience based on 
              past interactions and preferences. Created a recommendation engine that highlighted 
              relevant offers and benefits to each user.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-primary/10 p-4 rounded-full shrink-0">
            <ShoppingBag className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Streamlined Booking Process</h3>
            <p>
              Optimized the booking flow to reduce friction and abandon rates. Implemented a 
              step-by-step process with clear indicators of progress and simplified form fields 
              to make the transaction process smoother.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <AspectRatio ratio={4/3} className="bg-muted rounded-lg overflow-hidden mb-4">
            <img 
              src="https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef033e7b4a454c601a4ba_loyalty%20app.jpg" 
              alt="Wanup Loyalty App UI" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
          <p className="text-sm text-muted-foreground">Mobile app interface with improved navigation</p>
        </div>
        <div>
          <AspectRatio ratio={4/3} className="bg-muted rounded-lg overflow-hidden mb-4">
            <img 
              src="https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef033e7b4a454c601a4ba_loyalty%20app.jpg" 
              alt="Wanup Rewards Dashboard" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
          <p className="text-sm text-muted-foreground">Rewards dashboard showing loyalty benefits</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6">Process</h2>
      <div className="relative pl-8 border-l border-primary/30 space-y-8 mb-12">
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">1</div>
          </div>
          <h3 className="text-xl font-bold mb-2">Research & Discovery</h3>
          <p className="mb-2">
            Conducted user interviews, analyzed app analytics, and reviewed competitor 
            offerings to identify pain points and opportunities for improvement.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">2</div>
          </div>
          <h3 className="text-xl font-bold mb-2">Ideation & Prototyping</h3>
          <p className="mb-2">
            Created wireframes and interactive prototypes to test key user flows and 
            validate assumptions before moving into high-fidelity design.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">3</div>
          </div>
          <h3 className="text-xl font-bold mb-2">Design & Testing</h3>
          <p className="mb-2">
            Developed high-fidelity mockups and conducted usability testing to refine the design 
            and ensure it met both user needs and business objectives.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute -left-[41px] bg-background p-1 rounded-full border border-primary">
            <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs">4</div>
          </div>
          <h3 className="text-xl font-bold mb-2">Implementation & Launch</h3>
          <p>
            Collaborated with the development team to ensure accurate implementation of the design. 
            Conducted post-launch analysis to measure success against key performance indicators.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-6">Results</h2>
      <p className="mb-6">
        The redesigned loyalty app delivered significant improvements across key metrics:
      </p>

      <div className="overflow-x-auto mb-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Metric</TableHead>
              <TableHead>Before</TableHead>
              <TableHead>After</TableHead>
              <TableHead>Improvement</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>User Engagement</TableCell>
              <TableCell>42%</TableCell>
              <TableCell>67%</TableCell>
              <TableCell className="text-primary">+25%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Conversion Rate</TableCell>
              <TableCell>3.8%</TableCell>
              <TableCell>5.5%</TableCell>
              <TableCell className="text-primary">+15%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Session Duration</TableCell>
              <TableCell>2.1 min</TableCell>
              <TableCell>4.6 min</TableCell>
              <TableCell className="text-primary">+120%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>User Retention</TableCell>
              <TableCell>28%</TableCell>
              <TableCell>46%</TableCell>
              <TableCell className="text-primary">+18%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-4">Quantitative Results</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>25% increase in user engagement</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>15% improvement in conversion rates</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>120% increase in session duration</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>18% higher user retention</span>
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
                <span>Positive user feedback on app usability</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Improved brand perception among users</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Increased customer satisfaction scores</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-3xl font-bold mb-6">Learnings & Next Steps</h2>
      <p className="mb-4">
        This project provided valuable insights into creating effective loyalty experiences:
      </p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Simplified user journeys significantly impact conversion rates</li>
        <li>Personalization features drive higher engagement and retention</li>
        <li>Clear visualization of rewards increases perceived value of the loyalty program</li>
        <li>Consistent experience across platforms strengthens brand identity</li>
      </ul>
      <p>
        Moving forward, we planned to enhance the app with additional features such as 
        social sharing capabilities, augmented reality experiences for hotel previews, and 
        deeper integration with partner services to create a more comprehensive travel ecosystem.
      </p>
    </>
  );
};


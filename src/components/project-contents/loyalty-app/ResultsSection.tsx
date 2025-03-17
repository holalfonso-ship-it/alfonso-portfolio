
import React from 'react';
import { CheckCheck } from 'lucide-react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../../ui/table';
import { Card, CardContent } from '../../ui/card';

export const ResultsSection: React.FC = () => {
  return (
    <>
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
    </>
  );
};

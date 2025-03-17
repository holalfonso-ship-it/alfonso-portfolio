
import React from 'react';
import { CheckCheck } from 'lucide-react';
import { Card, CardContent } from '../../ui/card';

export const ResultsSection: React.FC = () => {
  return (
    <>
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
    </>
  );
};

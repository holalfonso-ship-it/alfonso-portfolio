
import React from 'react';
import { CheckCheck } from 'lucide-react';
import { Card, CardContent } from '../../ui/card';

const ResultsSection: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default ResultsSection;


import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { CheckCheck } from 'lucide-react';

const ResultsSection: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Results</h2>
      <p className="mb-6">
        The implementation of our DesignOps framework yielded significant improvements in design efficiency and team collaboration:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold mb-4">Quantitative Results</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>40% reduction in design-to-development handoff time</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>35% improvement in team collaboration metrics</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>30% decrease in design revision cycles</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>25% faster time-to-market for new features</span>
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
                <span>Increased visibility into design progress for stakeholders</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Improved design consistency across products</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Enhanced satisfaction among design and development teams</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary flex-shrink-0" />
                <span>More predictable design delivery timelines</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-muted/30 border border-border rounded-lg p-6 mb-12">
        <blockquote className="italic text-lg border-l-4 border-primary pl-4 py-2 mb-4">
          "The DesignOps framework transformed how our design and development teams collaborate. 
          What used to take weeks now takes days, and the quality of our products has improved significantly."
        </blockquote>
        <p className="text-right font-medium">— Product Team Lead, Leadtech Group</p>
      </div>
    </>
  );
};

export default ResultsSection;

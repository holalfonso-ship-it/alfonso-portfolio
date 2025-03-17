
import React from 'react';
import { AspectRatio } from '../../ui/aspect-ratio';

export const ChallengeSection: React.FC = () => {
  return (
    <>
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
        <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
          <img alt="Leadtech Design System Analytics Dashboard" className="object-cover w-full h-full" src="/lovable-uploads/2ffb939e-4cd5-4263-92b0-d74903f44566.png" />
        </AspectRatio>
        <p className="text-sm text-muted-foreground mt-2 text-center">
          Design System Analytics Dashboard showing component usage metrics
        </p>
      </div>
    </>
  );
};

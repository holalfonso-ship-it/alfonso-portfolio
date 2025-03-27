
import React from 'react';
import { AspectRatio } from '../../../../components/ui/aspect-ratio';

interface ProcessStepProps {
  title: string;
  points: string[];
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  title,
  points,
  imageSrc,
  imageAlt,
  imageCaption,
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm">
          <ul className="list-disc pl-6 space-y-2">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-sm">
          <AspectRatio ratio={16 / 9} className="bg-white dark:bg-zinc-800">
            <img 
              alt={imageAlt} 
              className="w-full h-full object-cover" 
              src={imageSrc} 
            />
          </AspectRatio>
          <div className="p-3 bg-zinc-50 dark:bg-zinc-800/80">
            <p className="text-xs text-zinc-600 dark:text-zinc-300">
              {imageCaption}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessStep;

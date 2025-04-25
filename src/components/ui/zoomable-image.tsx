
import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ZoomIn } from 'lucide-react';

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({ 
  src, 
  alt, 
  className, 
  onLoad, 
  onError 
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group relative cursor-zoom-in">
          <img 
            src={src} 
            alt={alt} 
            className={`${className} transition-all duration-300 group-hover:opacity-80`}
            onLoad={onLoad}
            onError={onError}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 transition-opacity group-hover:opacity-100">
            <ZoomIn className="h-8 w-8 text-primary" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] max-h-[90vh]">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain"
        />
      </DialogContent>
    </Dialog>
  );
};

export default ZoomableImage;

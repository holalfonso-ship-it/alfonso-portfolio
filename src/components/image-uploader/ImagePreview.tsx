
import React from 'react';
import { Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import { AspectRatio } from '../ui/aspect-ratio';
import { toast } from '../ui/use-toast';
import { ImagePreviewProps } from './types';

const ImagePreview: React.FC<ImagePreviewProps> = ({ 
  imageUrl,
  aspectRatio,
  onDelete,
  onReset
}) => {
  return (
    <div className="space-y-4">
      <AspectRatio ratio={aspectRatio} className="bg-muted rounded-lg overflow-hidden relative group">
        <img
          src={imageUrl}
          alt="Uploaded image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button 
            variant="destructive" 
            size="sm"
            onClick={onDelete}
            className="flex items-center space-x-1"
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Delete Image
          </Button>
        </div>
      </AspectRatio>
      
      <div className="flex space-x-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full" 
          onClick={() => {
            navigator.clipboard.writeText(imageUrl);
            toast({
              title: "URL copied!",
              description: "Image URL copied to clipboard",
            });
          }}
        >
          Copy URL
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={onReset}
        >
          Upload New
        </Button>
      </div>
    </div>
  );
};

export default ImagePreview;

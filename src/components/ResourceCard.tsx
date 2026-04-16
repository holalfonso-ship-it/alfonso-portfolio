
import React from 'react';
import { ExternalLink, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export interface Resource {
  id: number;
  title: string;
  description: string;
  type: string;
  price: number | 'Free';
  image: string;
  gumroadUrl: string;
  tags: string[];
  format: string;
  comingSoon?: boolean;
}

interface ResourceCardProps extends Resource {}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  type,
  price,
  image,
  gumroadUrl,
  tags,
  format,
  comingSoon = false,
}) => {
  const handleGet = () => {
    if (comingSoon) return;
    window.open(gumroadUrl, '_blank', 'noopener noreferrer');
  };

  const isFree = price === 'Free';

  return (
    <Card className={`overflow-hidden border border-muted/20 transition-all duration-300 flex flex-col ${comingSoon ? 'opacity-70' : 'hover:border-primary/50 hover:shadow-lg group'}`}>
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-muted/30">
            {type}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge
            className={
              isFree
                ? 'bg-green-600/90 text-white border-0'
                : 'bg-primary/90 text-primary-foreground border-0'
            }
          >
            {isFree ? 'Free' : `€${price}`}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6 flex flex-col flex-1">
        <div className="mb-1">
          <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
            {format}
          </span>
        </div>

        <h3 className="text-xl font-bold tracking-tight mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-1">{description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-secondary/30">
              {tag}
            </Badge>
          ))}
        </div>

        <Button
          onClick={handleGet}
          className="w-full"
          variant={comingSoon ? 'outline' : isFree ? 'outline' : 'default'}
          disabled={comingSoon}
        >
          {comingSoon ? (
            <>
              <span className="mr-2">🔒</span>
              Coming Soon
            </>
          ) : isFree ? (
            <>
              <Download size={15} className="mr-2" />
              Download free
            </>
          ) : (
            <>
              <ExternalLink size={15} className="mr-2" />
              Get on Gumroad — €{price}
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;

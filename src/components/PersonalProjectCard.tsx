
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PersonalProjectCardProps {
  title: string;
  description: string;
  type: string;
  image: string;
  link: string;
  tags: string[];
}

const PersonalProjectCard: React.FC<PersonalProjectCardProps> = ({
  title,
  description,
  type,
  image,
  link,
  tags
}) => {
  const handleCardClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <Card 
      className="overflow-hidden border border-muted/20 transition-all duration-300 hover:border-primary/50 hover:shadow-lg group cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-muted/30">
            {type}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex justify-between items-start gap-2 mb-3">
          <h3 className="text-xl font-bold tracking-tight">{title}</h3>
          
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={`Visit ${title} project`}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={18} />
          </a>
        </div>
        
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-secondary/30">{tag}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalProjectCard;

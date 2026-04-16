
import React from 'react';
import { ArrowRight, ExternalLink, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedText from './AnimatedText';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const featuredResources = [
  {
    id: 1,
    title: 'Design ↔ Dev Handoff Checklist',
    description:
      'A free Notion checklist to ship pixel-perfect handoffs every time. 8 sections, 50+ checks — everything engineering needs to build without questions.',
    type: 'Checklist',
    price: 'Free' as const,
    image: '/handoff-checklist-cover.png',
    url: 'https://abyssinian-dodo-5d1.notion.site/Design-Dev-Handoff-Checklist-344985943d318147bb5ee79828691fa5',
    tags: ['Handoff', 'Notion', 'Free'],
  },
  {
    id: 2,
    title: 'DesignOps Playbook',
    description:
      'A complete operating system for design teams. Covers governance, rituals, tooling, onboarding, and delivery — built from 10+ years running design operations at scale.',
    type: 'Playbook',
    price: 29,
    image: '/designops-playbook-cover.png',
    url: 'https://alfonsowave74.gumroad.com/l/mranlq',
    tags: ['DesignOps', 'Notion', 'Team Workflow'],
  },
];

const HomeResources: React.FC = () => {
  return (
    <section id="resources" className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <span className="inline-block text-sm md:text-base font-medium tracking-wider mb-4 py-1 px-4 rounded-full bg-primary/20 text-primary">
            Resources
          </span>

          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 md:mb-0 tracking-tight">
              <AnimatedText text="DesignOps Templates" className="inline-block" once />
            </h2>

            <Link to="/resources">
              <Button variant="ghost" className="group">
                View all resources
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mt-4">
            Practical templates and frameworks built from 10+ years running design operations at scale. Ready to plug into your team on day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredResources.map((resource) => {
            const isFree = resource.price === 'Free';
            return (
              <Card
                key={resource.id}
                className="overflow-hidden border border-muted/20 transition-all duration-300 hover:border-primary/50 hover:shadow-lg group flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-muted/30">
                      {resource.type}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge className={isFree ? 'bg-green-600/90 text-white border-0' : 'bg-primary/90 text-primary-foreground border-0'}>
                      {isFree ? 'Free' : `€${resource.price}`}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold tracking-tight mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{resource.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {resource.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-secondary/30">{tag}</Badge>
                    ))}
                  </div>

                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full" variant={isFree ? 'outline' : 'default'}>
                      {isFree ? (
                        <><Download size={15} className="mr-2" />Download free</>
                      ) : (
                        <><ExternalLink size={15} className="mr-2" />Get on Gumroad — €{resource.price}</>
                      )}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeResources;

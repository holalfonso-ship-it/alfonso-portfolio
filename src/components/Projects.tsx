
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import AnimatedText from './AnimatedText';
import { cn } from "@/lib/utils";

const projectCategories = ['All', 'UX/UI', 'Product Design', 'DesignOps', 'Design System', 'Mobile', 'UI Design'];

const projects = [
  {
    id: 5,
    title: 'Mobile App Design',
    slug: 'mobile-app-design',
    description: 'Designed cross-platform mobile applications for iOS and Android that increased user retention by 35% and improved app store ratings by 1.5 stars.',
    category: 'Mobile',
    image: '/lovable-uploads/5cb0453f-dc0d-4b19-852f-8c3131354284.png',
    link: '/projects/mobile-app-design'
  },
  {
    id: 1,
    title: 'Design Systems',
    slug: 'design-systems',
    description: 'Created and maintained a comprehensive design system that increased development efficiency by 30% and ensured visual consistency across multiple products.',
    category: 'Design System',
    image: '/lovable-uploads/3dcf1c6d-4dde-437c-b626-bbe99631bf3f.png',
    link: '/projects/design-systems'
  },
  {
    id: 2,
    title: 'DesignOps Workflow',
    slug: 'designops-workflow',
    description: 'Implemented and optimized DesignOps processes that enhanced team collaboration, reduced handoff time by 40%, and improved overall design efficiency.',
    category: 'DesignOps',
    image: '/lovable-uploads/b1be486d-7971-4477-97b7-e2bb6ff06bd3.png',
    link: '/projects/designops-workflow'
  },
  {
    id: 3,
    title: 'Loyalty WebApp B2B SaaS',
    slug: 'loyalty-webapp-b2b-saas',
    description: 'Redesigned the B2B loyalty platform resulting in a 25% increase in client engagement and a 15% improvement in conversion rates for enterprise customers.',
    category: 'UX/UI',
    image: '/lovable-uploads/304f003e-df34-4217-85fd-3591e8869fa2.png',
    link: '/projects/loyalty-webapp-b2b-saas'
  },
  {
    id: 4,
    title: 'Data Visualization',
    slug: 'data-visualization',
    description: 'Developed intuitive dashboards and data visualizations that increased stakeholder engagement by 20% and improved decision-making processes.',
    category: 'Product Design',
    image: '/lovable-uploads/b3fb73d0-b03b-495d-81d7-fb908ec0b8e6.png',
    link: '/projects/data-visualization'
  },
  {
    id: 7,
    title: 'Cross-team Collaboration Framework',
    slug: 'cross-team-collaboration-framework',
    description: 'Created a structured DesignOps framework that improved collaboration between design, development, and product teams, reducing project delivery time by 35%.',
    category: 'DesignOps',
    image: '/lovable-uploads/a8a3c542-efbf-46c2-a78b-bcd8a2ddcb83.png',
    link: '/projects/cross-team-collaboration-framework'
  },
  {
    id: 8,
    title: 'ResumeCoach Landing Page',
    slug: 'resumecoach-landing-page',
    description: 'Designed a user-centric landing page for ResumeCoach with clear CTAs, professional aesthetics, and mobile-optimized experience that increased conversions by 42%.',
    category: 'UI Design',
    image: '/lovable-uploads/bf0527b8-71d8-4a05-bb27-3cf2102daa11.png',
    link: '/projects/resumecoach-landing-page'
  },
  {
    id: 9,
    title: 'OnlineCV Landing Page',
    slug: 'onlinecv-landing-page',
    description: 'Designed a conversion-focused landing page for OnlineCV with an intuitive user flow, refined color palette, and mobile-first approach that enhanced user engagement.',
    category: 'UI Design',
    image: '/lovable-uploads/b45151f4-a928-4038-8b12-0ac67c4ed2a9.png',
    link: '/projects/onlinecv-landing-page'
  }
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-32 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <div className="flex flex-col space-y-4">
            <span className="text-sm md:text-base font-medium tracking-wider py-1 px-4 rounded-full bg-primary/10 text-primary w-fit">
              Selected Work
            </span>
            
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight max-w-2xl">
              <AnimatedText text="Creating impactful digital experiences" className="inline-block" once />
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mt-4">
              A collection of projects focusing on design systems, user experience, and digital product design.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4 border-b border-muted/20">
            {projectCategories.map((category) => (
              <button
                key={category}
                className={cn(
                  "px-4 py-3 text-sm font-medium transition-all border-b-2 -mb-[1px]",
                  activeCategory === category
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground"
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className={cn(
              "col-span-1",
              index === 0 || index === 3 ? "md:col-span-12" : "md:col-span-6",
            )}>
              <ProjectCard
                title={project.title}
                description={project.description}
                category={project.category}
                image={project.image}
                link={project.link}
                index={index}
                featured={index === 0 || index === 3}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

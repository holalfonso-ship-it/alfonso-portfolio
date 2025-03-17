
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import AnimatedText from './AnimatedText';
import { cn } from "@/lib/utils";

const projectCategories = ['All', 'UX/UI', 'Product Design', 'DesignOps', 'Design System'];

const projects = [
  {
    id: 1,
    title: 'Leadtech Design System',
    description: 'Created and maintained a comprehensive design system that increased development efficiency by 30% and ensured visual consistency across multiple products.',
    category: 'Design System',
    image: 'https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef03a90e9a93e6e0f0c34_design-system.jpg',
    link: '/project/leadtech-design-system'
  },
  {
    id: 2,
    title: 'DesignOps Workflow',
    description: 'Implemented and optimized DesignOps processes that enhanced team collaboration, reduced handoff time by 40%, and improved overall design efficiency.',
    category: 'DesignOps',
    image: 'https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef0b2c3c8362baef07ebb_designops.jpg',
    link: '/project/designops-workflow'
  },
  {
    id: 3,
    title: 'Loyalty App',
    description: 'Redesigned the loyalty app experience resulting in a 25% increase in user engagement and a 15% improvement in conversion rates.',
    category: 'UX/UI',
    image: 'https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef033e7b4a454c601a4ba_loyalty%20app.jpg',
    link: '/project/loyalty-app'
  },
  {
    id: 4,
    title: 'Data Visualization',
    description: 'Developed intuitive dashboards and data visualizations that increased stakeholder engagement by 20% and improved decision-making processes.',
    category: 'Product Design',
    image: 'https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef000e7b4a454c6019b93_data-viz.jpg',
    link: '/project/data-visualization'
  },
  {
    id: 5,
    title: 'Mobile Banking App',
    description: 'Designed a user-friendly mobile banking application with a focus on accessibility, resulting in a 35% increase in daily active users.',
    category: 'UX/UI',
    image: 'https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef019090b436b96af1e21_mobileapp.jpg',
    link: '/project/mobile-banking-app'
  },
  {
    id: 6,
    title: 'E-commerce Platform',
    description: 'Redesigned the e-commerce experience with a focus on user journey optimization, leading to a 28% increase in conversion rates and improved customer satisfaction.',
    category: 'Product Design',
    image: 'https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef02a090b436b96af1f7b_ecommerce.jpg',
    link: '/project/ecommerce-platform'
  },
  {
    id: 7,
    title: 'Cross-team Collaboration Framework',
    description: 'Created a structured DesignOps framework that improved collaboration between design, development, and product teams, reducing project delivery time by 35%.',
    category: 'DesignOps',
    image: 'https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef0b2c3c8362baef07ebb_designops.jpg',
    link: '/project/cross-team-collaboration'
  }
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20">
          <span className="inline-block text-sm md:text-base font-medium tracking-wider mb-4 py-1 px-4 rounded-full bg-primary/20 text-primary">
            Featured Work
          </span>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 md:mb-0 tracking-tight">
              <AnimatedText text="Selected Projects" className="inline-block" once />
            </h2>
            
            <div className="flex flex-wrap gap-3">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-all border-b-2",
                    activeCategory === category
                      ? "border-primary text-white"
                      : "border-transparent text-muted-foreground hover:text-white hover:border-muted-foreground"
                  )}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
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

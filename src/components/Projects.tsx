
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import AnimatedText from './AnimatedText';

const projectCategories = ['All', 'UX/UI', 'AI', 'Mobile App', 'Web'];

const projects = [
  {
    id: 1,
    title: 'AI Cleaner',
    description: 'A smart cleaning assistant app that uses AI to optimize cleaning schedules and techniques based on user habits and preferences.',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    link: '/project/ai-cleaner'
  },
  {
    id: 2,
    title: 'VideoUp',
    description: 'A video uploading platform with AI-powered editing and enhancement features that streamline the content creation process.',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    link: '/project/videoup'
  },
  {
    id: 3,
    title: 'HealthMonitor',
    description: 'A comprehensive health tracking mobile application that provides personalized insights and recommendations.',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    link: '/project/health-monitor'
  },
  {
    id: 4,
    title: 'E-commerce Redesign',
    description: 'Complete redesign of an e-commerce platform focusing on improved user journey and conversion rates.',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
    link: '/project/ecommerce-redesign'
  },
  {
    id: 5,
    title: 'Financial Dashboard',
    description: 'A clean, modern dashboard for personal finance management with data visualization and analysis.',
    category: 'UX/UI',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    link: '/project/financial-dashboard'
  },
  {
    id: 6,
    title: 'Travel Companion',
    description: 'A travel planning application that uses AI to recommend personalized itineraries and experiences.',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    link: '/project/travel-companion'
  }
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-12 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <span className="inline-block text-sm md:text-base font-medium tracking-wider mb-4 py-1 px-4 rounded-full bg-primary/10 text-primary">
            Featured Work
          </span>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight">
            <AnimatedText text="Selected Projects" className="inline-block" once />
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated collection of projects showcasing my expertise in UX/UI design, with a focus on artificial intelligence and innovative digital experiences.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary hover:bg-primary/10'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              category={project.category}
              image={project.image}
              link={project.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { ProjectType } from '@/types/project';

export const projectCategories = ['All', 'UX/UI', 'Product Design', 'DesignOps', 'Design System', 'Mobile', 'UI Design'];

export const projects: ProjectType[] = [
  {
    id: 3,
    title: 'Wanup Webapp B2B SaaS',
    slug: 'wanup-webapp-b2b-saas',
    description: 'Designed and developed a comprehensive B2B SaaS platform for hotel bookings and loyalty program management, featuring an intuitive user interface and streamlined booking experience.',
    category: 'UX/UI',
    image: '/lovable-uploads/399e039f-3f04-438d-b1e2-bfe914903368.png',
    heroImages: [
      '/lovable-uploads/399e039f-3f04-438d-b1e2-bfe914903368.png',
      '/lovable-uploads/8e40ce72-3e8b-4985-afc8-8f92e34cfc66.png',
      '/lovable-uploads/f62e774d-8625-4afb-a943-603afc462ab5.png',
      '/lovable-uploads/d18bb0bd-850d-42b3-88bc-b035d36fb153.png',
      '/lovable-uploads/131a06a8-d704-4c76-966d-3237434734d8.png'
    ],
    link: '/projects/wanup-webapp-b2b-saas',
  },
  {
    id: 5,
    title: 'Mobile App Design',
    slug: 'mobile-app-design',
    description: 'Designed cross-platform mobile applications for iOS and Android that increased user retention by 35% and improved app store ratings by 1.5 stars.',
    category: ['Mobile', 'Product Design'],
    image: '/lovable-uploads/5cb0453f-dc0d-4b19-852f-8c3131354284.png',
    heroImages: [
      '/lovable-uploads/5cb0453f-dc0d-4b19-852f-8c3131354284.png'
    ],
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
    id: 9,
    title: 'OnlineCV Landing Page',
    slug: 'onlinecv-landing-page',
    description: 'Designed a conversion-focused landing page for OnlineCV with an intuitive user flow, refined color palette, and mobile-first approach that enhanced user engagement.',
    category: 'UI Design',
    image: '/lovable-uploads/b45151f4-a928-4038-8b12-0ac67c4ed2a9.png',
    link: '/projects/onlinecv-landing-page'
  }
];

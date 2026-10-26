import type { RouteRecord } from 'vite-react-ssg';
import Layout from './Layout';
import Index from './pages/Index';
import ProjectPage from './pages/ProjectPage';
import NotFound from './pages/NotFound';
import AdminPage from './pages/AdminPage';
import SiteImages from './pages/SiteImages';
import AboutPage from './pages/AboutPage';
import PersonalProjectsPage from './pages/PersonalProjectsPage';
import ResourcesPage from './pages/ResourcesPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

// Known project ids/slugs (from src/pages/ProjectPage.tsx's own list).
// Both URL shapes point at the same content. Add new projects to both
// ProjectPage.tsx and these two lists so the new page gets prerendered too.
const PROJECT_IDS = [5, 1, 2, 3, 4, 7, 9, 6];
const PROJECT_SLUGS = [
  'mobile-app-design',
  'design-systems',
  'designops-workflow',
  'wanup-webapp-b2b-saas',
  'data-visualization',
  'cross-team-collaboration-framework',
  'onlinecv-landing-page',
  'videoup-landing-page',
];

export const routes: RouteRecord[] = [
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Index },
      {
        path: 'project/:id',
        Component: ProjectPage,
        getStaticPaths: () => PROJECT_IDS.map((id) => `/project/${id}`),
      },
      {
        path: 'projects/:slug',
        Component: ProjectPage,
        getStaticPaths: () => PROJECT_SLUGS.map((slug) => `/projects/${slug}`),
      },
      { path: 'about', Component: AboutPage },
      { path: 'personal-projects', Component: PersonalProjectsPage },
      { path: 'resources', Component: ResourcesPage },
      // Blog content comes from the Notion API at request time, not at
      // build time, so these stay client-rendered (not prerendered).
      { path: 'blog', Component: BlogPage },
      { path: 'blog/:id', Component: BlogPostPage },
      // Internal tools — not meant to be public/indexed, excluded from
      // prerendering below via ssgOptions.includedRoutes.
      { path: 'admin', Component: AdminPage },
      { path: 'site-images', Component: SiteImages },
      { path: '*', Component: NotFound },
    ],
  },
];

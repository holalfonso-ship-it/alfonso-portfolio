
import React from 'react';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NavLink from './NavLink';
import ProjectsDropdown from './ProjectsDropdown';
import { ThemeToggle } from '@/components/ThemeToggle';

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface Project {
  id: number;
  title: string;
  category: string;
}

interface DesktopNavProps {
  navItems: NavItem[];
  projects: Project[];
  getNavItemHref: (href: string) => string;
  onDownloadCV: () => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ 
  navItems, 
  projects, 
  getNavItemHref,
  onDownloadCV
}) => {
  return (
    <div className="hidden md:flex items-center">
      <nav className="flex items-center space-x-8 mr-6">
        {navItems.map((item) => (
          item.hasDropdown ? (
            <ProjectsDropdown key={item.href} projects={projects} />
          ) : (
            <NavLink
              key={item.href}
              href={getNavItemHref(item.href)}
              label={item.label}
            />
          )
        ))}
      </nav>
      
      <div className="flex items-center gap-3">
        <ThemeToggle />
        
        <Button 
          variant="outline" 
          size="sm" 
          className="border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
          onClick={onDownloadCV}
        >
          <FileText size={16} className="mr-2" />
          Download CV
        </Button>
      </div>
    </div>
  );
};

export default DesktopNav;

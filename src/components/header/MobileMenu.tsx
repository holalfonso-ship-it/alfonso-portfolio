
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface Project {
  id: number;
  title: string;
  category: string;
  slug?: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  navItems: NavItem[];
  projects: Project[];
  onLinkClick: () => void;
  onDownloadCV: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ 
  isOpen, 
  navItems, 
  projects, 
  onLinkClick,
  onDownloadCV 
}) => {
  return (
    <div 
      className={cn(
        "fixed inset-0 z-40 glass-dark md:hidden transition-opacity duration-300 flex flex-col justify-center items-center",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
    >
      <nav className="flex flex-col items-center space-y-6">
        {navItems.map((item) => (
          item.hasDropdown ? (
            <div key={item.href} className="flex flex-col items-center space-y-3">
              <span className="text-2xl font-medium">{item.label}</span>
              <div className="flex flex-col items-center space-y-3 mt-2 mb-4">
                {projects.map((project) => (
                  <Link
                    key={project.id}
                    to={project.slug ? `/projects/${project.slug}` : `/project/${project.id}`}
                    className="text-lg text-muted-foreground hover:text-white"
                    onClick={onLinkClick}
                  >
                    {project.title}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={item.href}
              to={item.href}
              className="text-2xl font-medium"
              onClick={onLinkClick}
            >
              {item.label}
            </Link>
          )
        ))}
        
        <Button 
          variant="outline" 
          className="mt-4 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
          onClick={() => {
            onDownloadCV();
            onLinkClick();
          }}
        >
          <FileText size={18} className="mr-2" />
          Download CV
        </Button>
      </nav>
    </div>
  );
};

export default MobileMenu;


import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, X } from 'lucide-react';
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
        "fixed inset-0 z-50 bg-background/95 backdrop-blur-md md:hidden transition-all duration-300 flex flex-col items-center overflow-y-auto",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="absolute top-6 right-6">
        <Button variant="ghost" size="icon" onClick={onLinkClick} className="text-foreground">
          <X size={24} />
          <span className="sr-only">Close menu</span>
        </Button>
      </div>
      
      <nav className="flex flex-col items-center space-y-6 py-24 px-6 w-full">
        {navItems.map((item) => (
          !item.hasDropdown ? (
            <Link
              key={item.href}
              to={item.href}
              className="text-xl font-medium transition-colors hover:text-primary"
              onClick={onLinkClick}
            >
              {item.label}
            </Link>
          ) : (
            <div key={item.href} className="w-full space-y-4">
              <Link 
                to={item.href}
                className="text-xl font-medium transition-colors hover:text-primary block"
                onClick={onLinkClick}
              >
                {item.label}
              </Link>
              
              <div className="grid grid-cols-1 gap-3 pl-4">
                {projects.map((project) => (
                  <Link
                    key={project.id}
                    to={`/projects/${project.slug}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    onClick={onLinkClick}
                  >
                    {project.title}
                  </Link>
                ))}
              </div>
            </div>
          )
        ))}
        
        <Button 
          variant="outline" 
          className="mt-8 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 w-full max-w-[200px]"
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

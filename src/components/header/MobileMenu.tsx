
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
        "fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden transition-all duration-300 flex flex-col items-center justify-center",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="absolute top-6 right-6">
        <Button variant="ghost" size="icon" onClick={onLinkClick} className="text-foreground">
          <X size={24} />
          <span className="sr-only">Close menu</span>
        </Button>
      </div>
      
      <nav className="flex flex-col items-center space-y-8 py-10 w-full max-w-xs">
        {navItems.map((item) => (
          !item.hasDropdown ? (
            <Link
              key={item.href}
              to={item.href}
              className="text-2xl font-medium transition-colors hover:text-primary"
              onClick={onLinkClick}
            >
              {item.label}
            </Link>
          ) : (
            <div key={item.href} className="w-full">
              <Link 
                to={item.href}
                className="text-2xl font-medium transition-colors hover:text-primary mb-6 block text-center"
                onClick={onLinkClick}
              >
                {item.label}
              </Link>
            </div>
          )
        ))}
        
        <Button 
          variant="outline" 
          className="mt-4 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 w-full max-w-[200px]"
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

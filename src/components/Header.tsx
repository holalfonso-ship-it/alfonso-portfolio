import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { supabase } from '@/integrations/supabase/client';

const projects = [
  { id: 1, title: 'Leadtech Design System', category: 'Design System' },
  { id: 2, title: 'DesignOps Workflow', category: 'DesignOps' },
  { id: 3, title: 'Loyalty App', category: 'UX/UI' },
  { id: 4, title: 'Data Visualization', category: 'Product Design' },
  { id: 7, title: 'Cross-team Collaboration', category: 'DesignOps' },
];

const navItems = [
  { label: 'Home', href: '/' },
  { 
    label: 'Projects', 
    href: '/#projects',
    hasDropdown: true 
  },
  { label: 'About', href: '/#about' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/#contact' }
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cvUrl, setCvUrl] = useState<string | null>(null);
  const location = useLocation();
  const isProjectPage = location.pathname.includes('/project/');

  useEffect(() => {
    const fetchLatestCV = async () => {
      try {
        // List all files in the cv_files bucket, sorted by created_at desc
        const { data, error } = await supabase.storage
          .from('cv_files')
          .list('', {
            limit: 1,
            sortBy: { column: 'created_at', order: 'desc' }
          });
          
        if (error) throw error;
        
        if (data && data.length > 0) {
          const latestFile = data[0];
          const { data: { publicUrl } } = supabase.storage
            .from('cv_files')
            .getPublicUrl(latestFile.name);
            
          setCvUrl(publicUrl);
        }
      } catch (error) {
        console.error('Error fetching CV:', error);
      }
    };
    
    fetchLatestCV();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    window.open(cvUrl || '/alfonso-cv.pdf', '_blank');
  };

  // Function to get the correct href for navigation items
  const getNavItemHref = (href: string) => {
    if (isProjectPage && href.startsWith('/#')) {
      return href.replace('#', '');
    }
    return href;
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-4 transition-all duration-300 will-change-transform",
        isScrolled ? "glass py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-display font-bold relative z-10 transition-colors duration-300"
        >
          Portfolio<span className="text-primary">.</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <nav className="flex items-center space-x-8 mr-6">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger className="flex items-center text-sm font-medium relative">
                    {item.label} <ChevronDown size={16} className="ml-1" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="bg-background/90 backdrop-blur-md border-primary/20 shadow-md w-56">
                    {projects.map((project) => (
                      <DropdownMenuItem key={project.id} asChild>
                        <Link 
                          to={`/project/${project.id}`} 
                          className="cursor-pointer"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {project.title}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.href}
                  to={getNavItemHref(item.href)}
                  className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
            onClick={handleDownloadCV}
          >
            <FileText size={16} className="mr-2" />
            Download CV
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Navigation */}
        <div 
          className={cn(
            "fixed inset-0 z-40 glass-dark md:hidden transition-opacity duration-300 flex flex-col justify-center items-center",
            mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
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
                        to={`/project/${project.id}`}
                        className="text-lg text-muted-foreground hover:text-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {project.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  to={getNavItemHref(item.href)}
                  className="text-2xl font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
            
            <Button 
              variant="outline" 
              className="mt-4 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              onClick={() => {
                handleDownloadCV();
                setMobileMenuOpen(false);
              }}
            >
              <FileText size={18} className="mr-2" />
              Download CV
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

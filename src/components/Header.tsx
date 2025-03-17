
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';
import { Button } from './ui/button';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' }
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    window.open('/alfonso-cv.pdf', '_blank');
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
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
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
              <a
                key={item.href}
                href={item.href}
                className="text-2xl font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
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

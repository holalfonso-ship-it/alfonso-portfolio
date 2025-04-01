
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { useLocation } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Logo from './Logo';
import DesktopNav from './DesktopNav';
import MobileMenuToggle from './MobileMenuToggle';
import MobileMenu from './MobileMenu';

const projects = [
  { id: 5, title: 'Mobile App Design', category: 'Mobile' },
  { id: 1, title: 'Design Systems', category: 'Design System' },
  { id: 2, title: 'DesignOps Workflow', category: 'DesignOps' },
  { id: 3, title: 'Loyalty WebApp B2B SaaS', category: 'UX/UI' },
  { id: 4, title: 'Data Visualization', category: 'Product Design' },
  { id: 7, title: 'Cross-team Collaboration', category: 'DesignOps' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cvUrl, setCvUrl] = useState<string | null>(null);
  const location = useLocation();
  const isProjectPage = location.pathname.includes('/project/');

  const navItems = isProjectPage 
    ? [
        { label: 'Home', href: '/' },
        { 
          label: 'Projects', 
          href: '/#projects',
          hasDropdown: true 
        }
      ]
    : [
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

  useEffect(() => {
    const fetchLatestCV = async () => {
      try {
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
        <Logo />
        
        <DesktopNav 
          navItems={navItems}
          projects={projects}
          getNavItemHref={getNavItemHref}
          onDownloadCV={handleDownloadCV}
        />
        
        <MobileMenuToggle 
          isOpen={mobileMenuOpen}
          onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
        
        <MobileMenu 
          isOpen={mobileMenuOpen}
          navItems={navItems}
          projects={projects}
          onLinkClick={() => setMobileMenuOpen(false)}
          onDownloadCV={handleDownloadCV}
        />
      </div>
    </header>
  );
};

export default Header;

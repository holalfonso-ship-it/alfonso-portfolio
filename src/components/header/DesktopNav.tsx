import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import NavLink from './NavLink';
import { ThemeToggle } from '@/components/ThemeToggle';

// ─── Case studies list (add new entries here when ready) ─────────────────────
export const CASE_STUDY_ITEMS = [
  { slug: 'ai-cleaner', label: 'AI Cleaner' },
  { slug: 'wanup', label: 'Wanup' },
  { slug: 'ai-design', label: 'AI Design' },
];

interface NavItem {
  label: string;
  href: string;
}

interface DesktopNavProps {
  navItems: NavItem[];
  getNavItemHref: (href: string) => string;
  onDownloadCV: () => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({
  navItems,
  getNavItemHref,
  onDownloadCV,
}) => {
  return (
    <div className="hidden md:flex items-center">
      <nav className="flex items-center space-x-8 mr-6">
        {navItems.map((item) => {
          if (item.label === 'Case Studies') {
            return (
              <DropdownMenu key={item.href}>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors outline-none group">
                  Case Studies
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-200 group-data-[state=open]:rotate-180"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  className="bg-background/90 backdrop-blur-md border-border/40 shadow-lg w-44 mt-1"
                >
                  {CASE_STUDY_ITEMS.map(({ slug, label }) => (
                    <DropdownMenuItem key={slug} asChild>
                      <Link
                        to={`/case-studies/${slug}`}
                        className="cursor-pointer text-sm"
                      >
                        {label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          }

          return (
            <NavLink
              key={item.href}
              href={getNavItemHref(item.href)}
              label={item.label}
            />
          );
        })}
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

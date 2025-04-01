
import React from 'react';
import { Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';

interface MobileMenuToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({ isOpen, onToggle }) => {
  return (
    <div className="md:hidden flex items-center gap-3">
      <ThemeToggle />
      
      <Button 
        variant="ghost"
        size="icon"
        className="text-foreground p-2"
        onClick={onToggle}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <Menu size={24} />
      </Button>
    </div>
  );
};

export default MobileMenuToggle;

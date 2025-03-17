
import React from 'react';
import { Download, Mail, Phone, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Function to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="py-8 px-6 md:px-12 bg-secondary/80">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:holalfonso@gamil.com" 
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  holalfonso@gamil.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+34678815239" 
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  +34 678 815 239
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resume Download */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resume</h3>
            <Button 
              variant="outline" 
              size="sm" 
              asChild
            >
              <a href="/alfonso-cv.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/#projects" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="/#about" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a 
                  href="/#contact" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-border/50">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Portfolio. All rights reserved.
            </p>
          </div>
          
          <div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={scrollToTop}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowUp className="mr-2 h-4 w-4" />
              Back to top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

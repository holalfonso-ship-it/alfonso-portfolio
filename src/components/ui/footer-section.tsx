
"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ArrowUp, Briefcase, Download, ExternalLink, FileText, Github, Linkedin, Mail, Phone, User } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { supabase } from '@/integrations/supabase/client'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface FooterSectionProps {
  className?: string
}

export function FooterSection({ className }: FooterSectionProps) {
  const { theme } = useTheme()
  const [cvUrl, setCvUrl] = useState<string | null>(null)
  const currentYear = new Date().getFullYear()
  
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
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const cvDownloadUrl = cvUrl || '/alfonso-cv.pdf';

  return (
    <footer className="w-full border-t bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-12 md:py-24">
        {/* Top section with logo and links */}
        <div className="grid gap-12 md:grid-cols-7 lg:gap-8">
          <div className="md:col-span-3">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">Alfonso Zamorano</h2>
            <p className="mb-6 text-muted-foreground max-w-md">
              Digital product designer with extensive experience in DesignOps
              and Product design. Specialized in optimizing workflows,
              improving collaboration, and enhancing efficiency within design teams.
            </p>
            
            <div className="flex space-x-4 mb-8">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full" asChild>
                      <a href="https://www.linkedin.com/in/alfonsozamorano/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full" asChild>
                      <a href="mailto:holalfonso@gmail.com">
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Email me</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full" asChild>
                      <a href="tel:+34678815239">
                        <Phone className="h-5 w-5" />
                        <span className="sr-only">Phone</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Call me</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Navigate</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#case-study" className="text-muted-foreground hover:text-foreground transition-colors">
                  Case Study
                </a>
              </li>
              <li>
                <Link to="/personal-projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Personal Projects
                </Link>
              </li>
              <li>
                <a href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="/#process" className="text-muted-foreground hover:text-foreground transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
              <div className="flex items-center mb-4">
                <User className="h-5 w-5 text-primary mr-2" />
                <h3 className="text-lg font-semibold">Professional Experience</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Briefcase className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Leadtech group</span>
                    <p className="text-sm text-muted-foreground">Senior Product Designer / DesignOPS</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Briefcase className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Wanup</span>
                    <p className="text-sm text-muted-foreground">Senior Product Designer</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-6">
                <Button variant="default" size="sm" className="w-full group" asChild>
                  <a href={cvDownloadUrl} download target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section with copyright */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Alfonso Zamorano. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
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
  )
}

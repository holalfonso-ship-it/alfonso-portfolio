
"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ArrowUp, Download, Facebook, FileText, Instagram, Linkedin, Mail, Phone, Send, Sparkles } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { supabase } from '@/integrations/supabase/client'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface FooterSectionProps {
  className?: string
}

export function FooterSection({ className }: FooterSectionProps) {
  const { theme, setTheme } = useTheme()
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
    <footer className="relative border-t bg-secondary/80 text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <Link to="/" className="block transition-colors hover:text-primary">
                Home
              </Link>
              <a href="/#projects" className="block transition-colors hover:text-primary">
                Projects
              </a>
              <a href="/#about" className="block transition-colors hover:text-primary">
                About Me
              </a>
              <a href="/#contact" className="block transition-colors hover:text-primary">
                Contact
              </a>
            </nav>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <address className="space-y-2 text-sm not-italic">
              <a 
                href="mailto:holalfonso@gmail.com" 
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="mr-2 h-4 w-4" />
                holalfonso@gmail.com
              </a>
              <a 
                href="tel:+34678815239" 
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="mr-2 h-4 w-4" />
                +34 678 815 239
              </a>
            </address>
          </div>
          
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Me</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full" asChild>
                      <a href="https://www.linkedin.com/in/alfonsozamorano/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
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
                      <a href="https://www.instagram.com/lfns_zmrn/" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Stay Connected</h2>
            <p className="mb-6 text-muted-foreground">
              Download my CV to learn more about my experience and skills in Product Design and DesignOps.
            </p>
            <div className="space-y-4">
              <Button 
                variant="default" 
                size="lg" 
                asChild
                className="w-full group transition-all duration-300 hover:shadow-lg"
              >
                <a href={cvDownloadUrl} download>
                  <Download className="mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                  Download CV
                </a>
              </Button>
              
              <div className="flex items-center p-3 bg-background/50 rounded-lg border border-border/50">
                <FileText className="h-5 w-5 mr-3 text-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Professional Profile</p>
                  <p className="text-xs text-muted-foreground">Digital Product Designer with DesignOps expertise</p>
                </div>
                <Sparkles className="h-4 w-4 text-primary/80" />
              </div>
            </div>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Portfolio. All rights reserved.
          </p>
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
    </footer>
  )
}

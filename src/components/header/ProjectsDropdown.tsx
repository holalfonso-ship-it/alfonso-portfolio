
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Project {
  id: number;
  title: string;
  category: string;
  slug?: string;
}

interface ProjectsDropdownProps {
  projects: Project[];
  onSelect?: () => void;
}

const ProjectsDropdown: React.FC<ProjectsDropdownProps> = ({ projects, onSelect }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center text-sm font-medium relative">
        Projects <ChevronDown size={16} className="ml-1" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="bg-background/90 backdrop-blur-md border-primary/20 shadow-md w-56">
        {projects.map((project) => (
          <DropdownMenuItem key={project.id} asChild>
            <Link 
              to={project.slug ? `/projects/${project.slug}` : `/project/${project.id}`}
              className="cursor-pointer"
              onClick={onSelect}
            >
              {project.title}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProjectsDropdown;

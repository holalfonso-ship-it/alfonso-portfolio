
import React from 'react';
import { cn } from "@/lib/utils";

interface ProjectCategoriesProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProjectCategories: React.FC<ProjectCategoriesProps> = ({
  categories,
  activeCategory,
  onCategoryChange
}) => {
  return (
    <div className="mt-12 flex flex-wrap gap-4 border-b border-muted/20" role="group" aria-label="Filter projects by category">
      {categories.map((category) => (
        <button
          key={category}
          className={cn(
            "px-4 py-3 text-sm font-medium transition-all border-b-2 -mb-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
            activeCategory === category
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground"
          )}
          onClick={() => onCategoryChange(category)}
          aria-pressed={activeCategory === category}
          aria-label={`Filter by ${category}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProjectCategories;

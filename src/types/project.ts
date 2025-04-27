
import { ReactNode } from 'react';

export interface ProjectType {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  image: string;
  heroImages?: string[];
  link: string;
  content?: ReactNode;
}

export interface ProjectContentProps {
  project?: ProjectType;
}

export type Language = 'pl' | 'en';

export interface ProjectContent {
  description: string;
  fullDescription: string;
}

export interface Project {
  title: string;
  pl: ProjectContent;
  en: ProjectContent;
  githubUrl: string;
  techStack: string[];
  variant: 'design' | 'code' | 'security';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
  imageUrl?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  years: string;
}

export interface Skills {
  general: string[];
  tools: string[];
  programming: string[];
}

export interface CVData {
  experiences: Experience[];
  education: Education[];
  skills: Skills;
  languages: string[];
}

export interface PortfolioConfig {
  name: string;
  title: string;
  description: string;
  email: string;
  heroTechStack: string[];
}

export interface GlobalConfig {
  pl: PortfolioConfig;
  en: PortfolioConfig;
  socials: {
    github: string;
    linkedin: string;
  };
  contact: {
    formspreeId: string;
  };
}

export interface FileSystemItem {
  name: string;
  type: 'file' | 'dir';
  content?: string | string[];
  children?: Record<string, FileSystemItem>;
}

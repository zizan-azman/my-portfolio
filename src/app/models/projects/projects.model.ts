export interface ProjectItem {
  img: { url: string; alt: string };
  text: string;
  href: string;
  paragraph: string;
  tags: string[];
}

export interface ProjectsConfig {
  projects: ProjectItem[];
}

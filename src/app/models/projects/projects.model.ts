export interface ProjectItemImage {
  url: string;
  alt: string;
}

export interface ProjectItemLink {
  text: string;
  href: string;
}

export interface ProjectItemAnotherLink {
  text: string;
  href: string;
}

export interface ProjectItem {
  img: ProjectItemImage;
  link: ProjectItemLink;
  anotherLink?: ProjectItemAnotherLink;
  paragraph: string;
  tags: string[];
}

export interface ProjectsConfig {
  projects: ProjectItem[];
}

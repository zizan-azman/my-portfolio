export interface ExperienceItem {
  yos: string;
  text: string;
  href: string;
  paragraph: string;
  tags: string[];
}

export interface ExperienceConfig {
  experiences: ExperienceItem[];
}

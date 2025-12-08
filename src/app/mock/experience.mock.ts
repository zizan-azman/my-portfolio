import { ExperienceConfig } from '../models/experience/experience.model';

export const MockExperience: ExperienceConfig = {
  experiences: [
    {
      yos: 'JUN 2023 — NOV 2025',
      text: 'Front End Developer · Orsted Services MY Sdn Bhd',
      href: 'https://orsted.my/malaysia-office',
      paragraph:
        'Build and maintain 50+ shared UI components that power Ørsted’s 60+ public-facing websites. Collaborate with cross-functional teams within the Agile Release Train (ART) to deliver high-quality experiences for both site visitors and Sitecore content editors. Enhance the design system through Design Tokens and improve SEO performance by optimizing Core Web Vitals.',
      tags: ['Angular', 'TypeScript', 'Web Development', 'CMS Sitecore 10.4'],
    },
    {
      yos: 'JAN 2019 — May 2023',
      text: 'System Engineer · Silverline Dynamics Sdn Bhd',
      href: 'https://www.silverlinedynamics.com.my/company/overview/',
      paragraph:
        'Build and maintain front-end applications across multiple client projects, including a cloud-based POS system, and a highway-management system. Introduce a monorepo architecture using Nx and Angular to streamline development and improve consistency across codebases. Mentor developers to elevate code quality. Collaborate with designers to deliver clear, scalable UI/UX using Figma and Atomic Design principles.',
      tags: ['Angular', 'Ionic', 'Flutter', 'Figma'],
    },
  ],
};

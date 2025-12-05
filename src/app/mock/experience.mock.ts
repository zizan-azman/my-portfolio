import { ExperienceConfig } from '../models/experience/experience.model';

export const MockExperience: ExperienceConfig = {
  experiences: [
    {
      yos: 'JUN 2023 — NOV 2025',
      text: 'Front End Developer · Orsted Services MY Sdn Bhd',
      href: 'https://orsted.my/malaysia-office',
      paragraph:
        'Developing and maintaining web applications using Angular and TypeScript. Collaborating with designers and backend developers to create seamless user experiences.',
      tags: ['Angular', 'TypeScript', 'Web Development', 'CMS Sitecore 10.4'],
    },
    {
      yos: 'JAN 2019 — May 2023',
      text: 'System Engineer · Silverline Dynamics Sdn Bhd',
      href: 'https://www.silverlinedynamics.com.my/company/overview/',
      paragraph:
        'Developing and maintaining web applications using Angular and TypeScript. Collaborating with designers and backend developers to create seamless user experiences.',
      tags: ['Angular', 'Ionic', 'Flutter', 'Figma'],
    },
  ],
};

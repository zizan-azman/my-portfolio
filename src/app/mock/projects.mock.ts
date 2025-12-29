import { ProjectsConfig } from '../models/projects/projects.model';

export const MockProjects: ProjectsConfig = {
  projects: [
    {
      img: { url: 'assets/imgs/projects/siera.png', alt: 'Project 1' },
      link: {
        text: 'Siera Cat Shelter',
        href: 'https://siera-shelter.netlify.app/all-websites',
      },
      anotherLink: {
        text: 'View on Github',
        href: 'https://github.com/zizan-azman/siera-dev',
      },
      paragraph: `<span class="text-bold">Siera</span> is a fictional <span class="text-bold">multi-brand cat shelter</span>. It consists of multiple related brands, each with its own <span class="text-bold">visual identity</span> and <span class="text-bold">color themes</span>. The project demonstrates how a <span class="text-bold">complex multi-brand ecosystem</span> can be efficiently customized and maintained using a <span class="text-bold">single, scalable design system</span>. It implements <span class="text-bold">design tokens</span> that directly connects the <span class="text-bold">Figma designs</span> to the <span class="text-bold">front-end design system codebase</span>, ensuring fast and accurate <span class="text-bold">design-to-code translation</span>. This project is built using <span class="text-bold">Nx Monorepo</span> and <span class="text-bold">Angular</span>, and adopts <span class="text-bold">BEM methodology</span> to create shared components that are scalable.`,
      tags: [
        'Nx Monorepo',
        'Angular',
        'BEM',
        'Design Tokens',
        'Figma Variables',
      ],
    },
    {
      img: { url: 'assets/imgs/projects/improve-cls.png', alt: 'Project 2' },
      link: {
        text: 'Improve CLS Score',
        href: 'https://improve-cls.netlify.app/',
      },
      anotherLink: {
        text: 'View on Github',
        href: 'https://github.com/zizan-azman/improve-cls',
      },
      paragraph: `<span class="text-emphasize">Improve CLS Score</span> is a project focused on <span class="text-emphasize">Cumulative Layout Shift (CLS)</span>, a <span class="text-emphasize">Core Web Vital</span> that affects both <span class="text-emphasize">user experience</span> and <span class="text-emphasize">SEO ranking</span>. Low CLS occurs when page content shifts unexpectedly, leading to a frustrating experience. The project identifies common layout shift scenarios, implements solutions to prevent them, and demonstrates how <span class="text-emphasize">stable layouts</span> improve <span class="text-emphasize">usability</span> and <span class="text-emphasize">search engine performance</span>. This project is built with <span class="text-emphasize">React</span>, <span class="text-emphasize">Vite</span>, and <span class="text-emphasize">TypeScript</span>.`,
      tags: ['Angular', 'TypeScript', 'Web Development', 'CMS Sitecore 10.4'],
    },
  ],
};

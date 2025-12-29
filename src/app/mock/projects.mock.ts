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
      paragraph: `<span class="text-emphasize-light">Siera</span> is a fictional <span class="text-emphasize-light">multi-brand cat shelter</span>. It consists of multiple related brands, each with its own <span class="text-emphasize-light">visual identity</span> and <span class="text-emphasize-light">color themes</span>. The project demonstrates how a <span class="text-emphasize-light">complex multi-brand ecosystem</span> can be efficiently customized and maintained using a <span class="text-emphasize-light">single, scalable design system</span>. It implements <span class="text-emphasize-light">design tokens</span> that directly connects the <span class="text-emphasize-light">Figma designs</span> to the <span class="text-emphasize-light">front-end design system codebase</span>, ensuring fast and accurate <span class="text-emphasize-light">design-to-code translation</span>. This project is built using <span class="text-emphasize-light">Nx Monorepo</span> and <span class="text-emphasize-light">Angular</span>, and adopts <span class="text-emphasize-light">BEM methodology</span> to create shared components that are scalable.`,
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
      paragraph: `<span class="text-emphasize-light">Improve CLS Score</span> is a project focused on <span class="text-emphasize-light">Cumulative Layout Shift (CLS)</span>, a <span class="text-emphasize-light">Core Web Vital</span> that affects both <span class="text-emphasize-light">user experience</span> and <span class="text-emphasize-light">SEO ranking</span>. Low CLS occurs when page content shifts unexpectedly, leading to a frustrating experience. The project identifies common layout shift scenarios, implements solutions to prevent them, and demonstrates how <span class="text-emphasize-light">stable layouts</span> improve <span class="text-emphasize-light">usability</span> and <span class="text-emphasize-light">search engine performance</span>. This project is built with <span class="text-emphasize-light">React</span>, <span class="text-emphasize-light">Vite</span>, and <span class="text-emphasize-light">TypeScript</span>.`,
      tags: ['React', 'Vite', 'Typescript', 'SCSS', 'BEM', 'CLS', 'SEO'],
    },
  ],
};

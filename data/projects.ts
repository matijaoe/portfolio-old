import { Tag } from '~~/models'
import type { Project } from '~~/models'

export const projects: Project[] = [
  {
    name: 'Fare',
    description: 'Application for tracking personal finances and attaining financial independence.',
    tags: [Tag.Nuxt, Tag.Vue, Tag.TypeScript, Tag.UnoCSS, Tag.Prisma],
    year: 2022,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/mat2ja/fire-zavrsni',
      },
    ],
    inProgress: true,
    thumbnail: '/projects/fare.webp',
  },
  {
    name: 'Qwiz',
    description: 'Platform for creation, organization & discovery of pub quizzes.',
    tags: [Tag.Next, Tag.React, Tag.TypeScript, Tag.Nest, Tag.Prisma],
    year: 2022,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/qwiz-app/qwiz',
      },
      {
        label: 'App',
        href: 'https://app.qwiz.party',
      },
    ],
    thumbnail: '/projects/qwiz.webp',
  },
  {
    name: 'Aimo',
    description: 'Platform for connecting motivated individuals with accountability partners.',
    tags: [Tag.Nuxt, Tag.Vue, Tag.Tailwind, Tag.Firebase],
    year: 2021,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/mat2ja/aimo',
      },
      {
        label: 'App',
        href: 'https://aimo.vercel.app',
      },
    ],
    thumbnail: '/projects/aimo.webp',
  },
  {
    name: 'matijao.com',
    description: 'The site you are on.',
    tags: [Tag.Nuxt, Tag.Vue, Tag.TypeScript, Tag.UnoCSS],
    year: 2023,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/mat2ja/matijao.me',
      },
      {
        label: 'App',
        href: 'https://matijao.com',
      },
    ],
    inProgress: true,
    thumbnail: '/projects/matijao.webp',
  },
  {
    name: 'Favicônes',
    description: 'Quick and easy way to use any icon as favicon.',
    tags: [Tag.Nuxt, Tag.Vue, Tag.UnoCSS],
    year: 2022,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/mat2ja/favicones',
      },
      {
        label: 'App',
        href: 'https://favicones.vercel.app/',
      },
    ],
    thumbnail: '/projects/favicones.webp',
  },
  {
    name: 'BTC Tools',
    inProgress: true,
    description: 'BIP39 wordlist preview. More tools coming soon.',
    tags: [Tag.SvelteKit, Tag.TypeScript, Tag.Tailwind],
    year: 2022,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/mat2ja/btc-tools',
      },
      {
        label: 'App',
        href: 'https://bip39-rosy.vercel.app',
      },
    ],
    thumbnail: '/projects/btc-tools.webp',
  },
  {
    name: 'MeetMia',
    description: 'Cake shop concept project built for Web Design college course.',
    tags: [Tag.Vue, Tag.Vite, Tag.TypeScript, Tag.SASS],
    year: 2021,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/mat2ja/meet-mia',
      },
      {
        label: 'App',
        href: 'https://meet-mia.surge.sh/',
      },
    ],
    thumbnail: '/projects/meetmia.webp',
  },
  {
    name: 'Comet',
    description: 'Video streaming platform mockup.',
    tags: [Tag.HTML, Tag.SASS, Tag.JavaScript],
    year: 2020,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/mat2ja/comet',
      },
      {
        label: 'App',
        href: 'https://mat2ja.github.io/comet/',
      },
    ],
    thumbnail: '/projects/comet.webp',
  },
]

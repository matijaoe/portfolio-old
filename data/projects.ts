import { Tag } from '~~/models'
import type { Project } from '~~/models'

export const projects: Project[] = [
  {
    name: 'Fare',
    description: 'Application helping you attain Financial Independence.',
    tags: [Tag.Nuxt, Tag.Vue, Tag.TypeScript, Tag.UnoCSS, Tag.Prisma],
    year: 2022,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/mat2ja/fire-zavrsni',
      },
    ],
    inProgress: true,
    thumbnail: '/projects/fire.webp',
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

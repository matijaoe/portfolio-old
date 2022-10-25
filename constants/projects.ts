import { Tag } from '~~/models'

export const PROJECTS = [
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
        label: 'Live',
        href: 'https://app.qwiz.party',
      },
      {
        label: 'Video demo',
        href: 'https://drive.google.com/file/d/1swh3Bd43ThSkKgEnOpwXu9OcoUbOqt0l/view',
      },
      {
        label: 'API Docs',
        href: 'https://documenter.getpostman.com/view/15639222/UyrDCvUG',
      },
    ],
  },
  {
    name: 'Aimo',
    description: 'Social media app designed for motivated individuals who want to work on themselves, but which require that extra push given to them by our idea of accountability partners. ',
    tags: [Tag.Nuxt, Tag.Vue, Tag.Tailwind, Tag.Firebase],
    year: 2021,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/mat2ja/aimo',
      },
      {
        label: 'Live',
        href: 'https://aimo.vercel.app',
      },
    ],
  },
  {
    name: 'FIRE Platform',
    description: 'Platform for Financial independence, Retire early community.',
    tags: [Tag.Nuxt, Tag.Vue, Tag.TypeScript, Tag.UnoCSS, Tag.Prisma],
    year: 2023,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/mat2ja/fire-zavrsni',
      },
    ],
    inProgress: true,
  },
  {
    name: 'Expense tracker',
    description: 'Final project of Advanced JavaScript college course',
    tags: [Tag.Vue, Tag.TypeScript, Tag.Vite, Tag.Node, Tag.Mongo],
    year: 2022,
    links: [
      {
        label: 'Frontend',
        href: 'https://github.com/mat2ja/expenses-frontend',
      },
      {
        label: 'Backend',
        href: 'https://github.com/mat2ja/expenses-frontend',
      },
      {
        label: 'Live',
        href: 'https://expenses-frontend-five.vercel.app',
      },
    ],
  },
  {
    name: 'MeetMia',
    description: 'Cake shop concept project for Web Design college course',
    tags: [Tag.Vue, Tag.Vite, Tag.TypeScript, Tag.UnoCSS],
    year: 2021,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/mat2ja/meet-mia',
      },
      {
        label: 'Live',
        href: 'https://meet-mia.surge.sh/',
      },
    ],
  },
  {
    name: 'Comet',
    description: 'Video streaming platform mockup',
    tags: [Tag.HTML, Tag.SCSS, Tag.JavaScript],
    year: 2020,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/mat2ja/comet',
      },
      {
        label: 'Live',
        href: 'https://mat2ja.github.io/comet/',
      },
    ],
  },
]

import type { Project } from '~~/models'
import { Tag } from '~~/models'

export const PROJECTS: Project[] = [
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
    thumbnail: 'https://github.com/qwiz-app/qwiz/raw/main/design.png',
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
    thumbnail: 'https://media.cleanshot.cloud/media/40197/EVcfBjpVmq0HfwOGnomNzfZvPZsdLyJePyEnKkaE.jpeg?Expires=1666830670&Signature=oM3IaABQAF1z4AkxkA2E45Uy~98Zkuyrvk5qE7SxTmvTkb0NQ6BcgIiIz~9Mxkm868mYxLdE2ikZhB8-LMM-VZDopz8lAsnupPcfrZ7IoqHdixI11CXRvIVawZU2TsNjKDwobd49ngblmIoiydg2M3CNo6WE3w3eok-yxJSTl8BxmkTza0psEVMBA9BOdGFhGALFjrBCC5aHmKpNscafuq1-w2quxsO~BHQprJFOxd5fZb-y6vWUvCQl5Fai~I3N3KQMoHTYQqqKi7wp4WZp~2xUiI07ZKmP5GA7kqAdXEbk8nAihwZ8LjziizIO1mwUCiKLZT6LzHjb1aFJY8N2hA__&Key-Pair-Id=K269JMAT9ZF4GZ',
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
    thumbnail: 'https://cdn.discordapp.com/attachments/1010508281447460864/1031553495553278084/unknown.png',
  },
  {
    name: 'Personal site',
    description: 'My personal site',
    tags: [Tag.Nuxt, Tag.Vue, Tag.TypeScript, Tag.UnoCSS],
    year: 2023,
    links: [
      {
        label: 'Code',
        href: 'https://github.com/mat2ja/matijao.me',
      },
      {
        label: 'Live',
        href: 'https://matijao.vercel.app',
      },
    ],
    inProgress: true,
    thumbnail: 'https://media.cleanshot.cloud/media/40197/IOxqgjbvJuCwPazOwLO6Du2xlG9Zkcn6uS0WeH3z.jpeg?Expires=1666832136&Signature=o-vWdpA9UoNerIg~9lAy0w76bRN0Tc-Ep8vSaqNUAByGMoDvop8XuLeX94TiFuar0YwbrnXnsbkSAqU1DttmZ0rrCIb7b9BKe8rjxhjMUDgxvHYC0T6S9uyvB3ONGBosy~dc6WiGZVwhEwnW9HHA2~ZbKXosij-xy-6JEN6X2QwdUuzO~3gXJeoLPEAcsHBgmM9EKarS8iuarsTKlmeVIaPAVoPC8i9q8pxA6RL~RX84BLz~x5lIgqj~k5ub7fDkXRHO0zZu2-ZuwV-KoPQqUwqbPRu5w07qarTmq13KwUPjTl55aFRrmc3BSl4i61WAUSTvltJ09IwtobzseMcaHQ__&Key-Pair-Id=K269JMAT9ZF4GZ',
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
        href: 'https://github.com/mat2ja/expenses-backend',
      },
      {
        label: 'Live',
        href: 'https://expenses-frontend-five.vercel.app',
      },
    ],
    thumbnail: 'https://user-images.githubusercontent.com/46557266/164997459-3fe121e6-5e5f-4f8d-8c92-ee8ea8d7f7ca.png',
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
    thumbnail: 'https://user-images.githubusercontent.com/46557266/164997631-e06d68ec-08e8-4c4a-a938-d3eace2a1dc0.png',
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
    thumbnail: 'https://github.com/mat2ja/comet/raw/master/img/screenshots/screenshot1.png',
  },
]

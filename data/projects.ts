import { Tag } from '~~/models'
import type { Project } from '~~/models'

export const projects: Project[] = [
  {
    name: 'Fare',
    description: 'Application for tracking personal finances and attaining financial independence.',
    tags: [Tag.Nuxt, Tag.Vue, Tag.TypeScript, Tag.UnoCSS, Tag.Prisma],
    year: 2022,
    repo: 'https://github.com/mat2ja/fire-zavrsni',
    thumbnail: '/projects/fare.webp',
  },
  {
    name: 'Qwiz',
    description: 'Platform for creation, organization & discovery of pub quizzes.',
    tags: [Tag.Next, Tag.React, Tag.TypeScript, Tag.Nest, Tag.Prisma],
    year: 2022,
    repo: 'https://github.com/qwiz-app/qwiz',
    url: 'https://app.qwiz.party',
    thumbnail: '/projects/qwiz.webp',
  },
  {
    name: 'Aimo',
    description: 'Platform for connecting motivated individuals with accountability partners.',
    tags: [Tag.Nuxt, Tag.Vue, Tag.Tailwind, Tag.Firebase],
    year: 2021,
    repo: 'https://github.com/mat2ja/aimo',
    url: 'https://aimo.vercel.app',

    thumbnail: '/projects/aimo.webp',
  },
  {
    name: 'matijao.com',
    description: 'The site you are on.',
    tags: [Tag.Nuxt, Tag.Vue, Tag.TypeScript, Tag.UnoCSS],
    year: 2023,
    repo: 'https://github.com/mat2ja/matijao.me',
    url: 'https://matijao.com',
    wip: true,
    thumbnail: '/projects/matijao.webp',
  },
  {
    name: 'Favicônes',
    description: 'Quick and easy way to use any icon as favicon.',
    tags: [Tag.Nuxt, Tag.Vue, Tag.UnoCSS],
    year: 2022,
    repo: 'https://github.com/mat2ja/favicones',
    url: 'https://favicones.vercel.app/',
    thumbnail: '/projects/favicones.webp',
  },
  {
    name: 'BTC Tools',
    wip: true,
    description: 'BIP39 wordlist preview. More tools coming soon.',
    tags: [Tag.SvelteKit, Tag.TypeScript, Tag.Tailwind],
    year: 2022,
    repo: 'https://github.com/mat2ja/btc-tools',
    url: 'https://bip39-rosy.vercel.app',
    thumbnail: '/projects/btc-tools.webp',
  },
  {
    name: 'MeetMia',
    description: 'Cake shop concept project built for Web Design college course.',
    tags: [Tag.Vue, Tag.Vite, Tag.TypeScript, Tag.SASS],
    year: 2021,
    repo: 'https://github.com/mat2ja/meet-mia',
    url: 'https://meet-mia.surge.sh/',
    thumbnail: '/projects/meetmia/thumbnail.webp',
    images: [
      '/projects/meetmia/01.webp',
    ],
  },
  {
    name: 'Comet',
    description: 'Video streaming platform mockup.',
    tags: [Tag.HTML, Tag.SASS, Tag.JavaScript],
    year: 2020,
    repo: 'https://github.com/mat2ja/comet',
    url: 'https://mat2ja.github.io/comet/',
    thumbnail: '/projects/comet.webp',
  },
]

export const extensions: Project[] = [
  {
    name: 'Vue Ecosystem Snippets',
    description: 'Snippets for the modern Vue ecosystem',
    year: 2023,
    url: 'https://marketplace.visualstudio.com/items?itemName=matijao.vue-nuxt-snippets',
    tags: [Tag.Deno, Tag.TypeScript],
  },
  {
    name: 'Modern JavaScript Snippets',
    description: 'Snippets for the modern Vue ecosystem - including Nuxt 3, Pinia, VueUse & Vue Router.',
    year: 2023,
    url: 'https://marketplace.visualstudio.com/items?itemName=matijao.vue-nuxt-snippets',
    tags: [Tag.Deno, Tag.TypeScript],
  },
  {
    name: 'URL Editor for Chrome',
    description: 'Chrome Extension',
    year: 2023,
    repo: 'https://github.com/mat2ja/url-editor',
    tags: [Tag.React, Tag.Tailwind],
    wip: true,
  },
  {
    name: 'Raycast Project Scaffolder',
    description: 'Quickly scaffold a new project using official templates',
    year: 2023,
    url: undefined,
    tags: [Tag.React],
    wip: true,
  },
  {
    name: 'pnpm.plugin.zsh',
    description: 'Oh My Zsh aliases for common pnpm commands',
    year: 2023,
    repo: 'https://github.com/mat2ja/pnpm.plugin.zsh',
    tags: [Tag.Bash],
  },
]

export const starters: Project[] = [
  {
    name: 'Nuxt Starter',
    description: 'Nuxt 3 & UnoCSS starter template',
    year: 2023,
    repo: 'https://github.com/mat2ja/nuxt-starter',
    url: 'https://nuxt-starter-iota.vercel.app/',
    tags: [Tag.Nuxt, Tag.UnoCSS],
  },
  {
    name: 'Vue Starter',
    description: 'Vue & UnoCSS starter template',
    year: 2023,
    repo: 'https://github.com/mat2ja/vue-starter',
    url: 'https://vue-uno-starter.vercel.app/',
    tags: [Tag.Vue, Tag.UnoCSS],
  },
  {
    name: 'Vue & Anu Starter',
    description: 'Vue & Anu starter template',
    year: 2023,
    repo: 'https://github.com/mat2ja/vue-anu-starter',
    url: 'https://vue-anu-starter.vercel.app/',
    tags: [Tag.Vue, Tag.UnoCSS],
  },

]

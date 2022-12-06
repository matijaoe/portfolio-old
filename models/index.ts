import type { RouteLocationRaw } from 'vue-router'

export enum Tag {
  Vue = 'vue',
  Nuxt = 'nuxt',
  React = 'react',
  Next = 'next',
  TypeScript = 'typescript',
  JavaScript = 'javascript',
  SASS = 'sass',
  HTML = 'html',
  Tailwind = 'tailwind',
  Vite = 'vite',
  UnoCSS = 'unocss',
  Node = 'node',
  Express = 'express',
  Nest = 'nest',
  Firebase = 'firebase',
  Prisma = 'prisma',
  Mongo = 'mongo',
}

export type Project = {
  name: string
  description: string
  tags: Tag[]
  year: number
  links: {
    label: string
    href: string
  }[]
  inProgress?: boolean
  thumbnail?: any
}

export type NavCard = {
  title: string
  description: string
  to: RouteLocationRaw
  icon: string
}

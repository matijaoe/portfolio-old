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
  SvelteKit = 'sveltekit',
  Deno = 'deno',
  Bash = 'bash',
}

export type Project = {
  name: string
  description: string
  tags: Tag[]
  year: number
  repo?: string
  url?: string
  wip?: boolean
  thumbnail?: string
  images?: string[]
}

export type NavCard = {
  title: string
  description: string
  to: RouteLocationRaw
  icon: string
}

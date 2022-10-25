export enum Tag {
  Vue = 'vue',
  Nuxt = 'nuxt',
  React = 'react',
  Next = 'next',
  TypeScript = 'typescript',
  Tailwind = 'tailwind',
  Vite = 'vite',
  UnoCSS = 'unocss',
  Node = 'node',
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
  links?: {
    label: string
    href: string
  }[]
}

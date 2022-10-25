<script lang="ts" setup>
import type { Project } from '~~/models'
import { Tag } from '~~/models'

definePageMeta({
  accent: 'to-emerald-9',
})

const projects = ref<Project[]>([
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
        label: 'Code (frontend)',
        href: 'https://github.com/mat2ja/expenses-frontend',
      },
      {
        label: 'Code (backend)',
        href: 'https://github.com/mat2ja/expenses-backend',
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
])
</script>

<template>
  <div>
    <BaseHeading as="h2" text-6xl>
      Projects
    </BaseHeading>

    <!-- flex flex-col gap-10 -->
    <div mt-10 grid grid-cols-2 gap-x-10 gap-y-14>
      <ProjectCard
        v-for="project in projects"
        :key="project.name"
        :project="project"
        max-w-lg relative flex gap-4
      />
    </div>
  </div>
</template>

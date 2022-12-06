<script lang="ts" setup>
import { Switch } from '@headlessui/vue'

const skills = [
  {
    name: 'Vue',
    value: 'vue',
    icon: 'logos:vue',
    favorite: true,
    desc: 'The Progressive JavaScript Framework.',
    url: 'https://vuejs.org',
  },
  {
    name: 'Nuxt',
    value: 'nuxt',
    icon: 'logos:nuxt-icon',
    favorite: true,
    desc: 'The Intuitive Web Framework',
    url: 'https://nuxt.com',
  },
  {
    name: 'TypeScript',
    value: 'typescript',
    icon: 'logos:typescript-icon',
    favorite: true,
    desc: 'JavaScript that scales.',
    url: 'https://www.typescriptlang.org',
  },
  {
    name: 'Svelte',
    value: 'svelte',
    icon: 'logos:svelte-icon',
    favorite: true,
    desc: 'Cybernetically enhanced web apps.',
    url: 'https://svelte.dev',
  },
  {
    name: 'Tailwind CSS',
    value: 'tailwindcss',
    icon: 'logos:tailwindcss-icon',
    favorite: true,
    desc: 'A utility-first CSS framework.',
    url: 'https://tailwindcss.com',
  },
  {
    name: 'UnoCSS',
    value: 'unocss',
    icon: 'logos:unocss',
    favorite: true,
    desc: 'The instant on-demand atomic CSS engine.',
    url: 'https://github.com/unocss/unocss',
  },
  {
    name: 'Sass',
    value: 'scss',
    icon: 'logos:sass',
    favorite: false,
    desc: 'Syntactically Awesome Style Sheets.',
    url: 'https://sass-lang.com/',
  },
  {
    name: 'TanStack Query',
    value: 'tanstack query',
    icon: 'logos:react-query-icon',
    favorite: true,
    desc: 'Powerful asynchronous state management.',
    url: 'https://tanstack.com/query',
  },
  {
    name: 'React',
    value: 'react',
    icon: 'logos:react',
    favorite: false,
    desc: 'A JavaScript library for building user interfaces.',
    url: 'https://reactjs.org',
  },
  {
    name: 'Next',
    value: 'next',
    icon: 'logos:nextjs-icon',
    favorite: false,
    desc: 'Production grade React applications that scale.',
    url: 'https://nextjs.org',
  },
  {
    name: 'Vite',
    value: 'vite',
    icon: 'logos:vitejs',
    favorite: true,
    desc: 'Next Generation Frontend Tooling.',
    url: 'https://vitejs.dev',
  },
  {
    name: 'Prisma',
    value: 'prisma',
    icon: 'logos:prisma',
    favorite: true,
    url: 'https://prisma.io',
    desc: 'Next-generation Node.js and TypeScript ORM.',
  },
  {
    name: 'PostgreSQL',
    value: 'postgresql',
    icon: 'logos:postgresql',
    favorite: false,
    desc: 'The World\'s Most Advanced Open Source Relational Database.',
    url: 'https://postgresql.org',
  },
  {
    name: 'Nest',
    value: 'nest',
    icon: 'logos:nestjs',
    favorite: false,
    desc: 'Node framework for building enterprise-grade server-side applications.',
    url: 'https://nestjs.com',
  },
  {
    name: 'Node',
    value: 'node',
    icon: 'logos:nodejs-icon',
    favorite: false,
    desc: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine',
    url: 'https://nodejs.org',
  },
  {
    name: 'Python',
    value: 'python',
    icon: 'logos:python',
    favorite: false,
    desc: 'Build complex application using simple, readable, and versatile syntax',
    url: 'https://python.org',
  },
]
const favsOnly = $ref(false)
const shownSkills = computed(() => favsOnly ? skills.filter(({ favorite }) => !!favorite) : skills)
</script>

<template>
  <AboutSection title="Skills">
    <!-- <template #right>
      <div flex gap-4 items-center>
        <p
          uppercase font-sans font-semibold text-sm text-default
          class="decoration-2"
          :class="favsOnly ? 'text-default' : 'text-stone-3 !dark:text-stone-7 line-through'"
        >
          favorites
        </p>
        <Switch
          v-model="favsOnly"
          :class="favsOnly ? 'bg-stone-8 dark:bg-accent' : 'bg-stone-2 dark:bg-stone-7'"
          class="relative inline-flex h-6 w-11 items-center rounded-full"
          transition-base
        >
          <span
            :class="favsOnly ? 'translate-x-6' : 'translate-x-1'"
            class="inline-block h-4 w-4 transform rounded-full bg-white dark:bg-stone-9"
            transition-base
          />
        </Switch>
      </div>
    </template> -->

    <div
      v-auto-animate
      grid grid-cols="1 md:2 lg:4" grid-rows="4" gap-4
    >
      <a
        v-for="item in shownSkills"
        :key="item.value"
        :href="item.url"
        target="_blank"
        class="group"
      >
        <article
          select-none p-8 text-center
          h-full
          rounded-2xl transition-all duration-300
          class="backdrop-blur-md bg-stone-50 ring-1 ring-stone-9/5 dark:(bg-stone-8/40 ring-stone-7/40) hover:(-translate-y-1)"
        >
          <div flex flex-col justify-center items-center gap-6>
            <Icon shrink-0 :name="item.icon" text-5xl />

            <div flex flex-col gap-2>
              <p font-medium text-lg>
                {{ item.name }}
              </p>
              <p text-stone-5 dark:text-stone-4 text-sm>
                {{ item.desc ?? 'Random thing about it' }}
              </p>
            </div>
          </div>
        </article>
      </a>
    </div>
  </AboutSection>
</template>

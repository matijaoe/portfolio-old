<script lang="ts" setup>
import { Switch } from '@headlessui/vue'

const skills = [
  {
    name: 'Vue',
    value: 'vue',
    icon: 'logos:vue',
    favorite: true,
    desc: 'My bread and butter',
  },
  {
    name: 'Nuxt',
    value: 'nuxt',
    icon: 'logos:nuxt-icon',
    favorite: true,
    desc: 'Vue, but on a server? No way',
  },
  {
    name: 'TypeScript',
    value: 'typescript',
    icon: 'logos:typescript-icon',
    favorite: true,
    desc: 'Make me safe',
  },
  {
    name: 'React',
    value: 'react',
    icon: 'logos:react',
    favorite: false,
    desc: 'A necessary evil',
  },
  {
    name: 'Next',
    value: 'next',
    icon: 'logos:nextjs-icon',
    favorite: false,
    desc: 'The cool kid',
  },
  {
    name: 'JavaScript',
    value: 'javascript',
    icon: 'logos:javascript',
  },
  {
    name: 'Svelte',
    value: 'svelte',
    icon: 'logos:svelte-icon',
    favorite: true,
    desc: 'The future',
  },
  {
    name: 'Vite',
    value: 'vite',
    icon: 'logos:vitejs',
    favorite: true,
    desc: 'Blazingly™ fast',
  },
  {
    name: 'Tanstack Query',
    value: 'tanstack query',
    icon: 'logos:react-query-icon',
    favorite: true,
  },
  {
    name: 'Tailwind CSS',
    value: 'tailwindcss',
    icon: 'logos:tailwindcss-icon',
    favorite: true,
    desc: 'The og atomic CSS',
  },
  {
    name: 'UnoCSS',
    value: 'unocss',
    icon: 'logos:unocss',
    favorite: true,
    desc: 'The only way I do css',
  },
  {
    name: 'SCSS',
    value: 'scss',
    icon: 'logos:sass',
    favorite: false,
  },
  {
    name: 'Storybook',
    value: 'storybook',
    icon: 'logos:storybook-icon',
    favorite: false,
  },
  {
    name: 'Nest',
    value: 'nest',
    icon: 'logos:nestjs',
    favorite: false,
    desc: 'Love the structure',
  },
  {
    name: 'Node',
    value: 'node',
    icon: 'logos:nodejs-icon',
    favorite: false,
  },
  {
    name: 'Express',
    value: 'express',
    icon: 'simple-icons:express',
    favorite: false,
  },
  {
    name: 'Prisma',
    value: 'prisma',
    icon: 'logos:prisma',
    favorite: true,
  },
  {
    name: 'SQL',
    value: 'postgresql',
    icon: 'logos:postgresql',
    favorite: false,
    desc: 'The ol\' reliable',
  },
  {
    name: 'MongoDB',
    value: 'mongodb',
    icon: 'logos:mongodb-icon',
    favorite: false,
  },
  {
    name: 'Python',
    value: 'python',
    icon: 'logos:python',
    favorite: false,
  },
  {
    name: 'Figma',
    value: 'figma',
    icon: 'logos:figma',
    favorite: false,
  },
]
const favsOnly = ref(true)
const shownSkills = computed(() => favsOnly.value ? skills.filter(skill => skill.favorite) : skills)
</script>

<template>
  <AboutSection title="Skills">
    <template #right>
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
    </template>
    <div
      v-auto-animate
      grid grid-cols="1 md:2 lg:3" gap-3
    >
      <article
        v-for="item in shownSkills"
        :key="item.value"
        p-6
        rounded-lg
        transition-base
        max-h="96px"
        transition-all duration-300
        class="backdrop-blur-md bg-transparent ring-1 ring-stone-9/5 dark:(bg-stone-8/40 ring-stone-7/40) hover:(-translate-y-1)"
      >
        <div flex items-center gap-5>
          <Icon shrink-0 :name="item.icon" text-4xl />
          <div>
            <div flex items-center gap-3>
              <p font-medium text-xl>
                {{ item.name }}
              </p>
            </div>
            <p text-stone-4 dark:text-stone-5 text-sm line-clamp-1>
              {{ item.desc ?? 'Random thing about it' }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </AboutSection>
</template>

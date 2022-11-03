<script lang="ts" setup>
import { Switch } from '@headlessui/vue'

const skills = [
  {
    name: 'Vue',
    value: 'vue',
    icon: 'logos:vue',
    favorite: true,
  },
  {
    name: 'Nuxt',
    value: 'nuxt',
    icon: 'logos:nuxt-icon',
    favorite: true,
  },
  {
    name: 'TypeScript',
    value: 'typescript',
    icon: 'logos:typescript-icon',
    favorite: true,
  },
  {
    name: 'React',
    value: 'react',
    icon: 'logos:react',
    favorite: false,
  },
  {
    name: 'Next',
    value: 'next',
    icon: 'logos:nextjs-icon',
    favorite: false,
  },
  {
    name: 'JavaScript',
    value: 'javascript',
    icon: 'logos:javascript',
  },
  {
    name: 'Vite',
    value: 'vite',
    icon: 'logos:vitejs',
    favorite: true,
  },
  {
    name: 'Tailwind CSS',
    value: 'tailwindcss',
    icon: 'logos:tailwindcss-icon',
    favorite: true,
  },
  {
    name: 'UnoCSS',
    value: 'unocss',
    icon: 'logos:unocss',
    favorite: true,
  },
  {
    name: 'SCSS',
    value: 'scss',
    icon: 'logos:sass',
    favorite: false,
  },
  {
    name: 'Tanstack Query',
    value: 'tanstack query',
    icon: 'logos:react-query-icon',
    favorite: true,
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
    favorite: true,
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
  {
    name: 'Linux',
    value: 'linux',
    icon: 'logos:linux-tux',
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
        <p uppercase font-sans font-semibold text-sm text-default :class="favsOnly ? 'text-default' : '!text-stone-7 line-through'">
          favorites
        </p>
        <Switch
          v-model="favsOnly"
          :class="favsOnly ? 'bg-stone-8 dark:bg-green-5' : 'bg-stone-2 dark:bg-stone-7'"
          class="relative inline-flex h-6 w-11 items-center rounded-full"
        >
          <span
            :class="favsOnly ? 'translate-x-6' : 'translate-x-1'"
            class="inline-block h-4 w-4 transform rounded-full bg-white dark:bg-stone-9 transition"
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
        transition
        max-h="96px"
        class="hover:-translate-y-1 shadow-md shadow-stone-800/5 ring-1 ring-stone-900/5 dark:border dark:border-stone-700/50 dark:bg-stone-800 dark:ring-0"
      >
        <div flex items-center gap-5>
          <Icon shrink-0 :name="item.icon" text-4xl />
          <div>
            <div flex items-center gap-3>
              <p font-medium text-xl>
                {{ item.name }}
              </p>
            </div>
            <p text-opaque text-sm line-clamp-1>
              Research Games best-of-breed Research
            </p>
          </div>
        </div>
      </article>
    </div>
  </AboutSection>
</template>

<script lang="ts" setup>
import { projects } from '~~/data/projects'
import type { Project } from '~~/models'

useHead({
  title: 'Projects | Matija Osrečki',
})

// const extension = ref<Project[]>([
//   {
//     name: 'Vue Ecosystem Snippets',
//     description: 'Snippets for the modern Vue ecosystem - including Nuxt 3, Pinia, VueUse & Vue Router.',
//     url: 'https://marketplace.visualstudio.com/items?itemName=matijao.vue-nuxt-snippets',

//   },
// ])
</script>

<template>
  <div row pb-10 md:pb-30>
    <BaseHeading as="h2" text-4xl sm:text-5xl md:text-6xl>
      Projects
    </BaseHeading>

    <div mt-8 md:mt-12 flex flex-col gap-5 md:gap-8>
      <ProjectCard
        v-for="(project, i) in projects"
        :key="i"
        :index="i"
        :project="project"
      />
    </div>
  </div>
</template>

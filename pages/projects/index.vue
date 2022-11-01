<script lang="ts" setup>

import { projects } from '~~/data/projects'

useHead({
  title: 'Projects | Matija Osrecki',
})
</script>

<template>
  <div row pb-30>
    <BaseHeading
      as="h2" text-4xl sm:text-5xl md:text-6xl
    >
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

<script lang="ts" setup>
import { PROJECTS } from '~~/constants/projects'

useHead({
  title: 'Projects | Matija Osrecki',
})
definePageMeta({
  accent: 'to-emerald-9',
  bg: 'bg-emerald-9',
})
</script>

<template>
  <div>
    <BaseHeading as="h2" text-4xl sm:text-5xl md:text-6xl>
      Projects
    </BaseHeading>

    <div mt-12 flex flex-col gap-8>
      <ProjectCard
        v-for="(project, i) in PROJECTS"
        :key="i"
        :index="i"
        :project="project"
      />
    </div>
  </div>
</template>

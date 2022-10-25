<script lang="ts" setup>
import { PROJECTS } from '~~/constants/projects'

useHead({
  title: 'Projects | Matija Osrecki',
})
definePageMeta({
  accent: 'to-emerald-9',
})
</script>

<template>
  <div>
    <BaseHeading as="h2" text-6xl>
      Projects
    </BaseHeading>

    <div mt-12 flex flex-col gap-8>
      <ProjectCard
        v-for="project in PROJECTS"
        :key="project.name"
        :project="project"
        max-w-lg relative flex gap-4
      />
    </div>
  </div>
</template>

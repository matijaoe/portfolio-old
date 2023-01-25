<script lang="ts" setup>
import { extensions, projects, starters } from '~~/data/projects'

useHead({
  title: 'Projects | Matija Osrečki',
})
</script>

<template>
  <div row pb-10 md:pb-30>
    <BaseHeading as="h2" text-4xl sm:text-5xl md:text-6xl>
      Projects
    </BaseHeading>

    <div space-y-32>
      <section mt-8 md:mt-12 flex flex-col gap-5 md:gap-7>
        <ProjectCard
          v-for="(project, i) in projects"
          :key="i"
          :index="i"
          :project="project"
        />
      </section>

      <div>
        <BaseHeading as="h3" text-xl sm:text-2xl md:text-3xl>
          Extensions and plugins
        </BaseHeading>
        <section mt-6 grid md:grid-cols-2 gap-x-5 gap-y-4>
          <ProjectCardSimple
            v-for="(project, i) in extensions"
            :key="i"
            :index="i"
            :project="project"
          />
        </section>
      </div>

      <div>
        <BaseHeading as="h3" text-xl sm:text-2xl md:text-3xl>
          Project starter templates
        </BaseHeading>
        <section mt-6 grid md:grid-cols-2 gap-x-5 gap-y-4>
          <ProjectCardSimple
            v-for="(project, i) in starters"
            :key="i"
            :index="i"
            :project="project"
          />
        </section>
      </div>
    </div>
  </div>
</template>

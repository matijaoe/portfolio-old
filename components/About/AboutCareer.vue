<script lang="ts" setup>
import { jobs } from '~~/data/jobs'
</script>

<template>
  <AboutSection title="Career">
    <div space-y-6 z-2>
      <div v-for="(job, i) in jobs" :key="i" flex flex-col gap-1>
        <BaseHeading as="h6" text-lg leading-snug>
          {{ job.position }}
        </BaseHeading>
        <div flex items-center gap-2>
          <a :href="job.company.url" target="_blank" hyperlink>{{ job.company.name }}</a>
          <span>•</span>
          <span text-dimmed>{{ job.company.location }}</span>
        </div>
        <div text-dimmed text-sm flex items-center gap-2>
          <span>{{ job.from }} – {{ job.to }}</span>
          <span>•</span>
          <span>{{ job.duration }}</span>
        </div>
      </div>
    </div>
  </AboutSection>
</template>

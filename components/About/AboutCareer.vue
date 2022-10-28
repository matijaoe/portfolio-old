<script lang="ts" setup>
import { jobs } from '~~/data/jobs'
</script>

<template>
  <AboutSection title="Career">
    <div v-for="(job, i) in jobs" :key="i" flex flex-col gap-1>
      <BaseHeading as="h6" text-lg>
        {{ job.position }}
      </BaseHeading>
      <div flex items-center gap-2>
        <a :href="job.company.url" target="_blank" class="hyperlink">{{ job.company.name }}</a>
        <span text-orange-5>•</span>
        <span text-dimmed font-light>{{ job.company.location }}</span>
      </div>
      <div text-dimmed font-light flex items-center gap-2>
        <span>{{ job.from }} – {{ job.to }}</span>
        <span text-orange-5>•</span>
        <span>{{ job.duration }}</span>
      </div>
    </div>
  </AboutSection>
</template>

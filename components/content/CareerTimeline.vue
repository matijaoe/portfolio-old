<script setup lang="ts">
import { jobs } from '~~/data/jobs'
defineProps<{
  text?: string
}>()
</script>

<template>
  <div v-for="(job, i) in jobs" :key="i" flex flex-col gap-1>
    {{ text }}
    <BaseHeading as="h6" text-lg>
      {{ job.position }}
    </BaseHeading>
    <div flex items-center gap-2>
      <a :href="job.company.url" target="_blank" class="hyperlink">{{ job.company.name }}</a>
      <span text-orange-5>•</span>
      <span text-dimmed>{{ job.company.location }}</span>
    </div>
    <div text-dimmed flex items-center gap-2>
      <span>{{ job.from }} – {{ job.to }}</span>
      <span text-orange-5>•</span>
      <span>{{ job.duration }}</span>
    </div>
  </div>
</template>

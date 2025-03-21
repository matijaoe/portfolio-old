<script lang="ts" setup>
import { addMonths, differenceInMonths } from 'date-fns'
import { jobs } from '~~/data/jobs'

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
  }).format(date)
}

function calculateDuration(from: Date, to: Date | null) {
  if (to === null)
    to = addMonths(new Date(), 1)

  const months = differenceInMonths(addMonths(to, 1), from)
  if (months < 12) {
    return `${months} months`
  }
  else {
    const years = Math.floor(months / 12)
    const monthsLeft = months % 12
    if (!monthsLeft)
      return `${years} year${years > 1 ? 's' : ''}`

    return `${years} years, ${monthsLeft} months`
  }
}
</script>

<template>
  <AboutSection title="Career" icon="ph:briefcase-duotone">
    <div space-y-6 z-2>
      <div
        v-for="(job, i) in jobs"
        :key="i"
        flex flex-col gap-1
      >
        <h6 text-lg leading-snug font-semibold>
          {{ job.position }}
        </h6>

        <div flex items-center gap-2>
          <NuxtLink
            :to="job.company.url" target="_blank" external
            hyperlink-wavy
          >
            {{ job.company.name }}
          </NuxtLink>
          <span>•</span>
          <span text-dimmed>{{ job.company.location }}</span>
        </div>

        <div text-dimmed text-sm flex items-center gap-2 ml="0.5">
          <span>{{ formatDate(job.from) }} – {{ job.to ? formatDate(job.to) : 'Present' }}</span>
          <span>•</span>
          <span>{{ calculateDuration(job.from, job.to) }}</span>
        </div>
      </div>
    </div>
  </AboutSection>
</template>

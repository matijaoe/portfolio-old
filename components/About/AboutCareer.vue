<script lang="ts" setup>
const { jobs } = useJobs()
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
          <a
            :href="job.company.url" target="_blank"
            hyperlink-wavy
          >{{ job.company.name }}</a>
          <span>•</span>
          <span text-dimmed>{{ job.company.location }}</span>
        </div>

        <div text-dimmed text-sm flex items-center gap-2 ml="0.5">
          <span>{{ job.from }} – {{ job.to }}</span>
          <span>•</span>
          <span>{{ job.duration }}</span>
        </div>
      </div>
    </div>
  </AboutSection>
</template>

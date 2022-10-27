<script lang="ts" setup>
const jobs = [
  {
    position: 'Frontend Developer',
    company: {
      name: 'Four of them LLC',
      location: 'Zapresic, Croatia',
      url: 'https://www.4ofthem.eu/',
    },
    from: 'Aug 2022',
    to: 'Present',
    duration: '4 months',
    remote: true,
  },
  {
    position: 'Junior Frontend Developer',
    company: {
      name: 'Three of them LLC',
      location: 'Zapresic, Croatia ',
      url: 'https://www.3ofthem.eu/',
    },
    from: 'Aug 2021',
    to: 'July 2022',
    duration: '1 year',
    remote: true,
  },
  {
    position: 'Junior Full Stack Developer',
    company: {
      name: 'Infokarta',
      location: 'Split, Croatia',
      url: 'https://infokarta.hr/',
    },
    from: 'May 2021',
    to: 'Jul 2021',
    duration: '3 months',
    remote: true,
  },
]
</script>

<template>
  <AboutSection title="Career">
    <div v-for="(job, i) in jobs" :key="i" flex flex-col gap-1>
      <BaseHeading as="h6" text-lg>
        {{ job.position }}
      </BaseHeading>
      <div flex items-center gap-2>
        <a :href="job.company.url" target="_blank" class="hyperlink">{{ job.company.name }}</a>
        <span>•</span>
        <span text-dimmed font-light>{{ job.company.location }}</span>
        <!-- <template v-if="job.remote">
            <span>•</span>
            <span text-dimmed font-light>Remote</span>
          </template> -->
      </div>
      <div text-dimmed font-light flex items-center gap-2>
        <span>{{ job.from }} – {{ job.to }}</span>
        <span>•</span>
        <span>{{ job.duration }}</span>
      </div>
    </div>
  </AboutSection>
</template>

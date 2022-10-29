<script lang="ts" setup>
const skills = [
  'vue',
  'nuxt',
  'react',
  'next',
  'javascript',
  'typescript',
  'tailwind',
  'unocss',
  'scss',
  'vite',
  'node',
  'express',
  'nest',
  'prisma',
  'sql',
  'mongo',
  'python',
  'query',
  'storybook',
  'linux',
]
</script>

<template>
  <AboutSection title="Skills">
    <a flex flex-wrap gap-2>
      <ProjectTag v-for="item in skills" :key="item">
        {{ item }}
      </ProjectTag>
    </a>
  </AboutSection>
</template>

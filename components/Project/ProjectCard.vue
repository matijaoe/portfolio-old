<script setup lang="ts">
import type { Project } from '~~/models'

defineProps<{
  project: Project
}>()
</script>

<template>
  <div>
    <div class="write-vertical-left rotate-180 text-right" top="50%" font-bold text-5xl text-stone-2 opacity-20>
      {{ project.year }}
    </div>

    <div flex flex-col gap-2>
      <h3 font-display text-2xl>
        {{ project.name }}
      </h3>
      <p text-sm opacity-80>
        {{ project.description }}
      </p>

      <div v-if="project.links?.length" text-sm flex items-center gap-3>
        <div v-for="(link, i) in project.links" :key="i" flex gap-4>
          <NuxtLink :href="link.href" target="_blank" underline>
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>

      <ul mt-2 flex items-center flex-wrap gap-2 text="11px" lowercase font-bold>
        <li v-for="tag in project.tags" :key="tag" py="0.5" px-2 bg-black font-mono cursor="pointer" rounded-full>
          {{ tag }}
        </li>
      </ul>
    </div>
  </div>
</template>

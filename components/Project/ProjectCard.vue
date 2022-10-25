<script setup lang="ts">
import type { Project } from '~~/models'

const props = defineProps<{
  project: Project
}>()

const initalLink = ref(props.project.links[0].href)
</script>

<template>
  <!-- TODO: show image over card on hover, onak fensi -->
  <div class="lg:-translate-x-4 sm:hover:(bg-zinc-6/20 lg:translate-x-0) transition-all sm:pl-3 pr-5" py-4 rounded-md cursor-pointer>
    <div hidden sm:block class="write-vertical-left rotate-180 text-right" top="50%" font-bold text-5xl text-stone-2 opacity-20>
      {{ project.year }}
    </div>

    <div flex flex-col gap-2 w-full>
      <div flex justify-between items-center w-full>
        <NuxtLink :href="initalLink" class="hover:underline" w-fit flex items-center gap-4 group>
          <h3 font-display text-2xl flex items-start gap-4>
            {{ project.name }}
            <span v-if="project.inProgress" mt-1 font-sans bg-emerald-4 px-2 py="0.75" text="10px" leading-none font-bold uppercase rounded-full text-stone-9>in progress</span>
          </h3>
        </NuxtLink>

        <div block sm:hidden class="text-right" top="50%" font-bold text-3xl text-stone-2 opacity-20>
          {{ project.year }}
        </div>
      </div>

      <p text-sm opacity-80>
        {{ project.description }}
      </p>

      <div text-sm flex items-center gap-3>
        <div v-for="(link, i) in project.links" :key="i" flex gap-4>
          <NuxtLink :href="link.href" target="_blank" class="hyperlink" opacity="80 hover:100">
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>

      <ul mt-2 flex items-center flex-wrap gap-2>
        <ProjectTag v-for="tag in project.tags" :key="tag">
          {{ tag }}
        </ProjectTag>
      </ul>
    </div>
  </div>
</template>

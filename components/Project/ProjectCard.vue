<script setup lang="ts">
import type { Project } from '~~/models'

const props = defineProps<{
  project: Project
  index: number
}>()

const initalLink = ref(props.project.links[0].href)

const cardRow = ref<HTMLElement>()
const card = ref<HTMLElement>()

const cardRowHovered = useElementHover(cardRow)
const cardHovered = useElementHover(card)

const openProject = () => window.open(initalLink.value, '_blank')
</script>

<template>
  <div
    ref="cardRow"
    flex items-center justify-between relative
  >
    <!-- TODO: show image over card on hover, onak fensi -->
    <div
      ref="card"
      z-2
      relative
      flex gap-4
      w-full max-w-full md:max-w-lg
      class="lg:-translate-x-4 sm:hover:(bg-stone-50/5 lg:translate-x-0) transition-all sm:pl-3 pr-5"
      :class="[{ 'bg-stone-50/5 lg:translate-x-0': cardRowHovered }]"
      py-4 rounded-md cursor-pointer
      @click="openProject"
    >
      <div hidden sm:block class="write-vertical-left rotate-180 text-right" top="50%" font-semibold text-5xl text="stone-2/20">
        {{ project.year }}
      </div>

      <div flex flex-col gap-2 w-full>
        <div flex justify-between items-center w-full>
          <div w-fit flex items-center gap-4 group>
            <h3 font-display text-2xl flex items-start gap-4 class="hover:underline" :class="{ underline: cardHovered }">
              {{ project.name }}
            </h3>
            <span v-if="project.inProgress" font-sans bg="yellow-5" px-2 py="0.75" text="10px" mb-1 leading-none font-bold uppercase rounded-full text-stone-9>wip</span>
          </div>

          <div block sm:hidden class="text-right" top="50%" font-semibold text-3xl text="stone-2/20">
            {{ project.year }}
          </div>
        </div>

        <p text-sm text-dimmed>
          {{ project.description }}
        </p>

        <div text-sm flex items-center gap-3>
          <div v-for="(link, i) in project.links" :key="i" flex gap-4>
            <NuxtLink :href="link.href" target="_blank" class="hyperlink text-dimmed-2 hover:text-dimmed">
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

    <ClientOnly>
      <div v-if="project.thumbnail" hidden md:block bg-red-7 class="outline-stone-4 outline-4 outline-offset-4">
        <a :href="project.thumbnail" target="_blank">
          <img

            rounded-md
            absolute
            top="50%" right="-30% xl:-8"
            h-64
            class="-translate-y-45% scale-130 transition-all"
            :class="[cardRowHovered ? 'opacity-100 visible rotate-0 z-10 translate-x--5' : 'opacity-4 rotate-12 filter-saturate-0']"
            :src="project.thumbnail"
          >
        </a>
      </div>
    </ClientOnly>
  </div>
</template>

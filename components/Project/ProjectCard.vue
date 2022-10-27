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
      z-5
      relative
      flex gap-4
      w-full max-w-full md:max-w-lg
      class="lg:-translate-x-4 sm:hover:(bg-stone-50/5 lg:translate-x-0) transition-all sm:pl-3 pr-5"
      :class="[{ 'sm:(bg-stone-50/5 !lg:translate-x-0)': cardRowHovered }]"
      py-4 rounded-md cursor-pointer
      @click="openProject"
    >
      <div hidden sm:block class="write-vertical-left rotate-180 text-right" top="50%" font-semibold text-5xl text="stone-2/20">
        {{ project.year }}
      </div>

      <div flex flex-col gap-2 w-full>
        <div flex justify-between items-center w-full relative>
          <div
            w-fit
            line-clamp-1
            flex items-center gap-3
          >
            <h3
              line-clamp-1
              font-display text-2xl
              flex-1
              flex items-start gap-4
              class="hover:underline" :class="{ underline: cardHovered }"
            >
              {{ project.name }}
            </h3>

            <span
              v-if="project.inProgress" font-sans px-2 py="0.75" text="10px" mb-1 leading-none font-bold uppercase rounded-full text-stone-9 filter-saturate-85
              class="gradient-warm"
            >
              wip
            </span>

            <Icon
              name="tabler:link"
              text-xl
              mb-1
              text-orange-5
              transition-all
              :class="[cardHovered
                ? 'visible opacity-100 translate-x-0'
                : 'invisible opacity-0 -translate-x-4']"
            />
          </div>

          <div
            absolute top-0 right-0
            block sm:hidden
            class="text-right"
            font-semibold
            top="-2"
            text-3xl text="stone-2/20"
          >
            {{ project.year }}
          </div>
        </div>

        <p text-sm text-dimmed>
          {{ project.description }}
        </p>

        <div text-sm flex items-center gap-3>
          <div v-for="(link, i) in project.links" :key="i" flex gap-4>
            <NuxtLink :href="link.href" target="_blank" class="hyperlink text-dimmed-2 hover:text-dimmed" @click.stop="">
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
      <div
        v-show="project.thumbnail"
        rounded-md
        absolute
        top="50%"
        right="-80% sm:-60% md:-25% lg:-10% xl:-35"
        overflow-hidden
        transition-all
        class="-translate-y-20 scale-130 opacity-4 rotate-12 filter-saturate-0 z-1"
        :class="[
          { 'lg:(visible opacity-100 -rotate-3 -translate-x-20 -translate-y-35 scale-130 filter-saturate-100 z-10)': cardRowHovered },
        ]"
      >
        <a relative :href="project.thumbnail" target="_blank">
          <img
            h-64
            :src="project.thumbnail"
          >
          <GrainCover v-show="cardRowHovered" strentgh="weak" />
        </a>
      </div>
    </ClientOnly>
  </div>
</template>

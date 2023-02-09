<script setup lang="ts">
import type { Project } from '~~/models'

const { project } = defineProps<{
  project: Project
  index: number
}>()

const cardRow = ref<HTMLElement>()
const card = ref<HTMLElement>()

const cardRowHovered = useElementHover(cardRow)
const cardHovered = useElementHover(card)

const slug = ref(slugify(project.name))

const hasLink = computed(() => project.repo || project.url)
const openProject = () => {
  if (hasLink.value && process.client)
    navigateTo(`/projects/${slug.value}`)

  // TODO: create a test that checks if project pages are in line with slugified project names
}
</script>

<template>
  <div
    ref="cardRow"
    flex items-center justify-between relative
    class="group"
  >
    <div
      ref="card"
      py-4 rounded-2xl cursor-pointer
      z-5 relative
      flex gap-4
      w-full max-w-full md:max-w-lg
      class="lg:-translate-x-4 transition sm:pl-3 pr-5 border-2 border-transparent"
      :class="[{ 'sm:(bg-opaque !lg:translate-x-0 backdrop-blur-md) border-stone-2/40 dark:border-stone-8/40': cardRowHovered }]"
      @click="openProject"
    >
      <div hidden sm:block class="write-vertical-left rotate-180 text-right" top="50%" font-semibold text-5xl text="stone-8/12 dark:white/18">
        {{ project.year }}
      </div>

      <div flex-1 flex flex-col gap-2>
        <div relative flex justify-between items-center>
          <div flex items-center gap-3>
            <h3
              line-clamp-1
              font-sans font-semibold text-xl
              flex-1 flex items-start gap-4
              class="hover:underline" :class="{ underline: cardHovered }"
            >
              {{ project.name }}
            </h3>

            <Icon
              name="ph:arrow-right-bold"
              text-lg
              transition
              duration-250
              text-accent
              class="invisible opacity-0 -translate-x-4 group-hover:(visible opacity-100 translate-x-0)"
            />
          </div>

          <div
            block sm:hidden
            absolute top="[-2]" right-0
            font-semibold
            text="stone-2/20 3xl right"
          >
            {{ project.year }}
          </div>
        </div>

        <p text-sm text-dimmed>
          {{ project.description }}
        </p>

        <div text-sm flex items-center gap-3>
          <NuxtLink
            v-if="project.url"
            :href="project.url"
            target="_blank"
            class="hyperlink text-dimmed-lighter hover:text-dimmed flex items-center gap-1"
            @click.stop
          >
            Live
          </NuxtLink>
          <NuxtLink
            v-if="project.repo"
            :href="project.repo"
            target="_blank"
            class="hyperlink text-dimmed-lighter hover:text-dimmed flex items-center gap-2"
            @click.stop
          >
            Code
          </NuxtLink>
        </div>

        <div mt-auto>
          <div mt-2 flex items-center flex-wrap gap-2>
            <ProjectTagWip v-if="project.wip" />
            <ProjectTagBlank v-if="project.vscode" class="bg-stone-3/80 dark:bg-stone-2/10 dark:text-stone-300">
              vscode
            </ProjectTagBlank>
            <ProjectTagBlank v-if="project.raycast" class="bg-stone-3/80 dark:bg-stone-2/10 dark:text-stone-300">
              raycast
            </ProjectTagBlank>
            <ProjectTag v-for="tag in project.tags" :key="tag">
              {{ tag }}
            </ProjectTag>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~~/models'

const { project } = defineProps<{
  project: Project
  index: number
}>()

const slug = ref(slugify(project.name))

const hasLink = computed(() => project.repo || project.url)
const openProject = () => {
  if (hasLink.value && process.client)
    navigateTo(`/projects/${slug.value}`)

  // TODO: create a test that checks if project pages are in line with slugified project names
}
</script>

<template>
  <!-- TODO: combine inner and outer shadow with border, for that cool new look -->
  <div
    p-10 pb-0 rounded-2xl cursor-pointer
    z-5 relative
    w-full
    overflow-hidden
    class="group bg-opaque backdrop-blur-md border-2 border-stone-2/40 dark:border-stone-8/40"
    transition-smooth
    @click="openProject"
  >
    <div h-full max-w-lg>
      <div flex-1 flex flex-col gap-2>
        <div>
          <div relative flex items-center gap-3 w="fit">
            <h3
              font-sans font-bold text-3xl line-clamp-1
              flex-1 flex items-start gap-4
              pb-2 transition underline
              decoration="wavy 2 offset-4 transparent group-hover:accent"
            >
              {{ project.name }}
            </h3>

            <Icon
              name="ph:arrow-right-bold"
              text-lg
              transition
              duration-250
              text-accent
              class="invisible opacity-0 -translate-x-2 group-hover:(visible opacity-100 translate-x-0)"
            />
          </div>

          <p text-base text-dimmed min-h="md:44px">
            {{ project.description }}
          </p>
        </div>

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

        <div>
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

      <div
        mt-8
        flex justify-center transition duration-250
        class="translate-y-18% group-hover:translate-y-8%"
      >
        <NuxtImg
          object-contain
          rounded-lg
          loading="lazy"
          h="240px"
          format="webp"
          :height="480"
          :src="project.thumbnail"
          :alt="project.name"
        />
      </div>
    </div>
  </div>
</template>

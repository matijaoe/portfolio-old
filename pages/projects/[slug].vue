<script lang="ts" setup>
const params = useRoute()
const { slug } = params.params as { slug: string }

const { project } = useProject({ slug })

const images = computed(() => {
  if (project.value?.images?.length)
    return project.value.images
  return project.value?.thumbnail ? [project.value?.thumbnail] : []
})
</script>

<template>
  <div v-if="project" row>
    <div>
      <div flex items-start justify-between>
        <BaseHeading as="h2" text-4xl sm:text-5xl md:text-6xl>
          {{ project.name }}
        </BaseHeading>

        <div flex items-center gap-2 shrink-0>
          <Button @click="navigateTo({ name: 'projects' })">
            Go back
          </Button>
          <Button
            v-if="project.repo"
            v-tooltip="{
              content: stripUrl(project.repo),
              theme: 'info-tooltip',
              placement: 'bottom',
              distance: 8,
            }"
            :to="project.repo" external new-tab
          >
            Code
          </Button>
          <Button
            v-if="project.url"
            v-tooltip="{
              content: stripUrl(project.url),
              theme: 'info-tooltip',
              placement: 'bottom',
              distance: 8,
            }"
            class="!px-4"
            :to="project.url" external variant="accent" new-tab
          >
            Live
          </Button>
        </div>
      </div>

      <ul mt-4 flex items-center flex-wrap gap-2>
        <ProjectTag v-for="tag in project.tags" :key="tag">
          {{ tag }}
        </ProjectTag>
      </ul>

      <div v-if="project.description" max-w="50ch" mt-6>
        <p>{{ project.description }}</p>
      </div>
    </div>

    <div v-if="images?.length" mt-10>
      <div space-y-8 rounded-2xl p-2 bg-accent overflow-hidden>
        <div
          v-for="image in images"
          :key="image" p-1
          bg-black rounded-xl
          overflow-hidden
        >
          <div class="bg-black dark:(bg-accent)" overflow-hidden rounded-lg>
            <a relative :href="image" target="_blank">
              <NuxtImg
                format="webp"
                :src="image"
                alt="Project thumbnail"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

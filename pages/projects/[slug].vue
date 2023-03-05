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
        <H as="h2" text-4xl sm:text-5xl md:text-6xl>
          {{ project.name }}
        </H>

        <div flex items-center gap-2 shrink-0>
          <Button @click="navigateTo({ name: 'projects' })" !bg-transparent>
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
            :to="project.url" external variant="accent" new-tab
          >
            See live
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
      <div
        v-for="image in images"
        :key="image" p-1.5
        bg-black dark:bg-accent rounded-xl
        overflow-hidden
      >
        <div class="bg-black dark:(bg-accent)" overflow-hidden rounded-lg>
          <NuxtLink
            relative
            :to="image" target="_blank" external
          >
            <NuxtImg
              width="1904px"
              format="webp"
              :src="image"
              alt="Project thumbnail"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { skills } from '~~/data/skills'

const favsOnly = ref(false)
const shownSkills = computed(() => favsOnly.value ? skills.filter(({ favorite }) => !!favorite) : skills)
</script>

<template>
  <AboutSection title="Skills">
    <div
      v-auto-animate
      grid grid-cols="1 md:2 lg:4" grid-rows="4" gap-4
    >
      <a
        v-for="item in shownSkills"
        :key="item.value"
        :href="item.url"
        target="_blank"
        class="group"
      >
        <article
          select-none p-8 text-center
          h-full
          rounded-2xl transition-all duration-300
          class="backdrop-blur-md bg-stone-50 ring-1 ring-stone-9/5 dark:(bg-stone-8/40 ring-stone-7/40) hover:(-translate-y-1)"
        >
          <div flex flex-col justify-center items-center gap-6>
            <Icon shrink-0 :name="item.icon" text-5xl />

            <div flex flex-col gap-2>
              <p font-medium text-lg>
                {{ item.name }}
              </p>
              <p text-stone-5 dark:text-stone-4 text-sm>
                {{ item.desc ?? 'Random thing about it' }}
              </p>
            </div>
          </div>
        </article>
      </a>
    </div>
  </AboutSection>
</template>

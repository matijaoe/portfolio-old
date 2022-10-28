<script lang="ts" setup>
import { podcasts } from '~~/data/podcasts'

const grid = ref<HTMLElement | null>(null)
useHorizontalScroll(grid)
</script>

<template>
  <div
    ref="grid"
    v-dragscroll
    mt--1
    xl:ml--20
    xl:mr--20
    pt-1
    pb-3
    flex gap-2
    overflow-x-auto
    cursor-grab
  >
    <!-- TODO: link -->
    <div
      v-for="(pod, i) in podcasts"
      :key="i"
      href=""
      target="_blank"
      flex-shrink-0
      rounded-lg
      p-1
      class="hover:gradient-warm group"
    >
      <article
        rounded-md
        relative
        overflow-hidden
      >
        <!-- group-hover:hidden -->
        <GrainCover strentgh="mid" />
        <img h-34 aspect-square :src="pod" alt="">
      </article>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { podcasts } from '~~/data/podcasts'

const grid = ref<HTMLElement | null>(null)
// useHorizontalScroll(grid)

const { isTouchDevice } = useTouchDevice()
</script>

<template>
  <div
    ref="grid"
    v-dragscroll="!isTouchDevice"
    mt--1
    pt-1
    pb-3
    flex gap-2
    overflow-x-auto
    cursor-grab
    class="hide-scrollbar"
    :class="[{ 'snap-x scroll-mandatory': isTouchDevice }]"
  >
    <!-- TODO: link -->
    <div
      v-for="(pod, i) in podcasts"
      :key="i"
      href=""
      target="_blank"
      flex-shrink-0
      rounded-lg
      p="0.5"
      class="hover:gradient-warm group"
      :class="[{ 'snap-start': isTouchDevice }]"
    >
      <figure
        rounded-md
        relative
        overflow-hidden
      >
        <!-- group-hover:hidden -->
        <!-- <GrainCover strentgh="mid" /> -->
        <img h-34 aspect-square :src="pod" alt="">
      </figure>
    </div>
  </div>
</template>

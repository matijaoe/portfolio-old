<script lang="ts" setup>
import { podcasts } from '~~/data/podcasts'

const { isTouchDevice } = useTouchDevice()
</script>

<template>
  <div
    v-dragscroll="!isTouchDevice"
    mt--1 pt-1 pb-3 flex gap-2
    overflow-x-auto cursor-grab
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
      rounded="0.625rem"
      p="0.5"
      bg="hover:(stone-8 dark:stone-2)"
      class="group"
      :class="[{ 'snap-start': isTouchDevice }]"
    >
      <figure
        rounded-lg
        relative
        overflow-hidden
      >
        <NuxtImg
          loading="lazy"
          format="webp"
          height="256"
          h-34 aspect-square
          :src="pod.cover"
          :alt="pod.name"
        />
      </figure>
    </div>
  </div>
</template>

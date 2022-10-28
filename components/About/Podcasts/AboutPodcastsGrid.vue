<script lang="ts" setup>
import { podcasts } from '~~/data/podcasts'
</script>

<template>
  <div
    pb-3
    flex gap-2
    overflow-x-scroll
    snap-x scroll-mandatory
  >
    <a
      v-for="(pod, i) in podcasts"
      :key="i"
      href=""
      target="_blank"
      class="hover:gradient-warm"
      flex-shrink-0
      rounded-lg
      p-1
      snap-start
    >
      <article
        rounded-md
        relative
        overflow-hidden
      >
        <GrainCover strentgh="weak" />
        <img h-40 aspect-square :src="pod" alt="">
      </article>
    </a>
  </div>
</template>

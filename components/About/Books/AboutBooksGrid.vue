<script lang="ts" setup>
import { books } from '~~/constants/books'
</script>

<template>
  <div
    pb-3
    flex gap-2
    overflow-x-scroll
    snap-x scroll-mandatory
  >
    <a
      v-for="(book, i) in books"
      :key="i"
      :href="book.url"
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
        <img h-50 :src="book.cover" alt="">
      </article>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { books } from '~~/data/books'

const { isTouchDevice } = useTouchDevice()

// TODO: set snap by default, but disable it when mousepressed (to drag)
</script>

<template>
  <div
    mt--1
    pt-1
    pb-3
    flex gap-2 flex-nowrap
    overflow-x-auto
    cursor-grab
    class="hide-scrollbar"
    :class="[{ 'snap-x scroll-mandatory': isTouchDevice }]"
  >
    <div
      v-for="(book, i) in books"
      :key="i"
      :href="book.url"
      target="_blank"
      flex-shrink-0
      rounded="0.625rem"
      p="0.5"
      hover:shadow-md
      bg="hover:(stone-8 dark:stone-2)"
      class="group"
      transition-base
      :class="[{ 'snap-start': isTouchDevice }]"
    >
      <div relative overflow-hidden rounded-lg>
        <div
          transition-base
          class="opacity-0 translate-y-50%  group-hover:(opacity-100 translate-y-0 z-3)"
          absolute right-0 left-0 bottom-0 h="50%"
          bg-gradient-to-t from-stone-9 text-stone-2
        >
          <p flex items-end justify-center w-full h-full pb-4 px-2 text-center>
            <a hover:underline uppercase font-bold :href="book.url" target="_blank" line-clamp-2 class="text-11px" leading-snug>{{ book.name }}</a>
          </p>
        </div>

        <figure relative>
          <NuxtImg
            loading="lazy"
            format="webp"
            height="256"
            h="46"
            :src="book.cover"
            :alt="book.name"
          />
        </figure>
      </div>
    </div>
  </div>
</template>


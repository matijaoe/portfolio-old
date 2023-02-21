<script lang="ts" setup>
const days = computed(() => {
  const start = new Date('2020-4-27')
  const today = new Date()

  // get time in days between start and today
  const diff = Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
  return diff
})
</script>

<template>
  <AboutSection title="Book favourites">
    <div mt--2 text-dimmed>
      <p>
        Fell in love with reading during 2020. Here are some of my favorites.
      </p>
      <p>
        Fun fact, haven't missed a day of reading in {{ days }} days.
      </p>
      <p>
        Find me on
        <NuxtLink
          class="group"
          inline-flex items-center gap-2
          to="https://www.goodreads.com/matijao"
          target="_blank"
          external
          hyperlink
        >
          Goodreads
          <Icon
            name="simple-icons:goodreads"
            text="yellow-6 dark:yellow-5"
            mt-1
            class="opacity-0 translate-x--3  scale-50 group-hover:(opacity-100 translate-x-0 rotate-0 scale-100)"
            transition-base
          />
        </NuxtLink>
      </p>
    </div>

    <AboutBooksGrid />
  </AboutSection>
</template>

<script lang="ts" setup>
</script>

<template>
  <AboutSection title="Book favourites">
    <div mt--2 text-dimmed>
      <p>
        Fell in love with reading during 2020. Here are some of my favourites.
      </p>
      <p>
        Fun fact, haven't missed a day of reading in 922 days (and counting).
      </p>
      <p>
        Find me on
        <a
          class="group"
          inline-flex items-center gap-2
          href="https://www.goodreads.com/matijao"
          target="_blank"
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
        </a>
      </p>
    </div>

    <AboutBooksGrid />
  </AboutSection>
</template>

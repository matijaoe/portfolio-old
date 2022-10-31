<script lang="ts" setup>
</script>

<template>
  <AboutSection title="Book favourites">
    <div mt--2 text-dimmed>
      <p>
        Started my journey in 2020, fell in love with it not much after.
      </p>
      <p>
        Fun fact, haven't missed a day of reading in 914 days (and counting).
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
            class="opacity-0 translate-x--3 transition scale-50 group-hover:(opacity-100 translate-x-0 rotate-0 scale-100)"
          />
        </a>
      </p>
    </div>

    <AboutBooksGrid />
  </AboutSection>
</template>

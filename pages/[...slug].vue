<template>
  <main row class="prose prose-stone dark:prose-invert max-w-2xl font-mono">
    <ContentDoc />
  </main>
</template>

<style lang="postcss" scoped>
  .prose :where(:is(h1,h2,h3,h4,h5,h6) > a):not(:where(.not-prose,.not-prose *)) {
    @apply no-underline text-accent;
  }
</style>

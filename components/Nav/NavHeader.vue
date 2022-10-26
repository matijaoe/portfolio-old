<script lang="ts" setup>

</script>

<template>
  <div
    flex items-center gap-6
    py-3
    pl-8
    pr-2
  >
    <!-- max-w="full xl:6xl" -->
    <header
      mx-auto w-full
      flex flex-grow-1 flex-shrink-0 justify-center items-center gap-6
      text-base
    >
      <BaseLine hidden md:block />

      <NavBar />

      <BaseLine hidden md:block />
    </header>
  </div>
</template>

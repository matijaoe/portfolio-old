<script lang="ts" setup>

</script>

<template>
  <div
    flex items-center gap-6
    py-4
  >
    <BaseLine hidden xl:block />

    <header
      max-w="full xl:6xl"
      mx-auto w-full
      flex flex-grow-1 flex-shrink-0 justify-center sm:justify-between items-center gap-6
      text-base
    >
      <div hidden sm:block>
        <NuxtLink to="/">
          <div flex items-center gap-2>
            <Icon text-4xl name="ph:cloud-rain-fill" />
          </div>
        </NuxtLink>
      </div>

      <BaseLine hidden md:block />

      <NavBar />
    </header>

    <BaseLine hidden xl:block />
  </div>
</template>

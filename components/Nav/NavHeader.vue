<script lang="ts" setup>

</script>

<template>
  <div
    flex items-center gap-6
    py-4
  >
    <BaseLine class="hidden xl:block" />

    <header
      max-w="full xl:6xl"
      mx-auto w-full
      flex flex-grow-1 flex-shrink-0 justify-between items-center gap-6
      text-base
    >
      <div>
        <NuxtLink to="/">
          <div flex items-center gap-2>
            <Icon text-4xl name="ph:cloud-rain-fill" />
          </div>
        </NuxtLink>
      </div>

      <BaseLine />

      <NavBar />
    </header>

    <BaseLine class="hidden xl:block" />
  </div>
</template>

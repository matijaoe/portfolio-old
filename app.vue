<script lang="ts" setup>
useHead({
  title: 'Matija Osrecki',
})

const { showGrain } = useGrain()

useShortcuts()
</script>

<template>
  <NuxtLoadingIndicator />

  <div min-h-screen text-default font-sans>
    <NuxtLayout />
    <GrainCover
      v-if="showGrain"
      opacity="4"
    />
  </div>
</template>

<style>
@import url('https://fonts.cdnfonts.com/css/palmtick');
@import url('https://fonts.cdnfonts.com/css/satoshi');

html {
  background: #f5f5f4;
}

html.dark {
  background: #1c1917;
  color-scheme: dark;
}

body {
  overflow-x: hidden;
}

::selection {
  background: #d6d3d186;
  color: #44403c;
}

.dark ::selection {
  background: #44403c6d;
  color: #d6d3d1;
}

.hide-scrollbar::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>

<script lang="ts" setup>
useHead({
  title: 'Matija Osrecki',
})

const { showGrain } = useGrain()

useShortcuts()
</script>

<template>
  <NuxtLoadingIndicator />

  <div min-h-screen text-default font-sans flex bg-default-1>
    <NuxtLayout />
    <ClientOnly>
      <GrainCover
        v-if="showGrain"
        opacity="4"
      />
    </ClientOnly>
  </div>
</template>

<style>
@import url('https://fonts.cdnfonts.com/css/palmtick');
@import url('https://fonts.cdnfonts.com/css/satoshi');

html {
  background: #fafaf9; /* stone-50 */
}

html.dark {
  background: #1c1917; /* stone-900 */
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

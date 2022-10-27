<script lang="ts" setup>
useHead({
  title: 'Matija Osrecki',
})
</script>

<template>
  <div>
    <div
      bg-stone-9
      text-base
      font-sans
    >
      <NuxtLayout />
    </div>
    <!-- <GrainCover  /> -->
  </div>
</template>

<style>
@import url('https://fonts.cdnfonts.com/css/palmtick');

body {
  background: #08070b;
  color-scheme: dark;
}

::selection {
  background: #d4d4d4;
  color: #292524;
}
</style>

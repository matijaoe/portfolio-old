<script lang="ts" setup>
useHead({
  title: 'Matija Osrecki',
})
</script>

<template>
  <div overflow-y-auto>
    <div
      min-h-screen
      text-default
      font-sans
      bg-shade-1
    >
      <NuxtLayout />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.cdnfonts.com/css/palmtick');
@import url('http://fonts.cdnfonts.com/css/satoshi');

html {
  background: #f5f5f4;
}

html.dark {
  background: #1c1917;
  color-scheme: dark;
}

::selection {
  background: #d6d3d1;
  color: #44403c;
}

.dark ::selection {
  background: #44403c;
  color: #d6d3d1;
}
</style>

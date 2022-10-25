<script lang="ts" setup>
useHead({
  title: 'Matija Osrecki',
})
</script>

<template>
  <div
    h-screen w-screen
    text-stone-3
    font-sans
    class="bg-gradient-to-tr from-black via-stone-9"
    :class="[$route.meta.accent]"
  >
    <div id="cover" h-screen pl-6>
      <NuxtLayout />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.cdnfonts.com/css/palmtick');

#cover {
  background-image: url('assets/noise2.png');
  background-attachment: fixed;
  backdrop-filter: grayscale(65%);
}
</style>

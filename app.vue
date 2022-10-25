<script lang="ts" setup>
useHead({
  title: 'Home | Matija Osrecki',
})
</script>

<template>
  <div
    font="sans"
    class="bg-gradient-to-tr from-black via-stone-9"
    :class="[$route.meta.accent]"
    min-h-screen w-screen
    text-stone-3
  >
    <div id="cover" min-h-screen>
      <NuxtLayout />
    </div>
  </div>
</template>

<style scoped>
@import url('http://fonts.cdnfonts.com/css/satoshi');
@import url('http://fonts.cdnfonts.com/css/crima');
@import url('http://fonts.cdnfonts.com/css/palmtick');

#cover {
  background-image: url('assets/noise2.png');
  background-attachment: fixed;
  backdrop-filter: grayscale(65%);
}
</style>

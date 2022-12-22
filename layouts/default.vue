<script lang="ts" setup>
const { showGrain } = useGrain()
const { isDark } = useTheme()
</script>

<template>
  <div flex-1 flex flex-col>
    <TheHeader />

    <main flex-1 flex flex-col p="t-24 b-40 md:(t-32 b-40)">
      <NuxtPage />
      <!-- <GrainCover v-show="showGrain" opacity="2" /> -->
      <GrainCover2 v-show="showGrain" :opacity="isDark ? 18 : 5" />
      <!-- <div id="texture" /> -->
    </main>

    <TheFooter mt-auto />
  </div>
</template>

<style lang="postcss" scoped>
#texture {
  background-image: url('assets/images/white_wall_hash.webp');
  background-repeat: repeat;
  position: fixed;
  width: 100vw;
  inset: 0;
  height: 100vh;
  pointer-events: none;
  z-index: -1;
}

.dark #texture {
  background-image: none;
}
</style>

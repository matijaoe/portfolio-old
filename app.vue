<script lang="ts" setup>
useShortcuts()

useHead({
  script: [
    {
      'src': 'https://plausible.io/js/script.js',
      'data-domain': 'matijao.com',
      'defer': true,
    },
  ],
})

const { showGrain } = useGrain()
const { isDark } = useTheme()
</script>

<template>
  <Html lang="en">
    <Body text-default font-sans transition-smooth bg-default-1>
      <div min-h-screen flex flex-col>
        <NuxtLayout />
      </div>
      <!-- <GrainCover v-show="showGrain" opacity="2" /> -->
      <GrainCover2 v-show="showGrain" :opacity="isDark ? 10 : 4" />
      <div v-show="!isDark" id="texture" />
    </Body>
  </Html>
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

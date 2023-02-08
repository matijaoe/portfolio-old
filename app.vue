<script lang="ts" setup>
import '@fontsource/ia-writer-mono'

useGlobalShortcuts()

const { showGrain } = useGrain()
const { isDark } = useTheme()
</script>

<template>
  <Html lang="en">
    <Body text-default font-sans transition-smooth bg-default-1>
      <div min-h-screen flex flex-col w-screen overflow-x-hidden>
        <NuxtLayout />
      </div>
      <GrainCover v-show="showGrain" :opacity="isDark ? 10 : 4" />
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

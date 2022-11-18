<script lang="ts" setup>
const { isDark } = useTheme()
</script>

<template>
  <div
    flex-1
    flex
    flex-col
  >
    <TheHeader />

    <main
      main
      flex-1
      flex flex-col
      p="t-24 b-40 md:(t-32 b-40)"
    >
      <NuxtPage />
      <!-- <GrainCover v-if="isDark" opacity="2" /> -->
    </main>

    <TheFooter mt-auto />
  </div>
</template>

<style scoped>
.hero {
  background-image: url('assets/images/56.-Cream-Whisper.jpg');
  background-size: cover;
}
</style>

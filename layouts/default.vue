<script lang="ts" setup>

</script>

<template>
  <div
    flex-1
    flex
    flex-col
  >
    <TheHeader />
    <!-- <div
      v-if="$route.name === 'index'"
      fixed
      h="100vh"
      inset-0 z--2
      class="hero"
      overflow-hidden
    /> -->

    <main
      main
      flex-1
      flex flex-col
      p="t-24 b-40 md:(t-32 b-40)"
    >
      <NuxtPage />
    </main>

    <GrainCover opacity="2" />

    <TheFooter mt-auto />
  </div>
</template>

<style scoped>
.hero {
  background-image: url('assets/images/56.-Cream-Whisper.jpg');
  background-size: cover;
}
</style>

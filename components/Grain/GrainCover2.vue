<script lang="ts" setup>
</script>

<template>
  <div id="grain" overflow="hidden" />
</template>

<style scoped>
#grain {
  background-image: url('assets/images/grainy.png');
  background-repeat: repeat;
  position: fixed;
  width: 600%;
  left: -200%;
  height: 600%;
  top: -300%;
  animation: home-grain 11s steps(10) infinite;
  pointer-events: none;
  z-index: 500;
}
</style>

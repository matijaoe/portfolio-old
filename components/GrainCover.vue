<script lang="ts" setup>
const props = withDefaults(defineProps<{
  strentgh?: 'weakest' | 'weak' | 'mid' | 'higher'
}>(), {
  strentgh: 'weak',
})

// const opacityStyle = computed(() => {
//   switch (props.strentgh) {
//     case 'weakest':
//       return 'opacity-[0.02]'
//     case 'weak':
//       return 'opacity-[0.05]'
//     case 'mid':
//       return 'opacity-[0.1]'
//     case 'higher':
//       return 'opacity-[0.14]'
//     default:
//       return 'opacity-[0.05]'
//   }
// })
</script>

<template>
  <div
    id="grain"
    overflow="hidden"
  />
  <!-- :class="opacityStyle" -->
</template>

<style scoped>
#grain {
  background-image: url('assets/images/notfound-noise.png');
  background-repeat: repeat;
  position: fixed;
  width: 600%;
  left: -200%;
  height: 600%;
  top: -300%;
  animation: home-grain 6s steps(10) infinite;
  pointer-events: none;
  z-index: 500;
}
</style>

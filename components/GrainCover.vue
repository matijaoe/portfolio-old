<script lang="ts" setup>
const props = withDefaults(defineProps<{
  strentgh: 'weak' | 'mid'
}>(), {
  strentgh: 'weak',
})

const opacityStyle = computed(() => {
  switch (props.strentgh) {
    case 'weak':
      return 'opacity-[0.05]'
    case 'mid':
      return 'opacity-[0.1]'
    default:
  }
})
</script>

<template>
  <div
    id="grain"
    :class="opacityStyle"
  />
</template>

<style scoped>
#grain {
  background-image: url('assets/images/notfound-noise.png');
  background-repeat: repeat;
  position: absolute;
  width: 600%;
  left: -200%;
  height: 600%;
  top: -300%;
  animation: home-grain 6s steps(10) infinite;
  pointer-events: none;
  z-index: 500;
}
</style>

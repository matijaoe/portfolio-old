<script lang="ts" setup>

</script>

<template>
  <div
    id="grain"
    bg-red-5 fixed inset-0 md:inset-4
  />
</template>

<style scoped>
#grain {
  /* TODO: animation broken */
  background-image: url('assets/images/notfound-noise.png');
  animation: home-grain 6s steps(10) infinite;
  background-repeat: repeat;
  height: 300%;
  left: -50%;
  opacity: .04;
  position: fixed;
  top: -100%;
  width: 300%;
  z-index: 100;
  pointer-events: none
}

@keyframes home-grain {
  0%,
  to {
    transform: translate(0)
  }
  10% {
    transform: translate(-5%, -10%)
  }
  20% {
    transform: translate(-15%, 5%)
  }
  30% {
    transform: translate(7%, -25%)
  }
  40% {
    transform: translate(-5%, 25%)
  }
  50% {
    transform: translate(-15%, 10%)
  }
  60% {
    transform: translate(15%)
  }
  70% {
    transform: translateY(15%)
  }
  80% {
    transform: translate(3%, 35%)
  }
  90% {
    transform: translate(-10%, 10%)
  }
}
</style>

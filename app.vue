<script lang="ts" setup>
useHead({
  title: 'Matija Osrecki',
})
</script>

<template>
  <div
    class="sm:(p-4 overflow-hidden)"
  >
    <div
      text-stone-3
      rounded-lg
      font-sans
      class="bg-gradient-to-tr from-black via-stone-9"
      :class="[$route.meta.accent]"
    >
      <div id="cover">
        <NuxtLayout />
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.cdnfonts.com/css/palmtick');
body {
  background: black;
}

#cover {
  background-image: url('assets/noise2.png');
  background-attachment: fixed;
  backdrop-filter: grayscale(65%);
}

.page-enter-active {
  transition: all 100ms ease-out;
}

.page-leave-active {
  transition: all 150ms cubic-bezier(1, 0.5, 0.8, 1);
}

.page-enter-from {
  transform: translateY(-1rem);
  opacity: 0;
}
.page-leave-to {
  transform: translateY(1rem);
  opacity: 0;
}

::selection {
  background: #d4d4d4;
  color: #292524;
}
</style>

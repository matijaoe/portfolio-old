<script lang="ts" setup>
useHead({
  title: 'Matija Osrecki',
})
</script>

<template>
  <div
    class="md:(p-4 overflow-hidden)"
  >
    <div
      text-stone-3
      md:rounded-lg
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
  background-image: url('assets/images/noise2.png');
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

/* Extract into custom file */
.v-popper--theme-info-tooltip .v-popper__inner {
  background: #292524;
  color: #d4d4d4;
  padding: 5px 10px;
  font-size: 13px;
  border-radius: 4px;
  border: #57534e solid 1px;
}

.v-popper--theme-info-tooltip .v-popper__arrow-inner {
  visibility: hidden;
}

.v-popper--theme-info-tooltip .v-popper__arrow-outer {
  visibility: hidden;
}
</style>

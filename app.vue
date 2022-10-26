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
      :class="[$route.meta.bg]"
    >
      <NuxtLayout />
    </div>

    <GrainCover />
  </div>
</template>

<style>
@import url('https://fonts.cdnfonts.com/css/palmtick');

body {
  background: black;
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
  background: rgba(250,250,249,0.15);;
  color: #d4d4d4;
  padding: 5px 10px;
  font-size: 13px;
  border-radius: 4px;
}

.v-popper--theme-info-tooltip .v-popper__arrow-inner {
  visibility: hidden;
}

.v-popper--theme-info-tooltip .v-popper__arrow-outer {
  visibility: hidden;
}
</style>

<script lang="ts" setup>

</script>

<template>
  <kbd
    transition-smooth
    bg-default-2
    font-mono text-sm text-default leading-none
    p="y-1 x-1.5"
    rounded-md
  >
    <span text-default>
      <slot />

    </span>
  </kbd>
</template>

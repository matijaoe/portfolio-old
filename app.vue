<script lang="ts" setup>
useShortcuts()
</script>

<template>
  <Html lang="en">
    <Body
      bg-stone-50 dark:bg-stone-9
      text-default font-sans
      transition-smooth
    >
      <div
        min-h-screen w-screen overflow-x-hidden
        flex
      >
        <NuxtLayout />
      </div>
    </Body>
  </Html>
</template>


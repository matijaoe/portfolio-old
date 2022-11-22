<script lang="ts" setup>
useShortcuts()
</script>

<template>
  <Html lang="en">
    <Body
      text-default
      font-sans
      transition-smooth
      bg-default-1
    >
      <div
        min-h-screen
        flex
        flex-col
      >
        <NuxtLayout />
      </div>
    </Body>
  </Html>
</template>


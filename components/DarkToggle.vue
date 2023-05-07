<script lang="ts" setup>
const { isDark, toggleDark } = useTheme()
</script>

<template>
  <!-- TODO: transition -->
  <button
    v-tooltip="{
      content: '⌘+J',
      theme: 'info-tooltip',
      placement: 'left',
    }"
    flex items-center
    text-xl
    aria-label="Toggle dark mode"
    text-default
    opacity-50
    hover:opacity-100
    @click="toggleDark"
  >
    <Icon v-show="!isDark" name="ph:moon-duotone" />
    <Icon v-show="isDark" name="ph:sun-duotone" />
  </button>
</template>

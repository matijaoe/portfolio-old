<script lang="ts" setup>
const { isDark, toggleDark } = useTheme()
</script>

<template>
  <button
    py-1
    transition flex items-center text-opaque hover:text-default text-xl md:text-2xl
    aria-label="Toggle dark mode"
    @click="toggleDark"
  >
    <Icon v-show="!isDark" name="tabler:moon" />
    <Icon v-show="isDark" name="tabler:sun" />
  </button>
</template>

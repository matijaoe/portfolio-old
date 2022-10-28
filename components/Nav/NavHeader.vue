<script lang="ts" setup>
const { isDark, toggleDark } = useTheme()
</script>

<template>
  <header
    py-3
    flex-grow-1 flex-shrink-0
  >
    <div
      max-w="full xl:5xl"
      grid grid-cols="[100px_1fr_100px]" gap-4 items-center mx-auto
    >
      <!-- flex justify-center items-center gap-4 -->
      <div />

      <NavBar mx-auto />

      <div justify-self-end>
        <button @click="toggleDark">
          <Icon v-show="!isDark" name="tabler:moon" text-2xl />
          <Icon v-show="isDark" name="tabler:sun" text-2xl />
        </button>
      </div>
    </div>
  </header>
</template>

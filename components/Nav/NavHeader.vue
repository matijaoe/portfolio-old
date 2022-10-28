<script lang="ts" setup>
const { isDark, toggleDark } = useTheme()
</script>

<template>
  <header
    fixed
    top-0
    left-0
    right-0
    py-6
    flex-grow-1 flex-shrink-0
    z-1000
  >
    <div
      row
      max-w="full xl:5xl"
      grid grid-cols="[40px_1fr_40px]" gap-2 items-center mx-auto
    >
      <div>
        <Icon v-show="isDark" name="tabler:diamonds" text-2xl />
      </div>

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


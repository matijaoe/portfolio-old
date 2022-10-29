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
      <NuxtLink to="/">
        <Icon name="tabler:seeding" text-2xl text-opaque hover:text-green-5 />
      </NuxtLink>

      <NavBar mx-auto />

      <div justify-self-end>
        <button transition-all flex items-center text-opaque hover:text-default text-2xl @click="toggleDark">
          <Icon v-show="!isDark" name="tabler:moon" />
          <Icon v-show="isDark" name="tabler:sun" />
        </button>
      </div>
    </div>
  </header>
</template>


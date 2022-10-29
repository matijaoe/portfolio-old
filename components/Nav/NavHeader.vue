<script lang="ts" setup>
const { isDark, toggleDark } = useTheme()

const { showGrain, toggleGrain } = useGrain()
</script>

<template>
  <header
    fixed
    top-0
    left-0
    right-0
    py-6
    flex-grow-1 flex-shrink-0
    z-200
  >
    <div
      row
      max-w="full xl:5xl"
      grid grid-cols="[60px_1fr_60px]" gap-2 items-center mx-auto
    >
      <NuxtLink to="/">
        <Icon name="tabler:seeding" text-2xl text-opaque hover:text-green-5 />
      </NuxtLink>

      <NavBar mx-auto />

      <div justify-self-end flex items-center justify-end gap-5>
        <button
          v-tooltip="{
            delay: 0,
            content: showGrain ? 'Clean things up' : 'Grainy goodness',
            theme: 'info-tooltip',
            placement: 'bottom',
          }"
          py-1
          transition-all flex items-center text-opaque hover:text-default text-2xl
          @click="toggleGrain"
        >
          <Icon v-show="showGrain" name="tabler:wand-off" />
          <Icon v-show="!showGrain" name="tabler:wand" />
        </button>
        <button
          py-1
          transition-all flex items-center text-opaque hover:text-default text-2xl
          @click="toggleDark"
        >
          <Icon v-show="!isDark" name="tabler:moon" />
          <Icon v-show="isDark" name="tabler:sun" />
        </button>
      </div>
    </div>
  </header>
</template>


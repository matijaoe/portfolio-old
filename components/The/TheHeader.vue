<script lang="ts" setup>
</script>

<template>
  <header
    fixed
    top-0
    left-0
    w-screen
    py-4 md:py-6
    flex-grow-1 flex-shrink-0
    z-200
  >
    <div
      row
      max-w="full xl:5xl"
      grid grid-cols="[100px_1fr_100px]" gap-2 items-center mx-auto
    >
      <NuxtLink to="/" aria-label="Logo">
        <Icon transition name="tabler:seeding" text-lg md:text-2xl text-opaque hover:text-green-5 />
      </NuxtLink>

      <NavBar mx-auto />

      <div justify-self-end flex items-center justify-end gap-5>
        <button
          aria-label="Command prompt"
          py-1
          transition flex items-center text-opaque hover:text-default text-lg md:text-2xl
        >
          <Icon name="tabler:command" />
        </button>

        <DarkToggle />
      </div>
    </div>
  </header>
</template>


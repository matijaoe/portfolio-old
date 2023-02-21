<script lang="ts" setup>
useHead({
  title: 'Contact | Matija Osrečki',
})
</script>

<template>
  <div row>
    <H as="h2" text-4xl sm:text-5xl md:text-6xl>
      Say hello
    </H>

    <div mt-8>
      <NuxtLink
        to="mailto:matija.osrecki@gmail.com"
        external
        class="text-2xl sm:text-3xl md:text-5xl" underline decoration-accent hover:bg-accentop rounded-sm
      >
        matija.osrecki@gmail.com
      </NuxtLink>
    </div>
  </div>
</template>

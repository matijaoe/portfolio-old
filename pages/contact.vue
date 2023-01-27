<script lang="ts" setup>
useHead({
  title: 'Contact | Matija Osrečki',
})
</script>

<template>
  <div row>
    <BaseHeading as="h2" text-4xl sm:text-5xl md:text-6xl>
      Say hello
    </BaseHeading>

    <div py10>
      <CardBtc w-64 aspect-square />
    </div>

    <div mt-8>
      <a
        href="mailto:matija.osrecki@gmail.com" class="text-2xl sm:text-3xl md:text-5xl" underline decoration-accent hover:bg-accentop rounded-sm
      >
        matija.osrecki@gmail.com
      </a>
    </div>
  </div>
</template>

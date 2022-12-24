<script lang="ts" setup>
useShortcuts()

useHead({
  script: [
    {
      'src': 'https://plausible.io/js/script.js',
      'data-domain': 'matijao.com',
      'defer': true,
    },
  ],
})
</script>

<template>
  <Html lang="en">
    <Body text-default font-sans transition-smooth bg-default-1>
      <div min-h-screen flex flex-col>
        <NuxtLayout />
      </div>
    </Body>
  </Html>
</template>

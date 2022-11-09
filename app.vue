<script lang="ts" setup>
useShortcuts()
</script>

<template>
  <Html lang="en">
    <Head>
      <Script src="https://plausible.io/js/script.js" data-domain="matijao.com" defer></Script>
    </Head>
    <Body
      bg-stone-50 dark:bg-stone-9
      text-default font-sans
      transition-smooth
    >
      <div
        min-h-screen w-screen overflow-x-hidden
        flex
      >
        <NuxtLayout />
      </div>
    </Body>
  </Html>
</template>


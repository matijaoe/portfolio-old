<script lang="ts" setup>
useShortcuts()
</script>

<template>
  <Html lang="en">
    <Head>
      <Script src="https://plausible.io/js/script.js" data-domain="matijao.com" defer />
    </Head>
    <Body
      text-default
      font-sans
      transition-smooth
      bg-stone-50 dark:bg-stone-9
    >
      <div
        rounded-md
        flex
        p-2
      >
        <NuxtLayout />
      </div>
    </Body>
  </Html>
</template>


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
      bg-default-1
    >
      <div
        min-h-screen
        flex
        flex-col
      >
        <NuxtLayout />
      </div>
    </Body>
  </Html>
</template>

